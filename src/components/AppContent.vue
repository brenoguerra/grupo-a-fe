<template>
  <div class="container d-flex flex-column">
    <div class="
      title 
      d-flex 
      flex-column 
      align-center 
      justify-center 
      rounded-tl-xl">
      <h2>{{ title }}</h2>
    </div>

    <div class="render">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style scoped>
.container {
  border-bottom: 1px solid #BDBDBD;
  height: calc(90vh - 118px);
  width: calc(100vw - 264px);
}
.title {
  height: 32px;
  background: #90CAF9;
}
@media only screen and (max-width: 960px) {
  .container {
    width: calc(100vw - 16px);
  }
  .title {
    width: 100vw;
  }
}
h2 {
  font-size: 18px;
  font-weight: normal;
}
.render {
  width: 100%;
  height: 100%;
}
</style>