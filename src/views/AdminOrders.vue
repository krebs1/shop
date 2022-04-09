<template>
  <div class="AdminOrders">
    <my-modal-window class="AdminOrders__modal" :opened="modalOpened" @menuClosed="modalClosed">
      <form class="modal__form">
        <my-input-field class="form__field" :error="false" :config="{type: 'textarea', placeholder: 'Причина'}"/>
        <my-input-field class="form__button" :error="false" :config="{type: 'submit', value: 'Отменить'}"/>
      </form>
    </my-modal-window>
    <my-admin-nav class="AdminOrders__nav"/>
    <div class="AdminOrders__orders">
      <my-order :type="'admin'" :current-width="currentWidth" @modalOpen="modalOpen"/>
      <my-order :type="'admin'" :current-width="currentWidth" @modalOpen="modalOpen"/>
      <my-order :type="'admin'" :current-width="currentWidth" @modalOpen="modalOpen"/>
      <my-order :type="'admin'" :current-width="currentWidth" @modalOpen="modalOpen"/>
      <my-order :type="'admin'" :current-width="currentWidth" @modalOpen="modalOpen"/>
    </div>
  </div>
</template>

<script>
import MyAdminNav from "@/components/MyAdminNav";
import MyOrder from "@/components/MyOrder";
import MyInputField from "@/components/UI/MyInputField";
import MyModalWindow from "@/components/MyModalWindow";

export default {
  components:{
    MyAdminNav, MyOrder, MyInputField, MyModalWindow,
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
    },
    modalOpen(value){
      this.modalOpened = true
    }
  },
  name: "AdminOrders"
}
</script>

<style scoped lang="scss">
  .AdminOrders{
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
    &__orders{
      flex-grow: 1;
    }
  }
</style>