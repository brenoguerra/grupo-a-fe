<template>
  <v-app id="app">
    <!-- <p>
      <router-link to="/">List students</router-link>
      <router-link to="/add">Add students</router-link>
      <router-link to="/edit">Edit student</router-link>
    </p> -->

    <AppHeader />

    <router-view></router-view>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader'

export default {
  name: 'App',
  components: {
    AppHeader,
  },
  created() {
    document.title = 'Grupo A - Challenge'
  }
}
</script>