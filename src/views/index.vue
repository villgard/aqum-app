<template>
  <Header />
  <main class="main">
    <Statistic />
    <SecondScreen />
    <Opportunities />
    <FAQ />
    <DownloadBanner />
    <MobileAppBanner />
  </main>
  <Footer />
</template>

<script lang="ts" setup>
import Header from '/src/components/Header/Desktop/index.vue';
import Footer from '/src/components/Footer/index.vue';
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