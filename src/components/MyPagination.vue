<template>
  <div class="MyPagination">
    <div class="MyPagination__previous" v-show="pagination.currentPage > 1" @click="pagination.currentPage--">
      <svg xmlns="http://www.w3.org/2000/svg" width="43" height="49" viewBox="0 0 43 49" fill="none">
        <path d="M42.5742 47.0688V38.7748C42.5742 38.2038 42.2692 37.6748 41.7742 37.3898L21.5623 25.7208C20.4963 25.1048 20.4963 23.5658 21.5623 22.9498L41.7742 11.2808C42.2692 10.9948 42.5742 10.4668 42.5742 9.89582V1.60182C42.5742 0.370818 41.2412 -0.399184 40.1752 0.216816L0.800247 22.9498C-0.265753 23.5658 -0.265753 25.1048 0.800247 25.7208L40.1752 48.4548C41.2412 49.0698 42.5742 48.3008 42.5742 47.0688Z" fill="#2C2C2C"/>
      </svg>
    </div>
    <div class="MyPagination__pages">
      <span class="MyPagination__page MyPagination__current-page">1</span>
      <span class="MyPagination__page">2</span>
      <span class="MyPagination__page">3</span>
    </div>
    <div class="MyPagination__next" v-show="pagination.currentPage < pagination.totalPage" @click="pagination.currentPage++">
      <svg xmlns="http://www.w3.org/2000/svg" width="43" height="49" viewBox="0 0 43 49" fill="none">-->
        <path d="M0 1.60239V9.89639C0 10.4674 0.305001 10.9964 0.800001 11.2814L21.012 22.9504C22.078 23.5664 22.078 25.1054 21.012 25.7214L0.800001 37.3904C0.305001 37.6764 0 38.2044 0 38.7754V47.0694C0 48.3004 1.333 49.0704 2.399 48.4544L41.774 25.7214C42.84 25.1054 42.84 23.5664 41.774 22.9504L2.399 0.216386C1.333 -0.398614 0 0.370385 0 1.60239Z" fill="#2C2C2C"/>-->
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    pagination:{
      type: Object,
      required: true,
    }
  },
  name: "MyPagination"
}
</script>

<style scoped lang="scss">
  .MyPagination{
    display: flex;

    &__previous,
    &__next{
      height: 17px;
      cursor: pointer;

      svg{
        height: 100%;
      }
    }
    &__pages{
      .MyPagination__page{
        padding: 0 10px;
        font-family: Roboto;
        font-weight: 400;
        font-size: 14px;
        color: $dark;
        cursor: pointer;

        &:hover{
          text-decoration: underline;
        }
      }
      .MyPagination__current-page{
        font-weight: 700;
        text-decoration: none !important;
      }
    }
  }
</style>