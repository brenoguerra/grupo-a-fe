<template>
  <v-app id="app">
    <AppHeader />
    <AppLayout />
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppLayout from './components/AppLayout'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppLayout,
  },
  created() {
    document.title = 'Grupo A - Challenge'
  }
}
</script>