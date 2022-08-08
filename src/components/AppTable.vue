<template>
  <div>
    <AppToast ref="toast" />

    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Confirme a exclusão
        </v-card-title>

        <v-card-text>
          <div class="pa-4">
            Ao confirmar, os dados armazenados desse estudante serão removidos permanentemente do sistema. Essa é uma ação irreversível e não poderá ser desfeita. Realmente quer fazer isso?
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="handleDeleteConfirm"
          >
            Confirmar
          </v-btn>

          <v-btn
            color="red"
            text
            @click="handleDeleteCancel"
          >
            Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <section class="py-6 px-4">
      <v-simple-table
        fixed-header
        height="564px"
      >
        <template>
          <thead>
            <tr>
              <th class="text-left">
                Registro Acadêmico
              </th>
              <th class="text-left">
                Nome
              </th>
              <th class="text-left">
                CPF
              </th>
              <th class="text-left">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="student in students"
              :key="student.id"
            >
              <td>{{ student.ra }}</td>
              <td>{{ student.name }}</td>
              <td>{{ formatCpf(student.cpf) }}</td>
              <td>
                <v-icon dense @click.prevent="handleEdit(student.id)">mdi-pen</v-icon>
                <v-icon dense @click.prevent="handleDelete(student.id)">mdi-delete</v-icon>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </section>
  </div>
</template>

<script>
import AppToast from './AppToast'
import Utils from '../mixins/UtilMixin'

export default {
  components: {
    AppToast
  },
  data() {
    return {
      dialog: false,
      studentId: null,
    }
  },
  mixins: [Utils],
  props: {
    students: Array,
    deleteStudent: Function
  },
  methods: {
    handleEdit(id) {
      this.$router.push({ path: `/student/${id}` })
    },
    handleDelete(id) {
      this.studentId = id
      this.dialog = true
    },
    handleDeleteConfirm() {
      this.$props.deleteStudent(this.studentId)
        .then(() => {
          this.$refs.toast.show({
            message: 'Aluno deletado com sucesso!',
            type: 'success'
          })
        })
        .catch(() => {
          this.$refs.toast.show({
            message: 'Houve um erro ao deletar o aluno',
            type: 'error'
          })
        })
      this.dialog = false
    },
    handleDeleteCancel() {
      this.studentId = null
      this.dialog = false
    },
  }
}
</script>