<template>
  <main class="main">
    <Statistic />
    <SecondScreen />
    <Opportunities />
    <FAQ />
    <DownloadBanner />
    <MobileAppBanner />
  </main>
</template>

<script lang="ts" setup>
import Statistic from '../components/Landing/Statistic.vue';
import Opportunities from '../components/Landing/Opportunities.vue';
import MobileAppBanner from '../components/Landing/MobileAppBanner.vue';
import FAQ from '../components/FAQ/index.vue';
</script>

<style lang="scss">

.main {
  background-color: var(--gray-1);
}
</style>