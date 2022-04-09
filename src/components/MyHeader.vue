<link rel="stylesheet" href="../assets/SCSS/styles.scss">
<template>
  <header class="MyHeader">
    <my-container class="MyHeader__container">
      <div class="MyHeader__mobile-menu">
        <button v-show="!menuOpened && currentWidth < 425" @click="menuOpened = true" class="MyHeader__open-menu">
          <span>
            <svg width="100" height="100" viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 12.8333L81.0811 0L0 55L81.0811 110L100 97.1667L37.8378 55L100 12.8333Z" fill="white"/>
            </svg>
          </span>
        </button>
        <div class="MyHeader__logo">
<!--          <a href="#" class="logo__text">CopyStar</a>-->
          <router-link class="link" to="/" exact>
            CopyStar
          </router-link>
        </div>
      </div>
      <transition name="slide">
        <nav v-show="currentWidth > 424 || (currentWidth < 425 && menuOpened)" class="MyHeader__nav">
          <div class="nav__content">
            <div class="nav__left">
              <router-link class="link" to="/catalog" @click="menuOpened = false">Каталог</router-link>
              <router-link class="link" to="/" @click="menuOpened = false">О нас</router-link>
              <router-link class="link" to="/findus" @click="menuOpened = false">Где нас найти</router-link>
            </div>
            <div class="nav__right">
              <router-link class="link" to="/auth/log" @click="menuOpened = false">Вход</router-link>
              <router-link class="link" to="/auth/reg" @click="menuOpened = false">Регистрация</router-link>
            </div>
          </div>
          <button v-show="menuOpened && currentWidth < 425" @click="menuOpened = false" class="nav__close-menu">
            <span>
              <svg width="100" height="100" viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 12.8333L81.0811 0L0 55L81.0811 110L100 97.1667L37.8378 55L100 12.8333Z" fill="white"/>
              </svg>
            </span>
          </button>
        </nav>
      </transition>
    </my-container>
  </header>
</template>

<script>
import MyContainer from "@/components/MyContainer";
export default {
  components:{
    MyContainer
  },
  data(){
    return{
      menuOpened: false,
    }
  },
  methods:{
    openMenu(){
      this.menuOpened = true;
    },
    closeMenu(){
      this.menuOpened = false;
    },
  },
  props:{
    currentWidth:{
      type: Number,
      required:true,
    }
  },
  name: "MyHeader",
}
</script>

<style scoped lang="scss">
  .MyHeader {
    background-color: $dark;
    padding: 16px 0;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    flex: 0 0 auto;

    &__container {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    &__logo{
      margin-right: 36px;

      .link{
        font-family: Roboto;
        font-weight: 700;
        font-size: 18px;
        color: $light;
      }
    }
    &__nav{
      flex-grow: 1;
      display: flex;
      justify-content: space-between;

      .nav__content{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-grow: 1;
      }
      .link{
        font-family: Roboto;
        font-weight: 400;
        font-size: 14px;
        color: $light;
        margin-right: 24px;

        &:last-child{
          margin-right: 0;
        }
        &:hover{
          text-decoration: underline;
        }
      }
    }
    @media screen and (max-width: 767px) {
      &__container {
        flex-direction: column;
      }
      &__logo{
        margin-right: 0;
        margin-bottom: 10px;
      }
      &__nav{
        .nav__left .link{
          margin-right: 24px;
        }
      }
    }
    @media screen and (max-width: 424px) {
      &__container {
        flex-direction: row;
      }
      &__mobile-menu{
        display: flex;
        flex-grow: 1;
        flex-direction: row;
        align-items: center;

        .MyHeader__logo{
          margin-bottom: 0px;
          margin-left: 16px;
        }
        .MyHeader__open-menu{
          width: 16px;
          border: none;
          align-self: stretch;
          display: flex;
          align-items: center;
          background-color: $dark;
          svg{
            width: 100%;
            height: 100%;
            background: $dark;
            display: block;
            transform: rotate(180deg);
          }
        }
      }
      .slide-enter-active,
      .slide-leave-active{
        transition: opacity 0.2s;
      }
      .slide-enter-from,
      .slide-leave-to{
        opacity: 0;
      }
      &__nav{
        transition-duration: 1s;
        position: fixed;
        width: 70%;
        height: 100%;
        background-color: $dark;
        position: fixed;
        left: 0;
        top: 0;
        flex-direction: row;
        padding: 16px;

        .nav__content {
          display: flex;
          flex-direction: column;
          justify-content: start;

          .nav__left,
          .nav__right{
            display: flex;
            flex-direction: column;
          }
          .link{
            margin-bottom: 10px;
          }
        }
        .nav__close-menu{
          width: 20px;
          border: none;
          align-self: start;
          display: flex;
          align-items: center;
          background-color: $dark;
          svg{
            width: 100%;
            height: 100%;
            background: $dark;
            display: block;
          }
        }
      }
    }
  }
</style>