<template>
  <div class="MyFilters">
    <div class="MyFilters__drop-down">
      <span class="drop-down__title" @click="categories.opened = !categories.opened">{{categories.select === 'none' ? 'Категория' : categories.select}}</span>
      <div class="drop-down__items" v-show="categories.opened">
        <span class="drop-down__item" @click="categories.select = 'none', categories.opened=false">Неважно</span>
        <span class="drop-down__item" @click="categories.select = 'Лазерные принтеры', categories.opened=false">Лазерные принтеры</span>
        <span class="drop-down__item" @click="categories.select = 'Струйные принтеры', categories.opened=false">Струйные принтеры</span>
        <span class="drop-down__item" @click="categories.select = 'Термопринтеры', categories.opened=false">Термопринтеры</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      categories:{
        select: 'none',
        opened: false,
      }
    }
  },
  props:{
    currentWidth:{
      type: Number,
      required:true,
    }
  },
  name: "MyFilters"
}
</script>

<style scoped lang="scss">
  .MyFilters{
    display: flex;
    flex-direction: column;

    &__drop-down{
      margin-bottom: 20px;

      .drop-down__title{
        font-family: Roboto;
        font-size: 14px;
        font-weight: 700;
        color: $dark;
        cursor: pointer;

        &:hover{
          text-decoration: underline;
        }
      }
      .drop-down__items{
        padding: 5px;
        background-color: #e5e3e3;
        display: flex;
        flex-direction: column;

        .drop-down__item{
          font-family: Roboto;
          font-size: 14px;
          font-weight: 400;
          color: $dark;
          cursor: pointer;

          &:hover{
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>