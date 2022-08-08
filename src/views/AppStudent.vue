<template>
  <div>
    <AppToast ref="toast" />

    <AppContent :title="contentTitle()">
      <AppForm class="d-flex flex-column pa-6">
        <v-text-field
          id="name"
          label="Nome"
          placeholder="Informe o nome completo"
          v-model="student.name"
          outlined
          dense
        />

        <v-text-field
          id="email"
          label="E-mail"
          placeholder="Informe apenas um e-mail"
          v-model="student.email"
          outlined
          dense
        />

        <v-text-field
          id="ra"
          label="RA"
          placeholder="Informe o registro acadêmico"
          v-model="student.ra"
          outlined
          dense
          type="number"
          :disabled="!!studentId"
          class="input-number"
        />

        <v-text-field
          id="cpf"
          label="CPF"
          placeholder="Informe o número do documento"
          v-model="student.cpf"
          outlined
          dense
          type="number"
          :disabled="!!studentId"
          class="input-number"
        />
        
        <div class="d-flex flex-row justify-end">
          <AppButton class="mr-4 grey lighten-5" :onClick="goToHome">Cancelar</AppButton>
          <AppButton :onClick="handleSaveStudent">Salvar</AppButton>
        </div>
      </AppForm>
    </AppContent>
  </div>
</template>

<script>
import AppContent from '../components/AppContent'
import AppButton from '../components/AppButton'
import AppForm from '../components/AppForm'
import AppToast from '../components/AppToast'
import { mapActions } from 'vuex'

export default {
  components: {
    AppContent,
    AppButton,
    AppForm,
    AppToast,
  },
  data() {
    return {
      student: {
        name: '',
        email: '',
        ra: '',
        cpf: ''
      }
    }
  },
  mounted() {
    if (this.studentId) {
      this.getStudentById(this.studentId).then(response => {
        this.student.name = response.name
        this.student.email = response.email
        this.student.ra = response.ra
        this.student.cpf = response.cpf
      }).catch(() => this.goToHome())
    }
  },
  computed: {
    studentId() {
      return this.$route.params.id
    }
  },
  methods: {
    ...mapActions(['getStudentById', 'saveStudent', 'updateStudent']),
    changeInputValue(value) {
      this.$emit('name', value)
    },
    goToHome() {
      this.$router.push({ path: '/' })
    },
    contentTitle() {
      return `${this.studentId ? 'Edição' : 'Cadastro'} de aluno`
    },
    handleSaveStudent() {
      const hasUnfilledField = !!Object.entries(this.student)
        .find(field => field[1] === '')

      if (hasUnfilledField) {
        this.$refs.toast.show({
          message: 'Todos os campos devem ser preenchidos',
          type: 'error'
        })
        return;
      }

      if (this.studentId) {
        this.updateStudent({
          body: { ...this.student },
          id: this.studentId
        })
          .then(() => this.goToHome())
          .catch(() => {
            this.$refs.toast.show({
              message: 'Falha ao atualizar aluno',
              type: 'error'
            })
          })
      } else {
        this.saveStudent({ ...this.student })
          .then(() => this.goToHome())
          .catch((error) => {
            this.$refs.toast.show({
              message: 
                error.message.startsWith('500') 
                  ? 'Falha ao tentar atualizar aluno'
                  : 'O RA deve ser único',
              type: 'error'
            })
          })
      }
    }
  }
}
</script>

<style scoped>
.input-number > input[type="number"] {
  -moz-appearance: textfield;
}
.input-number:deep(input::-webkit-outer-spin-button),
.input-number:deep(input::-webkit-inner-spin-button) {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
</style>