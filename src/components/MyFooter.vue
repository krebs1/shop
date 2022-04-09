<template>
  <footer class="MyFooter">
    <my-container class="MyFooter__container">
      <p class="MyFooter__content">2022</p>
    </my-container>
  </footer>
</template>

<script>
import MyContainer from "@/components/MyContainer";
export default {
  components:{
    MyContainer
  },
  name: "MyFooter"
}
</script>

<style scoped lang="scss">
  .MyFooter{
    background-color: $dark;
    padding: 16px 0;
    flex: 0 0 auto;

    &__container{
      display: flex;
      justify-content: center;
    }
    &__content{
      font-family: Roboto;
      font-weight: 400;
      font-size: 14px;
      color: $light;
    }
  }
</style>