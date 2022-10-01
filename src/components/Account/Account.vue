<template>
  <Container>
    <div :class="$style.wrapper">
      <div :class="$style.column"><Info /></div>
      <div :class="$style.column"><SelectedPlan /></div>
    </div>
  </Container>
</template>

<script lang="ts" setup>
import Container from '@/components/Common/Container.vue';
import Info from './Info.vue';
import SelectedPlan from '@/components/Pricing/SelectedPlan.vue';
</script>

<style lang="scss" module>
  .wrapper {
    display: flex;
    max-width: 1020px;
    margin: 36px auto 40px auto !important;
    
    @media (min-width: 768px) {
      gap: 0 24px;
    }

    @media (max-width: 767px) {
      flex-direction: column;
      gap: 28px;
    }
  }

  .column {
    flex-shrink: 0;

    @media (min-width: 1024px) {
      width: 50%;
    }

    @media (max-width: 1023px) and (min-width: 768px) {
      &:nth-child(1) {
        width: 57%;
      }

      &:nth-child(2) {
        width: 43%;
      }
    }

    @media (max-width: 767px) {
      width: 100%;
    }
  }
</style>