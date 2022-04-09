<template>
  <div class="Auth">
    <form class="form Auth__reg-form" action="" method="post" v-if="$route.params.type === 'reg'">
      <my-input-field class="reg-form__field" :error="false" :config="{type: 'text', placeholder: 'Имя'}"/>
      <my-input-field class="reg-form__field" :error="false" :config="{type: 'text', placeholder: 'Фамилия'}"/>
      <my-input-field class="reg-form__field" :error="false" :config="{type: 'text', placeholder: 'Отчество'}"/>
      <my-input-field class="reg-form__field" :error="false" :config="{type: 'text', placeholder: 'Логин'}"/>
      <my-input-field class="reg-form__field" :error="false" :config="{type: 'email', placeholder: 'e-mail'}"/>
      <my-input-field class="reg-form__field" :error="false" :config="{type: 'password', placeholder: 'Введите пароль'}"/>
      <my-input-field class="reg-form__field" :error="false" :config="{type: 'password', placeholder: 'Повторите пароль'}"/>
      <div class="reg-form__rules">
        <my-input-field class="reg-form__field" id="rules" :error="false" :config="{type: 'checkbox', placeholder: 'Отчество'}"/>
        <my-label :config="{for: 'rules', text: 'Согласиться с правилами'}"/>
      </div>
      <my-input-field class="reg-form__field" :error="false" :config="{type: 'submit', value: 'Зарегистрироваться'}"/>
      <p class="reg-form__log" @click="mode = 'log'">Войти</p>
    </form>
    <form class="form Auth__log-form" action="" method="post" v-if="$route.params.type === 'log'">
      <my-input-field class="log-form__field" :error="false" :config="{type: 'text', placeholder: 'Логин'}"/>
      <my-input-field class="log-form__field" :error="false" :config="{type: 'password', placeholder: 'Пароль'}"/>
      <my-input-field class="log-form__field" :error="false" :config="{type: 'submit', value: 'Войти'}"/>
      <p class="log-form__reg" @click="mode = 'reg'">Зарегистрироваться</p>
    </form>
  </div>
</template>

<script>
import MyInputField from "@/components/UI/MyInputField";
import MyLabel from "@/components/UI/MyLabel";

export default {
  components:{
    MyInputField, MyLabel,
  },
  data(){
    return{
      mode: 'log',
    }
  },
  name: "Auth"
}
</script>

<style scoped lang="scss">
  .Auth {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    .form {
      display: flex;
      flex-direction: column;
      padding: 20px;
      flex: 1 0 auto;
      max-width: 750px;

      .reg-form__field,
      .log-form__field{
        margin-bottom: 10px;
      }
      .reg-form__rules {
        display: flex;
        margin-bottom: 10px;

        .reg-form__field {
          margin-right: 10px;
          margin-bottom: 0;
        }
      }
      .reg-form__log,
      .log-form__reg{
        font-family: Roboto;
        font-weight: 400;
        font-size: 14px;
        color: $dark;
        cursor: pointer;

        &:hover{
          text-decoration: underline;
        }
      }
    }
  }
</style>