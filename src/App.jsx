import React from 'react';
import { ReactFlowProvider } from 'reactflow';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import PropertiesPanel from './components/PropertiesPanel';
import SQLModal from './components/SQLModal';
import './App.css';

function App() {
  return (
    <div className="flex h-screen">
      <ReactFlowProvider>
        <Sidebar />
        <div className="flex-grow h-full">
          <Canvas />
        </div>
        <PropertiesPanel />
        <SQLModal />
      </ReactFlowProvider>
    </div>
  );
}

export default App;
