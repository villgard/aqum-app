<template>
  <section :class="[$style.opportunities]">
    <h2 :class="[$style.title, $style.titleH2]">{{ t('opportunities.title') }}</h2>
    <p :class="$style.subtitle">{{ t('opportunities.subtitle') }}</p>
    <OpportunitiesList />
  </section>
</template>

<script lang="ts" setup>
import { useI18N } from '@/hooks/useI18N';
import OpportunitiesList from './OpportunitiesList.vue';

const { t } = useI18N('home');
</script>

<style lang="scss" module>
@import "@/assets/scss/utils.scss";

.opportunities {
  text-align: center;
  margin-bottom: 120px;

  .title {
    margin-bottom: 12px;
  }

  .subtitle {
    @include p-subtitle-text-2;
    margin-bottom: 64px;
  }

  @media screen and (max-width: 992px) {
    .subtitle {
      @include t(14, 17, 400);
    }
  }
}

@media screen and (max-width: 576px) {
  .opportunities {
    margin-bottom: 100px;

    .subtitle {
      margin-bottom: 36px;
      padding: 0 50px;
    }
  }
}
</style>