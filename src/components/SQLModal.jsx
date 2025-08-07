import React from 'react';
import useStore from '../store/store';

const selector = (state) => ({
  isModalOpen: state.isModalOpen,
  sqlOutput: state.sqlOutput,
  closeModal: state.closeModal,
});

const SQLModal = () => {
  const { isModalOpen, sqlOutput, closeModal } = useStore(selector);

  const handleCopy = () => {
    navigator.clipboard.writeText(sqlOutput);
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-1/2 max-w-2xl">
        <h3 className="text-lg font-bold mb-4">SQL Generado</h3>
        <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto h-64 mb-4">
          <code>{sqlOutput}</code>
        </pre>
        <div className="flex justify-end gap-4">
          <button
            onClick={handleCopy}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Copiar
          </button>
          <button
            onClick={closeModal}
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SQLModal;
