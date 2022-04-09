<template>
    <my-main-wrapper :current-width="currentWidth" />
</template>

<script>
  import MyHeader from "@/components/MyHeader";
  import MyMainWrapper from "@/components/MyMainWrapper";

  export default {
    components:{
      MyMainWrapper, MyHeader
    },
    data(){
      return{
        currentWidth: 0,
      }
    },
    beforeMount() {
      this.currentWidth = window.innerWidth;
    },
    mounted() {
      window.addEventListener('resize', () => {
        this.currentWidth = window.innerWidth;
      });
    },
    name: "app"
  }
</script>

<style lang="scss">

</style>
