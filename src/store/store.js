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
      return JSON.parse(storedState);
    }
  } catch (error) {
    console.error("Could not load state from local storage", error);
  }
  return null;
};

const initialState = loadStateFromLocalStorage() || {
  nodes: [
    {
      id: '1',
      type: 'input',
      data: { label: 'Tabla de Usuarios' },
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
    set({
      nodes: [...get().nodes, node],
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
}));

export default useStore;
