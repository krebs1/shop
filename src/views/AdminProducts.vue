<template>
  <div class="AdminProducts">
    <my-modal-window class="AdminProducts__modal" :opened="modalOpened" @menuClosed="modalClosed">
      <form class="modal__form">
        <my-input-field class="form__field" :error="false" :config="{type: 'text', placeholder: 'Название'}"/>
        <my-input-field class="form__field" :error="false" :config="{type: 'file', placeholder: 'Фото'}"/>
        <my-input-field class="form__field" :error="false" :config="{type: 'number', placeholder: 'Цена'}"/>
        <my-input-field class="form__field" :error="false" :config="{type: 'text', placeholder: 'Категория'}"/>
        <my-input-field class="form__field" :error="false" :config="{type: 'text', placeholder: 'Страна производитель'}"/>
        <my-input-field class="form__field" :error="false" :config="{type: 'text', placeholder: 'Год производства'}"/>
        <my-input-field class="form__field" :error="false" :config="{type: 'text', placeholder: 'Модель'}"/>
        <my-input-field class="form__field" :error="false" :config="{type: 'submit', value: 'Изменить'}"/>
      </form>
    </my-modal-window>
    <my-admin-nav class="AdminProducts__nav"/>
    <div class="AdminProducts__add">
      <form class="add__form">
        <my-input-field class="form__field" :error="false" :config="{type: 'text', placeholder: 'Название'}"/>
        <my-input-field class="form__field" :error="false" :config="{type: 'file', placeholder: 'Фото'}"/>
        <my-input-field class="form__field" :error="false" :config="{type: 'number', placeholder: 'Цена'}"/>
        <my-input-field class="form__field" :error="false" :config="{type: 'text', placeholder: 'Категория'}"/>
        <my-input-field class="form__field" :error="false" :config="{type: 'text', placeholder: 'Страна производитель'}"/>
        <my-input-field class="form__field" :error="false" :config="{type: 'text', placeholder: 'Год производства'}"/>
        <my-input-field class="form__field" :error="false" :config="{type: 'text', placeholder: 'Модель'}"/>
        <my-input-field class="form__field" :error="false" :config="{type: 'submit', value: 'Добавить'}"/>
      </form>
    </div>
    <div class="AdminProducts__products">
      <div class="products__product">
        <img class="product__img" src="@/assets/img/canon_pixma_ix6840_3.jpg" alt="product img">
        <div class="product__info">
          <span class="info_text">Название: canon pixma ix6840</span>
          <span class="info_text">Цена: 20000</span>
          <span class="info_text">Категория: Лазерный принтер</span>
          <span class="info_text">Производитель: Китай</span>
          <span class="info_text">Год: 2022</span>
          <span class="info_text">Модель: ix6840</span>
        </div>
        <div class="product__control">
          <button class="control__button">Удалить</button>
          <button class="control__button" @click="modalOpened = true">Редактировать</button>
        </div>
      </div>
      <div class="products__product">
        <img class="product__img" src="@/assets/img/canon_pixma_ix6840_3.jpg" alt="product img">
        <div class="product__info">
          <span class="info_text">Название: canon pixma ix6840</span>
          <span class="info_text">Цена: 20000</span>
          <span class="info_text">Категория: Лазерный принтер</span>
          <span class="info_text">Производитель: Китай</span>
          <span class="info_text">Год: 2022</span>
          <span class="info_text">Модель: ix6840</span>
        </div>
        <div class="product__control">
          <button class="control__button">Удалить</button>
          <button class="control__button" @click="modalOpened = true">Редактировать</button>
        </div>
      </div>
      <div class="products__product">
        <img class="product__img" src="@/assets/img/canon_pixma_ix6840_3.jpg" alt="product img">
        <div class="product__info">
          <span class="info_text">Название: canon pixma ix6840</span>
          <span class="info_text">Цена: 20000</span>
          <span class="info_text">Категория: Лазерный принтер</span>
          <span class="info_text">Производитель: Китай</span>
          <span class="info_text">Год: 2022</span>
          <span class="info_text">Модель: ix6840</span>
        </div>
        <div class="product__control">
          <button class="control__button">Удалить</button>
          <button class="control__button" @click="modalOpened = true">Редактировать</button>
        </div>
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
    MyAdminNav, MyInputField, MyModalWindow,
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
  name: "AdminProducts"
}
</script>

<style scoped lang="scss">
  .AdminProducts{
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
    &__products{
      display: flex;
      flex-direction: column;

      .products__product{
        display: flex;
        flex-direction: row;
        padding: 20px;
        margin-bottom: 20px;
        background-color: #e5e3e3;

        @media screen and (max-width: 767px) {
          flex-direction: column;
        }

        .product__img{
          width: 15%;
          margin-right: 20px;

          @media screen and (max-width: 424px) {
            width: 100%;
            margin-right: 0;
            margin-bottom: 20px;
          }
        }
        .product__info{
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: start;
          margin-right: 20px;
          flex-grow: 1;

          @media screen and (max-width: 424px) {
            flex-direction: column;
            flex-wrap: nowrap;
            margin-right: 0;
            margin-bottom: 20px;
          }

          .info_text{
            margin-right: 10px;
            font-family: Roboto;
            font-weight: 400;
            font-size: 14px;
            color: $dark;
            margin-bottom: 10px;
          }
        }
        .product__control{
          display: flex;
          flex-direction: column;
          align-items: start;

          .control__button{
            border: none;
            font-family: Roboto;
            font-weight: 400;
            font-size: 14px;
            color: $dark;
            background: none;
            margin-bottom: 10px;

            &:hover{
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
</style>