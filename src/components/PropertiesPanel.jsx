import React from 'react';
import useStore from '../store/store';

const selector = (state) => ({
  selectedNodeId: state.selectedNodeId,
  nodes: state.nodes,
  updateNodeLabel: state.updateNodeLabel,
  updateAttribute: state.updateAttribute,
  addAttribute: state.addAttribute,
  deleteAttribute: state.deleteAttribute,
});

const PropertiesPanel = () => {
  const { selectedNodeId, nodes, updateNodeLabel, updateAttribute, addAttribute, deleteAttribute } = useStore(selector);
  const selectedNode = nodes.find((node) => node.id === selectedNodeId);

  const handleLabelChange = (e) => {
    if (selectedNode) {
      updateNodeLabel(selectedNode.id, e.target.value);
    }
  };

  const handleAttributeChange = (attrId, field, value) => {
    if (selectedNode) {
      updateAttribute(selectedNode.id, attrId, { [field]: value });
    }
  };

  return (
    <aside className="border-l-2 border-gray-200 p-4 text-sm bg-gray-50 w-96 h-full overflow-y-auto">
      <div className="mb-4 font-bold">Propiedades</div>
      {selectedNode ? (
        <div>
          <div className="mb-4">
            <label htmlFor="label-input" className="block mb-2 font-medium">Nombre de la Tabla:</label>
            <input
              id="label-input"
              type="text"
              value={selectedNode.data.label}
              onChange={handleLabelChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <h4 className="font-medium mb-2">Atributos:</h4>
            {selectedNode.data.attributes.map((attr) => (
              <div key={attr.id} className="grid grid-cols-3 gap-2 mb-2 items-center">
                <input
                  type="text"
                  value={attr.name}
                  onChange={(e) => handleAttributeChange(attr.id, 'name', e.target.value)}
                  className="col-span-1 p-1 border rounded"
                  placeholder="Nombre"
                />
                <input
                  type="text"
                  value={attr.type}
                  onChange={(e) => handleAttributeChange(attr.id, 'type', e.target.value)}
                  className="col-span-1 p-1 border rounded"
                  placeholder="Tipo"
                />
                <button
                  onClick={() => deleteAttribute(selectedNode.id, attr.id)}
                  className="col-span-1 bg-red-500 text-white p-1 rounded hover:bg-red-600"
                >
                  Eliminar
                </button>
              </div>
            ))}
            <button
              onClick={() => addAttribute(selectedNode.id)}
              className="w-full mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Añadir Atributo
            </button>
          </div>
        </div>
      ) : (
        <p>Selecciona una tabla para ver sus propiedades.</p>
      )}
    </aside>
  );
};

export default PropertiesPanel;
