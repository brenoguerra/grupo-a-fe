<template>
  <div class="d-flex flex-row">
    <AppSidebar />
    <router-view></router-view>
  </div>
</template>

<script>
import AppSidebar from './AppSidebar'

export default {
  components: {
    AppSidebar,
  },
}
</script>