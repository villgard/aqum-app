<template>
  <Container>
    <a-row :class="$style.wrapper" :gutter="[24, 0]">
      <a-col :span="12"><Info /></a-col>
      <a-col :span="12"><SelectedPlan /></a-col>
    </a-row>
  </Container>
</template>

<script lang="ts" setup>
import Container from '@/components/Common/Container.vue';
import Info from './Info.vue';
import SelectedPlan from '@/components/Pricing/SelectedPlan.vue';
</script>

<style lang="scss" module>
  .wrapper {
    max-width: 1020px;
    margin: 36px auto 40px auto !important;
  }
</style>