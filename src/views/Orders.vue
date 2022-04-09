<template>
  <div class="Orders">
    <my-order :current-width="currentWidth" :type="'user'"/>
    <my-order :current-width="currentWidth" :type="'user'"/>
  </div>
</template>

<script>
import MyOrder from "@/components/MyOrder";

export default {
  components:{
    MyOrder,
  },
  props:{
    currentWidth:{
      type: Number,
      required:true,
    }
  },
  name: "Orders"
}
</script>

<style scoped>

</style>