<template>
  <div class="MyCartItem">
    <div class="MyCartItem__left">
      <img class="MyCartItem__img" src="@/assets/img/canon_pixma_ix6840_3.jpg" alt="product image">
      <h3 class="MyCartItem__title">
        <span>{{product.first_name}}</span>
      </h3>
    </div>
    <div class="MyCartItem__right">
      <my-counter class="MyCartItem__counter" :config="{min: 1, max: 10, counter: 2}"/>
      <span class="MyCartItem__price">{{product.id * 1000 + ' ₽'}}</span>
      <button class="MyCartItem__delete">удалить</button>
    </div>
  </div>
</template>

<script>
import MyCounter from "@/components/MyCounter";

export default {
  components:{
    MyCounter
  },
  props:{
    product:{
      type: Object,
      required: true,
      default: ()=>{},
    }
  },
  name: "MyCartItem"
}
</script>

<style scoped lang="scss">
  .MyCartItem{
    display: flex;
    align-items: start;
    border-bottom: 1px solid $dark;
    padding: 10px;

    &__left,
    &__right{
      display: flex;
      align-items: start;
    }
    &__left{
      flex-grow: 1;
      margin-right: 20px;
    }
    &__img{
      width: 25%;
      margin-right: 20px;
    }
    &__delete{
      font-family: Roboto;
      font-size: 14px;
      font-weight: 400;
      color: $dark;
      background: none;
      border: none;

      &:hover{
        text-decoration: underline;
      }
    }
    &__price{
      margin-right: 20px;
      white-space: nowrap;
      font-family: Roboto;
      font-size: 16px;
      font-weight: 500;
      color: $dark;
    }
    &__counter{
      margin-right: 20px;
    }
    &__title{
      span{
        font-family: Roboto;
        font-weight: 700;
        font-size: 18px;
      }
    }

    @media screen and (max-width: 767px) {
      flex-direction: column;
      margin-bottom: 20px;

      &__left{
        margin-right: 0;
        margin-bottom: 20px;
      }
      //&__img{
      //  margin-right: 0;
      //  margin-bottom: 20px;
      //}
      //&__price{
      //  margin-right: 0;
      //  margin-bottom: 20px;
      //}
      //&__counter{
      //  margin-right: 0;
      //  margin-bottom: 20px;
      //}
    }
  }
</style>