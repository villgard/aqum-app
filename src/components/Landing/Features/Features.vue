<template>
  <section :class="$style.features">
    <Container :class="$style.wrapper">
      <div :class="$style.content">
        <h2 :class="[$style.title, $style.titleH2]">{{ t('title') }}</h2>
        <p :class="$style.subtitle">{{ t('subtitle') }}</p>
        <a-button shape="round" state="primary">{{ t('button') }}</a-button>
      </div>
      <Slider />
    </Container>
  </section>
</template>

<script setup>
import Slider from './Slider.vue';
import { useI18N } from '@/hooks/useI18N';

const { t } = useI18N('home.features');
</script>

<style lang="scss" module>
@import '@/assets/scss/utils.scss';

.features {
  margin-bottom: 120px;
  padding: 0 15px;
  background: var(--gray-2);
  box-shadow: -15px 15px 30px rgba(0, 0, 0, 0.02);

  .wrapper {
    padding: 41px 0;
    @extend %flex-space-between;
  }

  .content {
    max-width: 374px;
    width: 100%;
    margin-right: 50px;

    .title {
      margin-bottom: 18px;
    }
    .subtitle {
      max-width: 299px;
      margin-bottom: 216px;
      font-family: 'Poppins', sans-serif;
      @include p-subtitle-text;
    }
    :global {
      .ant-btn-round {
        height: auto;
        padding: 13px 76px;
        @include button-medium;
        background-color: var(--blue);
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .features {
    .wrapper {
      .content {
        :global {
          .ant-btn-round {
            padding: 7px 49px;
          }
        }
      }
    }
  }

}
</style>
