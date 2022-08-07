<template>
  <v-btn
    class="pr-8 pl-8"
    :width="buttonWidth"
    height="38"
    color="#90CAF9"
    @click.prevent="onClick"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  props: {
    onClick: Function
  },
  computed: {
    buttonWidth() { 
      let width = 180;
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return width = 96
      }
      return width;
    },
  },
}
</script>