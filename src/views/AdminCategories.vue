<template>
  <div class="AdminCategories">
    <my-modal-window class="AdminCategories__modal" :opened="modalOpened" @menuClosed="modalClosed">
      <form class="modal__form">
        <my-input-field class="form__field" :error="false" :config="{type: 'text', placeholder: 'Название'}"/>
        <my-input-field class="form__button" :error="false" :config="{type: 'submit', value: 'Изменить'}"/>
      </form>
    </my-modal-window>
    <my-admin-nav class="AdminCategories__nav"/>
    <div class="AdminCategories__add">
      <form class="add__form">
        <my-input-field class="form__field" :error="false" :config="{type: 'text', placeholder: 'Название'}"/>
        <my-input-field class="form__field" :error="false" :config="{type: 'submit', value: 'Добавить'}"/>
      </form>
    </div>
    <div class="AdminCategories__categories">
      <div class="categories__category">
        <span class="category__text">Лазерные принтеры</span>
        <span class="category__text">Товаров в категории: 1000</span>
        <span class="category__button">Удалить</span>
        <span class="category__button" @click="modalOpened = true">Редактировать</span>
      </div>
      <div class="categories__category">
        <span class="category__text">Лазерные принтеры</span>
        <span class="category__text">Товаров в категории: 1000</span>
        <span class="category__button">Удалить</span>
        <span class="category__button" @click="modalOpened = true">Редактировать</span>
      </div>
      <div class="categories__category">
        <span class="category__text">Лазерные принтеры</span>
        <span class="category__text">Товаров в категории: 1000</span>
        <span class="category__button">Удалить</span>
        <span class="category__button" @click="modalOpened = true">Редактировать</span>
      </div>
      <div class="categories__category">
        <span class="category__text">Лазерные принтеры</span>
        <span class="category__text">Товаров в категории: 1000</span>
        <span class="category__button">Удалить</span>
        <span class="category__button" @click="modalOpened = true">Редактировать</span>
      </div>
    </div>
  </div>
</template>

<script>
import MyAdminNav from "@/components/MyAdminNav";
import MyInputField from "@/components/UI/MyInputField";
import MyModalWindow from "@/components/MyModalWindow";

export default {
  components:{
    MyAdminNav, MyInputField, MyModalWindow
  },
  data(){
    return {
      modalOpened: false,
    }
  },
  props:{
    currentWidth:{
      type: Number,
      required:true,
    }
  },
  methods:{
    modalClosed(value){
      this.modalOpened = value
    }
  },
  name: "AdminCategories"
}
</script>

<style scoped lang="scss">
  .AdminCategories{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    &__modal{
      .modal__form{
        display: flex;
        flex-direction: column;

        .form__field{
          margin-bottom: 10px;
        }
      }
    }
    &__nav{
      width: 100%;
      margin-bottom: 30px;
    }
    &__add{
      padding: 20px;
      background-color: #e5e3e3;
      margin-bottom: 30px;

      .add__form{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;

        @media screen and (max-width: 767px) {
          flex-direction: column;
          justify-content: start;
          flex-wrap: nowrap;
        }

        .form__field{
          flex: 0 0 48%;
          margin-bottom: 10px;

          @media screen and (max-width: 767px) {
            flex-basis: 100%;
          }
        }
      }
    }
    &__categories{
      .categories__category{
        display: flex;
        flex-direction: row;
        padding: 20px;
        margin-bottom: 20px;
        background-color: #e5e3e3;

        &:last-child{
          margin-bottom: 0;
        }

        @media screen and (max-width: 767px) {
          flex-direction: column;
        }

        .category__text{
          margin-right: 10px;
          font-family: Roboto;
          font-weight: 400;
          font-size: 14px;
          color: $dark;
          margin-right: 20px;

          @media screen and (max-width: 767px) {
            margin-right: 0;
            margin-bottom: 20px;
          }
        }
        .category__button{
          border: none;
          font-family: Roboto;
          font-weight: 400;
          font-size: 14px;
          color: $dark;
          background: none;
          margin-right: 20px;
          cursor: pointer;

          &:hover{
            text-decoration: underline;
          }

          @media screen and (max-width: 767px) {
            margin-right: 0;
            margin-bottom: 20px;

            &:last-child{
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
</style>