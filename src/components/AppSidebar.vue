<template>
  <div class="container">
    <v-card
      height="100%"
      width="256"
      class="mx-auto"
    >
      <v-navigation-drawer permanent>
        <v-list-item class="blue" input-value="true" color="white">
          <v-list-item-content>
            <v-list-item-title class="text-h6" c>
              Módulo Acadêmico
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list>
          <v-list-item input-value="true" class="blue lighten-3" link>
            <v-list-item-content>
              <v-list-item-title>Alunos</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style scoped>
.container {
  width: 248px;
  border-bottom: 1px solid #BDBDBD;
}
@media only screen and (max-width: 960px) {
  .container {
    display: none;
  }
}
</style>