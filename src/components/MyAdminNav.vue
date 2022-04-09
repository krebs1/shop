<template>
  <div class="MyAdminNav">
    <div class="MyAdminNav__links">
      <router-link class="MyAdminNav__link" to="/admin/orders">Заказы</router-link>
      <router-link class="MyAdminNav__link" to="/admin/products">Товары</router-link>
      <router-link class="MyAdminNav__link" to="/admin/categories">Категории</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyAdminNav"
}
</script>

<style scoped lang="scss">
.MyAdminNav{
  background-color: #e5e3e3;
  padding: 20px;

  &__links{
    display: flex;
    flex-direction: row;

    .MyAdminNav__link{
      font-family: Roboto;
      font-weight: 400;
      font-size: 18px;
      color: $dark;
      margin-right: 20px;

      &:hover{
        text-decoration: underline;
      }
      &:last-child{
        margin-right: 0;
      }
    }
  }
}
</style>