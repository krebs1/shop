<template>
  <div class="MyProductList">
    <my-product class="MyProductList__product" v-for="product in products" :product="product"></my-product>
  </div>
</template>

<script>
import MyProduct from "@/components/MyProduct";
export default {
  components:{
    MyProduct,
  },
  data(){
    return{

    }
  },
  methods:{

  },
  props:{
    products:{
      type: Array,
      required: true,
      default: ()=>[],
    },
  },
  name: "MyProductList",
}
</script>

<style scoped lang="scss">
  .MyProductList{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;

    &__product{
      padding: 0 10px;
    }

    @media screen and (min-width: 1024px) {
      &__product{
        flex-basis: 25%;
      }
    }
    @media screen and (max-width: 1023px) and (min-width: 768px) {
      &__product{
        flex-basis: calc(100%/3);
      }
    }
    @media screen and (max-width: 767px) and (min-width: 425px){
      &__product{
        flex-basis: calc(100%/2);
      }
    }
    @media screen and (max-width: 424px){
      &__product{
        flex-basis: 100%;
        padding: 0;
      }
    }
  }
</style>