<template>
  <div class="Product">
    <img class="Product__img" src="@/assets/img/canon_pixma_ix6840_3.jpg" alt="product image">
    <div class="Product__info">
      <h1 class="info__name">Canon pixma ix6840</h1>
      <span class="info__price">20000 ₽</span>
      <div class="info__to-cart">
        <button class="to-cart__button">В корзину</button>
        <my-counter :config="{max: 10, min: 1, counter: 1}"/>
      </div>
      <div class="info__characteristics">
        <span class="characteristics__characteristic">Страна-производитель: <span>Китай</span></span>
        <span class="characteristics__characteristic">Год производства: <span>2022</span></span>
        <span class="characteristics__characteristic">Модель: <span>ix6840</span></span>
      </div>
    </div>
  </div>
</template>

<script>
import MyCounter from "@/components/MyCounter";

export default {
  components:{
    MyCounter
  },
  data(){
    return{
      count: 1,
    }
  },
  name: "Product"
}
</script>

<style scoped lang="scss">
  .Product{
    display: flex;
    width: 100%;

    &__img{
      width: 50%;
      margin-right: 20px;
    }
    &__info{
      display: flex;
      flex-direction: column;

      .info__name{
        font-family: Roboto;
        font-weight: 700;
        font-size: 36px;
        color: $dark;
        margin-bottom: 10px;
      }
      .info__price{
        font-family: Roboto;
        font-weight: 700;
        font-size: 48px;
        color: $dark;
        margin-bottom: 10px;
      }
      .info__to-cart{
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;

        .to-cart__button{
          padding: 10px;
          background-color: $dark;
          color: $light;
          border: none;
          font-family: Roboto;
          font-weight: 400;
          font-size: 16px;
        }
      }
      .info__characteristics{
        display: flex;
        flex-direction: column;

        .characteristics__characteristic{
          margin-bottom: 10px;
          font-family: Roboto;
          font-weight: 500;
          font-size: 16px;
          color: $dark;

          span{
            font-weight: 400;
            font-size: 14px;
          }
        }
      }
    }

    @media screen and (max-width: 767px) {
      flex-direction: column;

      &__img{
        width: 100%;
      }
    }
  }
</style>