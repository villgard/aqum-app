<template>
  <section class="second-screen container">
    <div class="second-screen__banner">
      <img src="../../assets/images/second-screen.svg" alt="1" class="section-screen__banner-img">
    </div>
    <div class="second-screen__content">
      <h2 class="second-screen__title h2-title">
        {{ t('secondScreen.title') }}
      </h2>
      <p class="second-screen__subtitle">
        {{ t('secondScreen.subtitle') }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { useI18N } from '@/hooks/useI18N';

const { t } = useI18N('home');
</script>

<style lang="scss">
@import "/src/assets/scss/utils.scss";

.second-screen {
  margin-top: 108px;
  margin-bottom: 138px;
  @extend %flex-center;
  gap: 89px;
  &__banner {
    max-width: 610px;
    width: 100%;
    height: 534px;
    &-img {
      width: 100%;
      height: 100%;
    }
  }
  &__title {
    max-width: 300px;
    width: 100%;
    margin-bottom: 12px;
  }
  &__subtitle {
    font-family: 'Gotham Book', sans-serif;
    @include t(16, 24, 400);
    color: var(--dark-2);
  }
}
</style>