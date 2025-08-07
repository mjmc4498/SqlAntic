import React, { useRef, useCallback } from 'react';
import { ReactFlowProvider, useReactFlow } from 'reactflow';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import PropertiesPanel from './components/PropertiesPanel';
import SQLModal from './components/SQLModal';
import useStore from './store/store';
import './App.css';

const selector = (state) => ({
  addNode: state.addNode,
});

// Componente intermedio para poder usar el hook useReactFlow
const AppFlow = () => {
  const reactFlowWrapper = useRef(null);
  const { project } = useReactFlow();
  const { addNode } = useStore(selector);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  let id = 0;
  const getId = () => `dndnode_${id++}`;

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `Nueva Tabla` },
      };

      addNode(newNode);
    },
    [project, addNode]
  );

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow h-full" ref={reactFlowWrapper}>
        <Canvas onDragOver={onDragOver} onDrop={onDrop} />
      </div>
      <PropertiesPanel />
      <SQLModal />
    </div>
  );
};

function App() {
  return (
    <ReactFlowProvider>
      <AppFlow />
    </ReactFlowProvider>
  );
}

export default App;
