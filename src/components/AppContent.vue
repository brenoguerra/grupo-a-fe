<template>
  <div class="container">
    <div class="title">
      <h2>{{ title }}</h2>
    </div>

    <div class="render">
      <router-view></router-view>
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
  border-top: 1px solid #BDBDBD;
  border-bottom: 1px solid #BDBDBD;
  height: calc(90vh - 118px);
  width: 100%;
  display: flex;
  flex-direction: column;
}
.title {
  height: 32px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #90CAF9;
  padding: 4px;
}
h2 {
  border-radius: 8px 0 0 0;
  font-size: 18px;
  color: #000;
  font-weight: normal;
}
.render {
  width: 100%;
  height: 100%;
  padding: 16px 32px;
}
</style>