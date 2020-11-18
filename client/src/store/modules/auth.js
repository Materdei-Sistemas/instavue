import axios from 'axios';
const LOCALSTORAGE_KEY = 'instavue-token';

const state = {
  token: localStorage.getItem(LOCALSTORAGE_KEY) || '',
  user: {},
  status: '',
};

const getters = {
  isAuthenticated: (state) => {
    if(state.token && state.token.length) {
      return true;
    } else {
      return false;
    }
  },
  authStatus: (state) => state.status,
  sessionUser: (state) => state.user
};

const actions = {
  authenticate: async ({ commit }, credentials) => {
    try {
      const response = await axios.post('/auth/login', credentials);
      commit('TOKEN', response.data.token);
      commit('AUTH_SUCCESS');
      return response;
    } catch (e) {
      // Commit na mensagem de erro
      commit('AUTH_ERROR');
      throw e;
    }
  },

  restore ({ commit }) {
    const token = localStorage.getItem(LOCALSTORAGE_KEY);
    commit('TOKEN', token);
  },
};

const mutations = {
  TOKEN: (state, token) => {
    state.token = token;
    localStorage.setItem(LOCALSTORAGE_KEY, token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  AUTH_SUCCESS: (state) => {
    state.status = 'success';
  },
  AUTH_ERROR: (state) => {
    state.status = 'error';
  }
};


export default {
  state,
  getters,
  actions,
  mutations
};
