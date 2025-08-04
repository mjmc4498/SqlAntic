import React from 'react';
import useStore from '../store/store';

const selector = (state) => ({
  selectedNodeId: state.selectedNodeId,
  nodes: state.nodes,
  updateNodeLabel: state.updateNodeLabel,
});

const PropertiesPanel = () => {
  const { selectedNodeId, nodes, updateNodeLabel } = useStore(selector);
  const selectedNode = nodes.find((node) => node.id === selectedNodeId);

  const handleLabelChange = (e) => {
    if (selectedNode) {
      updateNodeLabel(selectedNode.id, e.target.value);
    }
  };

  return (
    <aside className="border-l-2 border-gray-200 p-4 text-sm bg-gray-50 w-80 h-full">
      <div className="mb-4 font-bold">Propiedades</div>
      {selectedNode ? (
        <div>
          <label htmlFor="label-input" className="block mb-2 font-medium">Nombre de la Tabla:</label>
          <input
            id="label-input"
            type="text"
            value={selectedNode.data.label}
            onChange={handleLabelChange}
            className="w-full p-2 border rounded"
          />
        </div>
      ) : (
        <p>Selecciona una tabla para ver sus propiedades.</p>
      )}
    </aside>
  );
};

export default PropertiesPanel;
