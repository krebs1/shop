<template>
  <div class="Cart">
    <my-modal-window class="Cart__modal" :opened="modalOpened" @menuClosed="modalClosed">
      <form class="modal__form">
        <my-input-field class="form__field" :error="false" :config="{type: 'password', placeholder: 'Пароль'}"/>
        <my-input-field class="form__button" :error="false" :config="{type: 'submit', value: 'Оформить'}"/>
      </form>
    </my-modal-window>
    <div class="Cart__items">
      <my-cart-item class="items__item" v-for="product in products" :product="product"/>
    </div>
    <div class="Cart__create-order">
      <span class="create-order__product-number">{{6 + ' товаров в корзине'}}</span>
      <span class="create-order__price">{{100000 + ' ₽'}}</span>
      <button class="create-order__button" @click="modalOpened=true">Оформить заказ</button>
    </div>
  </div>
</template>

<script>
import MyCartItem from "@/components/MyCartItem";
import axios from "axios";
import MyModalWindow from "@/components/MyModalWindow";
import MyInputField from "@/components/UI/MyInputField";

export default {
  components:{
    MyCartItem, MyModalWindow, MyInputField,
  },
  data(){
    return{
      products: undefined,
      modalOpened: false,
    }
  },
  methods:{
    async fetchProducts(){
      try {
        const response = await axios.get('https://reqres.in/api/users?page=1');
        this.products = response.data.data;
        console.log(this.products);
      } catch (e) {
        console.log(e);
      }
    },
    modalClosed(value){
      this.modalOpened = value
    },
  },
  mounted() {
    this.fetchProducts();
  },
  name: "Cart"
}
</script>

<style scoped lang="scss">
  .Cart{
    display: flex;
    width: 100%;

    &__modal{
      .modal__form{
        display: flex;
        flex-direction: column;

        .form__field{
          margin-bottom: 10px;
        }
      }
    }
    &__items{
      flex: 0 0 75%;
      margin-right: 20px;
    }
    &__create-order{
      flex: 1 0 auto;
      display: flex;
      flex-direction: column;
      padding: 10px;
      background-color: #e5e3e3;

      .create-order__product-number{
        margin-bottom: 20px;
        font-family: Roboto;
        font-weight: 400;
        font-size: 16px;
        color: $dark;
      }
      .create-order__price{
        margin-bottom: 20px;
        font-family: Roboto;
        font-weight: 500;
        font-size: 18px;
        color: $dark;
      }
      .create-order__button{
        font-family: Roboto;
        font-weight: 400;
        font-size: 14px;
        color: $light;
        border: none;
        background-color: $dark;
        padding: 10px;
      }
    }

    @media screen and (max-width: 767px){
      flex-direction: column;

      &__items{
        flex: 0 0 100%;
        margin-right: 0;
      }
    }
  }
</style>