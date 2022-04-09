<template>
  <label :for="config.for">{{config.text}}</label>
</template>

<script>
export default {
  props:{
    config:{
      type: Object,
      required: true,
    }
  },
  name: "MyLabel"
}
</script>

<style scoped lang="scss">
  label{
    font-family: Roboto;
    font-weight: 400;
    font-size: 14px;
    color: $dark;
  }
</style>