import { create } from 'zustand';
import {
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from 'reactflow';

const LOCAL_STORAGE_KEY = 'reactflow-state';

const saveStateToLocalStorage = (state) => {
  try {
    const stateToSave = { nodes: state.nodes, edges: state.edges };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(stateToSave));
  } catch (error) {
    console.error("Could not save state to local storage", error);
  }
};

const loadStateFromLocalStorage = () => {
  try {
    const storedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedState) {
      const parsedState = JSON.parse(storedState);
      // Validar que el estado cargado tiene la estructura mínima requerida
      if (parsedState && parsedState.nodes && parsedState.edges) {
        return parsedState;
      }
    }
  } catch (error) {
    console.error("Could not load state from local storage", error);
    // Opcional: limpiar el localStorage si está corrupto
    // localStorage.removeItem(LOCAL_STORAGE_KEY);
  }
  return null;
};

const initialState = loadStateFromLocalStorage() || {
  nodes: [
    {
      id: '1',
      type: 'custom',
      data: {
        label: 'Tabla de Usuarios',
        attributes: [
          { id: '1-1', name: 'id', type: 'INT', isPK: true, isFK: false },
          { id: '1-2', name: 'nombre', type: 'VARCHAR(255)', isPK: false, isFK: false },
          { id: '1-3', name: 'email', type: 'VARCHAR(255)', isPK: false, isFK: false },
        ],
      },
      position: { x: 250, y: 5 },
    },
  ],
  edges: [],
};

const useStore = create((set, get) => ({
  ...initialState,
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
    saveStateToLocalStorage(get());
  },
  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
    saveStateToLocalStorage(get());
  },
  addNode: (node) => {
    const newNode = {
      ...node,
      data: {
        ...node.data,
        attributes: [{ id: `${node.id}-1`, name: 'id', type: 'INT', isPK: true, isFK: false }],
      },
      type: 'custom',
    };
    set({
      nodes: [...get().nodes, newNode],
    });
    saveStateToLocalStorage(get());
  },
  onConnect: (connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
    saveStateToLocalStorage(get());
  },
  selectedNodeId: null,
  setSelectedNodeId: (id) => set({ selectedNodeId: id }),
  updateNodeLabel: (nodeId, label) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId) {
          node.data = { ...node.data, label };
        }
        return node;
      }),
    });
    saveStateToLocalStorage(get());
  },
  updateAttribute: (nodeId, attrId, updatedAttr) => {
    set({
        nodes: get().nodes.map((node) => {
            if (node.id === nodeId) {
                node.data.attributes = node.data.attributes.map((attr) =>
                    attr.id === attrId ? { ...attr, ...updatedAttr } : attr
                );
            }
            return node;
        }),
    });
    saveStateToLocalStorage(get());
  },
  addAttribute: (nodeId) => {
      set({
          nodes: get().nodes.map((node) => {
              if (node.id === nodeId) {
                  const newAttr = {
                      id: `${nodeId}-${Date.now()}`,
                      name: 'nueva_columna',
                      type: 'VARCHAR',
                      isPK: false,
                      isFK: false,
                  };
                  node.data.attributes.push(newAttr);
              }
              return node;
          }),
      });
      saveStateToLocalStorage(get());
  },
  deleteAttribute: (nodeId, attrId) => {
      set({
          nodes: get().nodes.map((node) => {
              if (node.id === nodeId) {
                  node.data.attributes = node.data.attributes.filter((attr) => attr.id !== attrId);
              }
              return node;
          }),
      });
      saveStateToLocalStorage(get());
  },
  isModalOpen: false,
  sqlOutput: '',
  openModalWithSQL: (sql) => set({ isModalOpen: true, sqlOutput: sql }),
  closeModal: () => set({ isModalOpen: false, sqlOutput: '' }),
}));

export default useStore;
