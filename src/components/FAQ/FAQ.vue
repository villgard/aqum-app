<template>
  <section :class="$style.faq">
    <div :class="$style.heading">
      <h2 :class="[$style.title, $style.titleH2]">{{ t('title')}}</h2>
      <p :class="$style.subtitle">{{ t('subtitle') }}</p>
    </div>
    <Tabs />
  </section>
</template>

<script lang="ts" setup>
import Tabs from './Tabs.vue';
import {useI18N} from "@/hooks/useI18N";

const { t } = useI18N('faq');

</script>

<style lang="scss" module>
@import '@/assets/scss/utils.scss';

.faq {
  margin: 120px auto;
  max-width: 1100px;
  padding: 0 15px;

  .heading {
    text-align: center;
    max-width: 570px;
    width: 100%;
    margin: 0 auto;
  }

  .title {
    margin-bottom: 12px;
    text-align: left;
  }

  .subtitle {
    text-align: left;
    @include p-subtitle-text;
  }
}

@media screen and (max-width: 992px) {
  .faq {
    margin: 100px auto;
    .subtitle {
      @include t(14, 17, 400);
    }
  }
}

@media screen and (max-width: 750px){
  .faq {
  .title {
    text-align: center;
    margin-bottom: 8px;
  }
  .subtitle {
    text-align: center;
  }
}
}
</style>
