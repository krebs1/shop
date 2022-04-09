<template>
  <div class="MyCarousel">
    <div class="MyCarousel__wrapper" :style="'margin-left: ' + '-' + (100*currentSlide) + '%'">
      <my-carousel-slide class="MyCarousel__slide" v-for="slide in slides"
                         :key="slide.id"
                         :slide="slide"/>
    </div>
    <div class="MyCarousel__control">
      <button class="MyCarousel__button" @click="currentSlide > 0 ? currentSlide-- : currentSlide = 4">prev</button>
      <button class="MyCarousel__button" @click="currentSlide < 4 ? currentSlide++ : currentSlide = 0">next</button>
    </div>
  </div>
</template>

<script>
import MyCarouselSlide from "@/components/MyCarouselSlide";

export default {
  components:{
    MyCarouselSlide,
  },
  data(){
    return{
      currentSlide: 0,
    }
  },
  props:{
    slides:{
      type: Array,
      required: true,
      default: () => [],
    }
  },
  name: "MyCarousel"
}
</script>

<style scoped lang="scss">
  .MyCarousel{
    max-width: 300px;
    overflow: hidden;

    &__control{
      display: flex;
      justify-content: space-between;

      .MyCarousel__button{
        border: none;
        padding: 10px;
        flex: 1 0 auto;
        background-color: $dark;
        color: $light;
        font-family: Roboto;
        font-weight: 400;
        font-size: 14px;

        &:first-child{
          border-right: 1px solid $light;
        }
      }
    }
    &__wrapper{
      max-width: 300px;
      display: flex;
      transition: all ease .5s;

      .MyCarousel__slide{
        width: 100%;
      }
    }
  }
</style>