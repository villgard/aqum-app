<template>
  <Documents />
  <Container class="text p-subtitle-1">
    <RouterView />
  </Container>
</template>

<script lang="ts" setup>
import Container from '@/components/Common/Container.vue';
import Documents from '@/components/Documents/Documents.vue';
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/typography.scss';
</style>