<template>
  <MainScreen />
  <Statistic />
  <SecondScreen />
  <Opportunities />
  <DownloadBanner />
  <FAQ />
  <MobileAppBanner />
</template>

<script lang="ts" setup>
import MainScreen from '@/components/Landing/MainScreen.vue';
import Statistic from '@/components/Landing/Statistic.vue';
import Opportunities from '@/components/Landing/Opportunities/Opportunities.vue';
import MobileAppBanner from '@/components/Landing/MobileAppBanner.vue';
import FAQ from '@/components/FAQ/index.vue';
</script>

<style lang="scss">

.main {
  overflow-x: hidden;
  background-color: var(--gray-1);
}
</style>