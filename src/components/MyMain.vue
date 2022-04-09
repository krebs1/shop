<template>
  <main class="MyMain">
    <my-container>
      <slot></slot>
    </my-container>
  </main>
</template>

<script>
import MyContainer from "@/components/MyContainer";
export default {
  components:{
    MyContainer
  },
  name: "MyMain"
}
</script>

<style scoped lang="scss">
  .MyMain{
    flex: 1 0 auto;
    margin-top: 84px;
    margin-bottom: 30px;

    @media screen and (max-width: 767px) and (min-width: 425px){
      margin-top: 112px;
    }
  }
</style>