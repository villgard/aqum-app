<template>
<section class="mobile-app-banner">
  <h2 class="mobile-app-banner__title h2-title">{{ t('landing.mobileApp.title') }}</h2>
  <p class="mobile-app-banner__subtitle">{{ t('landing.mobileApp.subtitle') }}</p>
  <div class="mobile-app-banner__content">
    <div class="mobile-app-banner__banner">
      <img src="../../assets/images/app-banner.png" alt="AQUM Mobile App" class="mobile-app-banner__img">
    </div>
    <div class="mobile-app-banner__banner">
      <img src="../../assets/images/app-banner.png" alt="AQUM Mobile App" class="mobile-app-banner__img">
    </div>
    <div class="mobile-app-banner__banner">
      <img src="../../assets/images/app-banner.png" alt="AQUM Mobile App" class="mobile-app-banner__img">
    </div>
  </div>
</section>
</template>

<script lang="ts" setup>
import {useI18n} from "vue-i18n";

const { t } = useI18n();
</script>

<style lang="scss">
@import "/src/assets/scss/utils.scss";

.mobile-app-banner {
  padding: 70px 0 40px;
  @extend %flex-center;
  flex-direction: column;
  text-align: center;
  background-color: var(--gray-2);
  &__title {
    margin-bottom: 12px;
  }
  &__subtitle {
    max-width: 470px;
    margin: 0 auto;
    font-family: 'Gotham Book', sans-serif;
    @include p-subtitle-text;
    color: var(--dark-2);
  }
  &__content {
    max-width: 996px;
    width: 100%;
    padding: 0 15px;
    margin-top: 32px;
    @extend %flex-space-between;
  }
  &__banner {
    width: 270px;
    height: 472px;
    margin-top: 0;
    overflow: hidden;
    border-radius: 15px;
    &:first-child {
      margin-top: 16px;
    }
    &:nth-child(2) {
      margin-top: 36px;
    }
  }
}
</style>