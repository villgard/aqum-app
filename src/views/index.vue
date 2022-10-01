<template>
  <MainScreen />
  <Statistic />
  <SecondScreen />
  <Features />
  <Opportunities />
  <DownloadBanner />
  <FAQ />
  <MobileAppBanner />
</template>

<script lang="ts" setup>
import MainScreen from '@/components/Landing/MainScreen.vue';
import Statistic from '@/components/Landing/Statistic.vue';
import SecondScreen from '@/components/Landing/SecondScreen.vue';
import Features from '@/components/Landing/Features/Features.vue';
import Opportunities from '@/components/Landing/Opportunities/Opportunities.vue';
import DownloadBanner from '@/components/Landing/DownloadBanner.vue';
import FAQ from '@/components/FAQ/FAQ.vue';
import MobileAppBanner from '@/components/Landing/MobileAppBanner.vue';
</script>

<style lang="scss">
.main {
  overflow-x: hidden;
  background-color: var(--gray-1);
}
</style>
