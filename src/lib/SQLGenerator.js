const generateSQL = (nodes, edges) => {
  let sql = '';

  // 1. Generar sentencias CREATE TABLE
  nodes.forEach(node => {
    const tableName = node.data.label.replace(/\s+/g, '_').toLowerCase();
    let columns = [];
    let primaryKeys = [];

    node.data.attributes.forEach(attr => {
      const columnName = attr.name.replace(/\s+/g, '_').toLowerCase();
      const columnType = attr.type.toUpperCase();
      columns.push(`  ${columnName} ${columnType}`);
      if (attr.isPK) {
        primaryKeys.push(columnName);
      }
    });

    if (primaryKeys.length > 0) {
      columns.push(`  PRIMARY KEY (${primaryKeys.join(', ')})`);
    }

    sql += `CREATE TABLE ${tableName} (\n`;
    sql += columns.join(',\n');
    sql += `\n);\n\n`;
  });

  // 2. Generar sentencias ALTER TABLE para las FOREIGN KEYs
  edges.forEach(edge => {
    const sourceNode = nodes.find(n => n.id === edge.source);
    const targetNode = nodes.find(n => n.id === edge.target);

    if (sourceNode && targetNode) {
      const sourceTable = sourceNode.data.label.replace(/\s+/g, '_').toLowerCase();
      const targetTable = targetNode.data.label.replace(/\s+/g, '_').toLowerCase();

      const targetPK = targetNode.data.attributes.find(attr => attr.isPK);
      if (targetPK) {
        const fkColumnName = `${targetTable}_${targetPK.name}`.toLowerCase();
        const targetPKName = targetPK.name.toLowerCase();

        sql += `ALTER TABLE ${sourceTable}\n`;
        sql += `ADD COLUMN ${fkColumnName} ${targetPK.type.toUpperCase()},\n`;
        sql += `ADD CONSTRAINT fk_${sourceTable}_${targetTable} FOREIGN KEY (${fkColumnName}) REFERENCES ${targetTable}(${targetPKName});\n\n`;
      }
    }
  });

  return sql;
};

export default generateSQL;
