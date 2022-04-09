<template>
  <div class="About">
    <div class="About__info">
      <h1 class="info__logo">CopyStar</h1>
      <p class="info__slogan">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
    </div>
    <my-carousel :slides="[{img:'canon_pixma_ix6840_3.jpg', title: 'Slide 1 example', id: 1},
      {img:'canon_pixma_ix6840_3.jpg', title: 'Slide 2 example', id: 2},
      {img:'canon_pixma_ix6840_3.jpg', title: 'Slide 3 example', id: 3},
      {img:'canon_pixma_ix6840_3.jpg', title: 'Slide 4 example', id: 4},
      {img:'canon_pixma_ix6840_3.jpg', title: 'Slide 5 example', id: 5},]"/>
  </div>
</template>

<script>
import MyCarousel from "@/components/MyCarousel";

export default {
  components:{
    MyCarousel,
  },
  name: "About"
}
</script>

<style scoped lang="scss">
  .About{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    &__info{
      .info__logo{
        font-family: Roboto;
        font-weight: 700;
        font-size: 32px;
        color: $dark;
        margin-bottom: 20px;
      }
      .info__slogan{
        font-family: Roboto;
        font-weight: 400;
        font-size: 14px;
        color: $dark;
      }
    }
  }
</style>