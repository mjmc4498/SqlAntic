import React, { useCallback } from 'react';
import ReactFlow, {
  Controls,
  Background,
} from 'reactflow';
import 'reactflow/dist/style.css';
import useStore from '../store/store';
import CustomNode from './CustomNode';

const nodeTypes = { custom: CustomNode };

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
  setSelectedNodeId: state.setSelectedNodeId,
});

const Canvas = ({ onDragOver, onDrop }) => {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, setSelectedNodeId } = useStore(selector);

  const onNodeClick = useCallback((event, node) => {
    setSelectedNodeId(node.id);
  }, [setSelectedNodeId]);

  const onPaneClick = useCallback(() => {
    setSelectedNodeId(null);
  }, [setSelectedNodeId]);

  const defaultEdgeOptions = {
    animated: false,
    style: {
      strokeWidth: 2,
      stroke: '#007BFF',
    },
    markerEnd: {
      type: 'arrowclosed',
      color: '#007BFF',
    },
  };

  return (
    <div className="h-full" onDragOver={onDragOver} onDrop={onDrop}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Canvas;
