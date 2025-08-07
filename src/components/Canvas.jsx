import React from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: '1',
    position: { x: 100, y: 100 },
    data: { label: 'Nodo de Prueba' },
  },
];

const Canvas = () => {
  return (
    <ReactFlow
      nodes={initialNodes}
      fitView
    >
      <Background />
      <Controls />
    </ReactFlow>
  );
};

export default Canvas;
