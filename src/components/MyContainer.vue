<link rel="stylesheet" href="../assets/SCSS/styles.scss">
<template>
  <div class="MyContainer">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MyContainer"
}
</script>

<style scoped lang="scss">
  .MyContainer{
    max-width: 1320px;
    padding: 0 10px;
    margin: 0 auto;
    height: 100%;
  }
</style>