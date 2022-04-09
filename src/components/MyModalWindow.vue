<template>
  <div class="MyModalWindow-wrapper" v-show="opened" @click.self="opened=false">
    <div class="modal-window">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    opened:{
      type:Boolean,
      required: true,
      default: ()=>false
    }
  },
  methods:{

  },
  watch:{
    opened(newOpened){
      this.$emit('menuClosed', newOpened)
    }
  },
  name: "MyModalWindow"
}
</script>

<style scoped lang="scss">
  .MyModalWindow-wrapper{
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(44,44,44,0.8);
    padding: 20px;

    .modal-window{
      padding: 30px;
      background-color: #e5e3e3;
      border-radius: 10px;
    }
  }
</style>