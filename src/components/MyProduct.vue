<link rel="stylesheet" href="../assets/SCSS/styles.scss">
<template>
  <div class="MyProduct">
    <img class="MyProduct__img" src="@/assets/img/canon_pixma_ix6840_3.jpg" alt="product image">
    <h3 class="MyProduct__title">
      <span>{{product.first_name}}</span>
    </h3>
    <p class="MyProduct__price">{{product.id}}</p>
    <button class="MyProduct__to-cart">В корзину</button>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{

  },
  props:{
    product:{
      type: Object,
      required: true,
      default: ()=>{}
    },
  },
  name: "MyProduct",
}
</script>

<style scoped lang="scss">
  .MyProduct{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    &__img{
      width: 100%;
    }
    &__title{
      span{
        font-family: Roboto;
        font-size: 18px;
        font-weight: 700;
        color: $dark;
      }

      flex-grow: 1;
      padding-bottom: 10px;
    }
    &__price{
      font-family: Roboto;
      font-size: 16px;
      font-weight: 500;
      color: $dark;
      padding-bottom: 10px;
    }
    &__to-cart{
      border: none;
      background-color: $dark;
      font-family: Roboto;
      font-size: 14px;
      font-weight: 500;
      color: #FFF;
      padding: 20px;
      width: 100%;
      text-align: center;
    }
  }
</style>