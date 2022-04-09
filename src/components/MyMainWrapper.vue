<template>
  <div class="MyMainWrapper">
    <my-header class="MyMainWrapper__header" :current-width="currentWidth"></my-header>
    <my-main class="MyMainWrapper__main">
      <router-view :current-width="currentWidth"/>
    </my-main>
    <my-footer class="MyMainWrapper__footer"></my-footer>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import MyMain from "@/components/MyMain";
import MyFooter from "@/components/MyFooter";

export default {
  components:{
    MyHeader, MyMain, MyFooter
  },
  props:{
    currentWidth:{
      type: Number,
      required:true,
    }
  },
  name: "MyMainWrapper"
}
</script>

<style scoped lang="scss">
  .MyMainWrapper{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>