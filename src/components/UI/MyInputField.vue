<template>
  <input :class="error ? 'error' : 'notError'" :type="config.type" :placeholder="config.placeholder" :value="config.value">
</template>

<script>
export default {
  props: {
    config:{
      type: Object,
      required: true,
    },
    error: {
      type: Boolean,
      required: true,
    }
  },
  name: "MyInputField"
}
</script>

<style scoped lang="scss">
  input{
    border: 0px;
    border-radius: 2px;
    padding: 10px;
    outline: 2px solid $dark;
    font-family: Roboto;
    font-weight: 400;
    font-size: 14px;

    &:hover, &:focus{
      outline: 4px solid $dark;
      border-radius: 4px;
    }
    &[type="submit"]{
      background-color: $dark;
      color: $light;
    }
  }
  .error{
    outline-color: $error;
    color: $error
  }
  .notError{
    outline-color: $dark;
    color: $dark;
  }
</style>