<template>
  <div class="text-center">
    <v-snackbar
      v-model="visible"
      timeout="3000"
      :color="getColor"
    >
      {{ message }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="closeModal"
        >
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      message: '',
      type: '',
    }
  },
  methods: {
    show({
      message,
      type,
    }) {
      this.visible = true
      this.message = message
      this.type = type
    },
    closeModal() {
      this.visible = false
    }
  },
  computed: {
    getColor() {
      let color = '';
      switch (this.type) {
        case 'success':
          color = 'green'
          break;
        case 'error':
          color = 'red darken-2'
          break;
        case 'warning':
          color = 'orange lighten-1'
          break;
        case 'info':
          color = 'light-blue darken-1'
          break;
      }
      return color
    }
  }
}
</script>