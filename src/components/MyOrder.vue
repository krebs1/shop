<template>
  <div class="MyOrder">
    <span class="MyOrder__text MyOrder__number" @click="opened = !opened">Номер заказа: 2222</span>
    <div class="MyOrder__info" v-show="currentWidth > 1023 || (currentWidth < 1024 && opened)">
      <span class="MyOrder__text">Номер заказа: 17.11.2022</span>
      <span class="MyOrder__text">Количество товаров: 17</span>
      <span class="MyOrder__text">Стоймость заказа: 17000</span>
      <span class="MyOrder__text">Статус заказа: Новый</span>
      <span class="MyOrder__text" v-show="type === 'admin'">Иванов Иван Иванович</span>
      <button class="MyOrder__button" v-show="type === 'user'">удалить</button>
      <button class="MyOrder__button" v-show="type === 'admin'">Подтвердить</button>
      <button class="MyOrder__button" v-show="type === 'admin'" @click="openModal">Отменить</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      opened: false,
    }
  },
  props:{
    currentWidth:{
      type: Number,
      required:true,
    },
    type:{
      type: String,
      required: true,
      default: ()=>''
    }
  },
  methods:{
    openModal(){
      this.$emit('modalOpen', true)
    }
  },
  name: "MyOrder"
}
</script>

<style scoped lang="scss">
  .MyOrder{
    display: flex;
    padding: 10px;
    border-bottom: 1px solid $dark;
    margin-bottom: 20px;

    &__number{
      margin-right: 30px;
    }
    &__info{
      display: flex;
      justify-content: space-between;
      flex-grow: 1;
    }
    &__text{
      font-family: Roboto;
      font-weight: 400;
      font-size: 14px;
      color: $dark;
    }
    &__button{
      border: none;
      font-family: Roboto;
      font-weight: 400;
      font-size: 14px;
      color: $dark;
      background: none;

      &:hover{
        text-decoration: underline;
      }
    }

    @media screen and (max-width: 1023px) {
      flex-direction: column;

      &__number{
        cursor: pointer;

        &:hover{
          text-decoration: underline;
        }
      }
      &__info{
        padding: 10px;
        background-color: #e5e3e3;
        flex-direction: column;

        .MyOrder__delete{
          align-self: start;
          margin-bottom: 10px;
        }

        .MyOrder__text{
          margin-bottom: 10px;
        }
      }
    }
  }
</style>