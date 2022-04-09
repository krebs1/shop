<template>
  <div class="MyCarouselSlide">
    <img class="MyCarouselSlide__img" :src="require('../assets/img/' + slide.img)" :alt="slide.title">
    <span class="MyCarouselSlide__text">{{slide.title}}</span>
  </div>
</template>

<script>
export default {
  props:{
    slide:{
      type: Object,
      required: true,
      default: ()=>{}
    }
  },
  name: "MyCarouselSlide"
}
</script>

<style scoped lang="scss">
  .MyCarouselSlide{
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid $dark;
    margin-bottom: 10px;

    &__img{
      width: 300px;
      margin-bottom: 10px;
    }
    &__text{
      font-family: Roboto;
      font-weight: 400;
      font-size: 14px;
      color: $dark;
      margin-bottom: 10px;
    }
  }
</style>