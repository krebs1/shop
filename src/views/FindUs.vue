<template>
  <div class="FindUs">
    <img class="FindUs__map" src="@/assets/img/map.png" alt="map">
    <address class="FindUs__contacts">
      <span class="FindUs__contact">Адресс: <a>594218, Самарская область, город Дмитров, въезд Гоголя, 11</a></span>
      <span class="FindUs__contact">E-mail: <a href="mailto: info@copystar.ru">info@copystar.ru</a></span>
      <span class="FindUs__contact">Телефон: <a href="tel: +79127776655">+7(912)777-66-55</a></span>
    </address>
  </div>
</template>

<script>
export default {
  name: "FindUs"
}
</script>

<style scoped lang="scss">
  .FindUs{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    &__map{
      max-width: 860px;
      width: 100%;
      margin-bottom: 20px;
    }
    &__contacts{
      display: flex;
      flex-direction: column;
      font-style: normal;

      .FindUs__contact{
        margin-bottom: 10px;
        font-family: Roboto;
        font-weight: 500;
        font-size: 16px;
        color: $dark;

        a{
          margin-bottom: 10px;
          font-family: Roboto;
          font-weight: 400;
          font-size: 14px;
          color: $dark;
        }
      }
    }
  }
</style>