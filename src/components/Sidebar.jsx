import React from 'react';
import useStore from '../store/store';
import generateSQL from '../lib/SQLGenerator';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  openModalWithSQL: state.openModalWithSQL,
});

const Sidebar = () => {
  const { nodes, edges, openModalWithSQL } = useStore(selector);

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  const handleExportClick = () => {
    const sql = generateSQL(nodes, edges);
    openModalWithSQL(sql);
  };

  return (
    <aside className="border-r-2 border-gray-200 p-4 text-sm bg-gray-50 w-64 h-full flex flex-col">
      <div className="mb-4 font-bold">Paleta de Elementos</div>
      <div
        className="bg-white p-3 border-2 border-blue-500 rounded cursor-grab text-center mb-4"
        onDragStart={(event) => onDragStart(event, 'default')}
        draggable
      >
        Nueva Tabla
      </div>
      <div className="mt-auto">
        <button
          onClick={handleExportClick}
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Exportar a SQL
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
