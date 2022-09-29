<template>
  <RouterLink :to="{ name: 'index' }" class="logo">
    <img src="/src/assets/images/aqum-logo.svg" alt="AQUM">
  </RouterLink>
</template>

<script setup>

</script>

<style lang="scss">
.logo {
  display: block;
  width: 128px;
  height: 55px;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>