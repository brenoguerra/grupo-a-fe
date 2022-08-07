<template>
  <header class="d-flex align-center justify-center">
    <img src="../assets/logo.svg" :width="width" alt="Grupo A">
  </header>
</template>

<script>
export default {
  computed: {
    width() {
      let width = 180;
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return width = 120
        case 'md': return width = 140
        case 'lg': return width = 180
      }
      return width
    }
  }
}
</script>

<style scoped>
header {
  height: 118px;
}
img {
  cursor: pointer;
}
@media only screen and (min-width: 960px) {
  header {
    width: 248px;
  }
}
</style>