<template>
  <section :class="$style.downloadBanner">
    <h2 :class="[$style.title, $style.titleH2]">{{ t('downloadBanner.title') }}</h2>
    <p :class="$style.subtitle">{{ t('downloadBanner.subtitle') }}</p>
    <a-button :class="$style.button" type="primary" shape="round" @click="router.push({ name: 'download' })">
      {{ t('downloadBanner.button') }}
    </a-button>
  </section>
</template>

<script setup>
import { useI18N } from '@/hooks/useI18N';
import { useRouter } from 'vue-router';

const router = useRouter();
const { t } = useI18N('home');
</script>

<style lang="scss" module>
@import '@/assets/scss/utils.scss';

.downloadBanner {
  padding: 59px 0 46px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: no-repeat url('/src/assets/images/download-bg.png');
  background-size: 100% 100%;
  .title {
    margin-bottom: 12px;
  }
  .subtitle {
    max-width: 517px;
    text-align: center;
    margin-bottom: 32px;
    @include p-subtitle-text-2;
    color: var(--dark-2);
  }
  :global {
    .ant-btn-round {
      height: auto;
      padding: 13px 57px;
      @include button-medium;
      background-color: var(--blue);
      &:hover {
        opacity: 0.8;
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .downloadBanner {
    padding: 42px 15px;
    .subtitle {
      @include t(14, 130%);
    }
  }
}

@media screen and (max-width: 425px) {
  .downloadBanner {
    padding: 37px 15px;
    .title {
      margin-bottom: 8px;
    }
    .subtitle {
      margin-bottom: 28px;
    }
  }
}
</style>
