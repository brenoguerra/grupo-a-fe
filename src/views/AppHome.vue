<template>
  <div>
    <AppContent title="Consulta de alunos">
      <AppForm>
        <v-text-field
          id="search"
          label="Digite sua busca"
          placeholder=""
          v-model="inputSearch"
          outlined
          dense
          @keydown.enter.prevent="handleSearch"
        />

        <AppButton :onClick="handleSearch">
          <v-icon dense>mdi-magnify</v-icon>{{ searchButtonText }}
        </AppButton>
        
        <AppButton :onClick="goToCreateStudentPage">
          <v-icon dense>mdi-account-plus</v-icon> {{ addStudentButtonText }}
        </AppButton>
      </AppForm>

      <AppTable :students="getFilteredStudents" :deleteStudent="deleteStudent" />
    </AppContent>
  </div>
</template>

<script>
import AppContent from '../components/AppContent'
import AppTable from '../components/AppTable'
import AppButton from '../components/AppButton'
import { mapGetters, mapActions } from 'vuex'
import AppForm from '../components/AppForm'

export default {
  components: {
    AppContent,
    AppTable,
    AppButton,
    AppForm,
},
  data () {
    return {
      students: [],
      studentsFilter: [],
      inputSearch: ''
    }
  },
  mounted() {
    this.fetchStudents()
  },
  methods: {
    ...mapActions(['fetchStudents', 'filterStudents', 'deleteStudent']),
    handleSearch() {
      this.filterStudents(this.inputSearch)
    },
    goToCreateStudentPage() {
      this.$router.push({ path: '/student' })
    },
  },
  computed: {
    ...mapGetters(['getFilteredStudents']),
    searchButtonText() { 
      let text = 'Pesquisar';
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return text = ''
        case 'sm': return text = ''
      }
      return text
    },
    addStudentButtonText() {
      let text = 'Cadastrar Aluno';
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return text = ''
        case 'sm': return text = ''
      }
      return text
    },
  },
}
</script>

<style scoped>
button {
  margin: 0 8px;
}
</style>