<template>
  <section :class="[$style.secondScreen, $style.container]">
    <div :class="$style.banner">
      <img src="@/assets/images/second-screen.svg" alt="1" />
    </div>
    <div :class="$style.content">
      <h2 :class="[$style.title, $style.titleH2]">
        {{ t('secondScreen.title') }}
      </h2>
      <p :class="$style.subtitle">
        {{ t('secondScreen.subtitle') }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { useI18N } from '@/hooks/useI18N';

const { t } = useI18N('home');
</script>

<style lang="scss" module>
@import '@/assets/scss/utils.scss';

.secondScreen {
  margin-top: 108px;
  margin-bottom: 138px;
  @extend %flex-space-between;

  .banner {
    display: block;
    max-width: 610px;
    height: auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    max-width: 472px;
    width: 50%;
    margin-left: 39px;
    .title {
      max-width: 300px;
      width: 100%;
      margin-bottom: 12px;
    }
    .subtitle {
      font-family: var(--font);
      @include t(16, 24, 400);
      color: var(--dark-2);
      margin: 0;
    }
  }
}

@media screen and (max-width: 992px) {
  .secondScreen {
    margin: 100px auto;
    .content {
      .title {
        max-width: 220px;
      }
      .subtitle {
        @include t(14, 22);
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .secondScreen {
    .banner {
      max-width: 348px;
    }
  }
}

@media screen and (max-width: 690px) {
  .secondScreen {
    flex-direction: column-reverse;
    .banner {
      max-width: 100%;
    }
    .content {
      max-width: 100%;
      width: 100%;
      margin-bottom: 46px;
      margin-left: 0;
    }
  }
}
</style>
