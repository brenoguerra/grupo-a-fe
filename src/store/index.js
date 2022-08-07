import axios from 'axios';
import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    students: [],
    filteredStudents: [],
  },
  getters: {
    getStudents: (state) => state.students,
    getFilteredStudents: (state) => state.filteredStudents,
  },
  actions: {
    makeRequest: async (context, { method, body, params }) => {
      try {
        console.log('params', params);
        const ax = axios.create({ baseURL: 'http://localhost:3333/students' })
        const response = await ax({
          method,
          data: body,
          url: params,
        })
  
        return response.data
      } catch (error) {
        throw new Error('Falha na API', error)
      }
    },
    fetchStudents: async ({ commit, dispatch }) => {
      try {
        const { students } = await dispatch('makeRequest', {
          method: 'GET',
        })

        commit('SET_STUDENTS', students)
        commit('SET_FILTERED_STUDENTS', students)
      } catch (error) {
        throw new Error('Falha', error)
      }
    },
    filterStudents: ({ commit, state }, search) => {
      const filterResult = state.students.filter(student => student.name.toLowerCase().includes(search.toLowerCase()))
      commit('SET_FILTERED_STUDENTS', filterResult)
    },
    deleteStudent: async ({ commit, dispatch, state }, id) => {
      try {
        await dispatch('makeRequest', {
          method: 'DELETE',
          params: `/id/${id}`
        })

        const newStudents = state.students.filter(student => student.id !== id)
        const newFilteredStudents = state.filteredStudents.filter(student => student.id !== id)
        commit('SET_STUDENTS', newStudents)
        commit('SET_FILTERED_STUDENTS', newFilteredStudents)
      } catch (error) {
        throw new Error('Falha', error)
      }
    }
  },
  mutations: {
    SET_STUDENTS(state, students) {
      state.students = students
    },
    SET_FILTERED_STUDENTS(state, students) {
      state.filteredStudents = students
    }
  }
})