<template>
  <div class="Catalog">
    <my-filters class="Catalog__filters" :current-width="currentWidth"/>
    <div class="Catalog__right-column">
      <my-sort class="Catalog__sort" :current-width="currentWidth"/>
      <my-product-list class="Catalog__product-list" :products="products"/>
      <my-pagination class="Catalog__pagination" :pagination="{currentPage: 2, totalPage: 3}"/>
    </div>
  </div>
</template>

<script>
import MyProductList from "@/components/MyProductList";
import MySort from "@/components/MySort";
import MyFilters from "@/components/MyFilters";
import MyPagination from "@/components/MyPagination";
import axios from "axios";

export default {
  components:{
    MyProductList, MySort, MyFilters, MyPagination
  },
  data(){
    return{
      products: undefined,
    }
  },
  props:{
    currentWidth:{
      type: Number,
      required:true,
    }
  },
  methods:{
    async fetchProducts(){
      try {
        const response = await axios.get('https://reqres.in/api/users?page=1');
        this.products = response.data.data;
      } catch (e) {
        console.log(e);
      }
    }
  },
  mounted() {
    this.fetchProducts();
  },
  name: "Catalog"
}
</script>

<style scoped lang="scss">
  .Catalog{
    display: flex;
    flex-direction: row;
    height: 100%;

    &__right-column{
      display: flex;
      flex-direction: column;
      flex: 0 0 75%;

      .Catalog__product-list{
        margin-bottom: 10px;
      }
      .Catalog__pagination{
        align-self: center;
      }
    }
    &__filters{
      flex: 0 0 25%;
      padding: 0 10px;
    }
    
    @media screen and (max-width: 767px){
      flex-direction: column;

      &__filters{
        flex: 0 0 0%;
        padding: 0;
      }
      &__right-column{
        flex: 0 0 0;
      }
    }
  }
</style>