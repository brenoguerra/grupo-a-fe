<template>
  <div>
    <AppSidebar />
    <AppContent title="Consulta de alunos" />
  </div>
</template>

<script>
import AppSidebar from './AppSidebar'
import AppContent from './AppContent'

export default {
  components: {
    AppSidebar,
    AppContent,
  }
}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: row;
}
</style>