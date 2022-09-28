<template>
<section class="privacy__heading">
  <h1 class="privacy__title h2-title">{{ t('legal.title') }}</h1>
  <p class="privacy__subtitle p-subtitle-2"> {{ t('legal.subtitle') }}</p>
</section>
</template>

<script setup>
import {useI18n} from "vue-i18n";

const { t } = useI18n();
</script>

<style lang="scss">

.privacy {
  &__heading {
    margin: 0 auto;
    padding: 60px 0;
    text-align: center;
    background-color: var(--gray-2);
  }
  &__subtitle {
    max-width: 420px;
    margin: 0 auto;
    color: var(--dark-2);
  }
}
</style>