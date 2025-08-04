import React from 'react';
import { Handle, Position } from 'reactflow';

const CustomNode = ({ data }) => {
  return (
    <div className="bg-white border-2 border-blue-500 rounded-lg shadow-lg w-64">
      <div className="bg-blue-500 text-white p-2 rounded-t-lg">
        <strong>{data.label}</strong>
      </div>
      <div className="p-2">
        {data.attributes.map((attr) => (
          <div key={attr.id} className="flex justify-between items-center py-1 text-sm">
            <span>
              {attr.isPK && <span className="text-yellow-500 font-bold">PK </span>}
              {attr.name}
            </span>
            <span className="text-gray-500">{attr.type}</span>
          </div>
        ))}
      </div>
      <Handle type="source" position={Position.Right} className="w-2 h-2 bg-blue-500" />
      <Handle type="target" position={Position.Left} className="w-2 h-2 bg-blue-500" />
    </div>
  );
};

export default CustomNode;
