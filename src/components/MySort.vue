<template>
  <div class="MySort">
    <span class="MySort__title" v-show="currentWidth < 768" @click="sort.opened = !sort.opened">{{sort.sortTitle === 'none' ? 'Упорядочить по...' : 'По ' + sort.sortTitle}}</span>
    <div class="MySort__variants" v-show="currentWidth > 768 || (currentWidth < 768 && sort.opened)">
      <div class="MySort__novelty MySort__item">
        <div class="desktop" v-show="currentWidth > 767">
          <span class="MySort__text">По новизне</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5 3H3V4H3.5V3ZM12.5 4C12.7761 4 13 3.77614 13 3.5C13 3.22386 12.7761 3 12.5 3V4ZM3.5 7H3V8H3.5V7ZM9.5 8C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7V8ZM3.5 11H3V12H3.5V11ZM6.5 12C6.77614 12 7 11.7761 7 11.5C7 11.2239 6.77614 11 6.5 11V12ZM3.5 4H12.5V3H3.5V4ZM3.5 8H9.5V7H3.5V8ZM3.5 12H6.5V11H3.5V12Z" fill="#151528"></path>
          </svg>
        </div>
        <div class="mobile" v-show="currentWidth < 768">
          <span class="MySort__text" @click="sort.sortTitle = 'новизне (новее)', sort.opened = false">Новизне (новее)</span>
          <span class="MySort__text" @click="sort.sortTitle = 'новизне (новее)', sort.opened = false">Новизне (старее)</span>
        </div>
      </div>
      <div class="MySort__production-year MySort__item">
        <div class="desktop" v-show="currentWidth > 767">
          <span class="MySort__text">По году производства</span>
          <svg v-show="currentWidth > 767" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5 3H3V4H3.5V3ZM12.5 4C12.7761 4 13 3.77614 13 3.5C13 3.22386 12.7761 3 12.5 3V4ZM3.5 7H3V8H3.5V7ZM9.5 8C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7V8ZM3.5 11H3V12H3.5V11ZM6.5 12C6.77614 12 7 11.7761 7 11.5C7 11.2239 6.77614 11 6.5 11V12ZM3.5 4H12.5V3H3.5V4ZM3.5 8H9.5V7H3.5V8ZM3.5 12H6.5V11H3.5V12Z" fill="#151528"></path>
          </svg>
        </div>
        <div class="mobile" v-show="currentWidth < 768">
          <span class="MySort__text" @click="sort.sortTitle = 'году производдства (новее)', sort.opened = false">Году производдства (новее)</span>
          <span class="MySort__text" @click="sort.sortTitle = 'году производдства (старее)', sort.opened = false">Году производдства (старее)</span>
        </div>
      </div>
      <div class="MySort__name MySort__item">
        <div class="desktop" v-show="currentWidth > 767">
          <span class="MySort__text">По названию</span>
          <svg v-show="currentWidth > 767" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5 3H3V4H3.5V3ZM12.5 4C12.7761 4 13 3.77614 13 3.5C13 3.22386 12.7761 3 12.5 3V4ZM3.5 7H3V8H3.5V7ZM9.5 8C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7V8ZM3.5 11H3V12H3.5V11ZM6.5 12C6.77614 12 7 11.7761 7 11.5C7 11.2239 6.77614 11 6.5 11V12ZM3.5 4H12.5V3H3.5V4ZM3.5 8H9.5V7H3.5V8ZM3.5 12H6.5V11H3.5V12Z" fill="#151528"></path>
          </svg>
        </div>
        <div class="mobile" v-show="currentWidth < 768">
          <span class="MySort__text" @click="sort.sortTitle = 'названию (от А до Я)', sort.opened = false">Названию (от А до Я)</span>
          <span class="MySort__text" @click="sort.sortTitle = 'названию (от Я до А)', sort.opened = false">Названию (от Я до А)</span>
        </div>
      </div>
      <div class="MySort__price MySort__item">
        <div class="desktop" v-show="currentWidth > 767">
          <span class="MySort__text">По цене</span>
          <svg v-show="currentWidth > 767" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5 3H3V4H3.5V3ZM12.5 4C12.7761 4 13 3.77614 13 3.5C13 3.22386 12.7761 3 12.5 3V4ZM3.5 7H3V8H3.5V7ZM9.5 8C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7V8ZM3.5 11H3V12H3.5V11ZM6.5 12C6.77614 12 7 11.7761 7 11.5C7 11.2239 6.77614 11 6.5 11V12ZM3.5 4H12.5V3H3.5V4ZM3.5 8H9.5V7H3.5V8ZM3.5 12H6.5V11H3.5V12Z" fill="#151528"></path>
          </svg>
        </div>
        <div class="mobile" v-show="currentWidth < 768">
          <span class="MySort__text" @click="sort.sortTitle = 'цене (меньше)', sort.opened = false">Цене (меньше)</span>
          <span class="MySort__text" @click="sort.sortTitle = 'цене (больше)', sort.opened = false">Цене (больше)</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      sort:{
        opened: false,
        sortTitle: 'none',
        by: 'none',
        type: 'none',
      }
    }
  },
  props:{
    currentWidth:{
      type: Number,
      required:true,
    }
  },
  name: "MySort"
}
</script>

<style scoped lang="scss">
  .MySort{
    display: flex;
    flex-direction: column;

    &__title{
      font-family: Roboto;
      font-size: 14px;
      font-weight: 700;
      color: $dark;
      cursor: pointer;

      &:hover{
        text-decoration: underline;
      }
    }
    &__variants {
      display: flex;
      flex-direction: row;

      .MySort__item {
        cursor: pointer;

        .MySort__text {
          font-family: Roboto;
          font-weight: 400;
          font-size: 14px;
          color: $dark;
        }
        .desktop{
          display: flex;
          align-items: center;
          margin-right: 10px;
          cursor: pointer;

          &:hover{
            text-decoration: underline;
          }
        }
        .mobile{
          display: flex;
          flex-direction: column;

          .MySort__text{
            margin-bottom: 10px;
            cursor: pointer;

            &:hover{
              text-decoration: underline;
            }
          }
        }
      }

      @media screen and (max-width: 767px) {
        flex-direction: column;
        padding: 5px;
        background-color: #e5e3e3;

        .MySort__item {
          margin: 0;
        }
      }
    }
  }
</style>