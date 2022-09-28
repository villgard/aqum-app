<template>
<section class="download-banner">
  <h2 class="download-banner__title h2-title">{{ t('landing.downloadBanner.title') }}</h2>
  <p class="download-banner__subtitle">{{ t('landing.downloadBanner.subtitle') }}</p>
  <a-button class="download-banner__button" type="primary" shape="round" :size="size">
    {{ t('landing.downloadBanner.button') }}
  </a-button>
</section>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style lang="scss">
@import "/src/assets/scss/utils.scss";

.download-banner {
  padding: 59px 0 46px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: no-repeat url('/src/assets/images/download-bg.png');
  background-size: 100% 100%;
  &__title {
    margin-bottom: 12px;
  }
  &__subtitle {
    max-width: 517px;
    text-align: center;
    margin-bottom: 32px;
    @include p-subtitle-text-2;
    color: var(--dark-2);
  }
  &__button {
    &.ant-btn-round {
      height: auto;
      padding: 13px 57px;
      font-family: 'Gotham Book', sans-serif;
      @include button-medium;
      font-weight: 400;
      background-color: var(--blue);
    }
  }
}
</style>