<template>
  <div class="MyCounter">
    <button class="MyCounter__button" @click="count > config.min ? count-- : count">-</button>
    <span class="MyCounter__count">{{count}}</span>
    <button class="MyCounter__button" @click="count < config.max ? count++ : count">+</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      count: 1
    }
  },
  props:{
    config:{
      type: Object,
      required: true,
      default: () => {},
    }
  },
  mounted() {
    this.count = this.config.counter
  },
  watch:{
    count(newCount){
      this.config.counter = newCount;
    }
  },
  name: "MyCounter"
}
</script>

<style scoped lang="scss">
  .MyCounter{
    display: flex;

    &__button{
      padding: 10px;
      width: 39px;
      background-color: $dark;
      color: $light;
      border: none;
      font-family: Roboto;
      font-weight: 400;
      font-size: 16px;
      align-self: start;
    }
    &__count{
      padding: 10px;
      color: $dark;
      font-family: Roboto;
      font-weight: 400;
      font-size: 16px;
      align-self: start;
    }
  }
</style>