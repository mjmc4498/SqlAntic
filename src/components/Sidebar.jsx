import React from 'react';

const Sidebar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside className="border-r-2 border-gray-200 p-4 text-sm bg-gray-50 w-64 h-full">
      <div className="mb-4 font-bold">Paleta de Elementos</div>
      <div
        className="bg-white p-3 border-2 border-blue-500 rounded cursor-grab text-center"
        onDragStart={(event) => onDragStart(event, 'default')}
        draggable
      >
        Nueva Tabla
      </div>
    </aside>
  );
};

export default Sidebar;
