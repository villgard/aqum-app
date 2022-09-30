<template>
  <section :class="$style.mobileAppBanner">
    <h2 :class="[$style.title, $style.titleH2]">
      {{ t('mobileApp.title') }}
    </h2>
    <p :class="$style.subtitle">
      {{ t('mobileApp.subtitle') }}
    </p>
    <div :class="$style.content">
      <div :class="$style.banner">
        <img src="@/assets/images/app-banner.png" alt="AQUM Mobile App" />
      </div>
      <div :class="$style.banner">
        <img src="@/assets/images/app-banner.png" alt="AQUM Mobile App" />
      </div>
      <div :class="$style.banner">
        <img src="@/assets/images/app-banner.png" alt="AQUM Mobile App" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18N } from '@/hooks/useI18N';

const { t } = useI18N('home');
</script>

<style lang="scss" module>
@import '/src/assets/scss/utils.scss';

.mobileAppBanner {
  padding: 70px 0 40px;
  @extend %flex-center;
  flex-direction: column;
  text-align: center;
  background-color: var(--gray-2);

  .title {
    margin-bottom: 12px;
    text-align: center;
  }

  .subtitle {
    max-width: 470px;
    margin: 0 auto;
    text-align: center;
    @include p-subtitle-text;
    color: var(--dark-2);
  }

  .content {
    max-width: 996px;
    width: 100%;
    padding: 0 15px;
    margin-top: 32px;
    @extend %flex-space-between;

    .banner {
      max-width: 270px;
      width: 100%;
      height: auto;
      overflow: hidden;
      border-radius: 15px;

      img {
        width: 100%;
        height: 100%;
      }

      &:first-child {
        margin-top: 16px;
      }

      &:nth-child(2) {
        margin-top: 36px;
      }
    }
  }
}
@media screen and (max-width: 992px) {
  .mobileAppBanner {
    padding: 32px 0 21px;

    .subtitle {
      max-width: 385px;
      @include t(14, 22);
    }

    .content {
      margin-top: 0;
      max-width: 545px;
      .banner {
        max-width: 147px;
        margin-right: 0;
        &:first-child {
          margin-top: 36px;
        }

        &:nth-child(2) {
          margin-top: 60px;
        }

        &:first-child {
          margin-top: 44px;
        }
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .mobileAppBanner {
    .title {
      margin-bottom: 8px;
    }

    .subtitle {
      margin: 0 35px;
    }

    .content {
      justify-content: center;
      gap: 29px;
      margin: 0 50px;

      .banner {
        max-width: 120px;

        &:first-child {
          margin-top: 38px;
        }

        &:nth-child(2) {
          margin-top: 46px;
        }

        &:last-child {
          margin-top: 32px;
        }
      }
    }
  }
}

@media screen and (max-width: 425px) {
  .mobileAppBanner {
    padding: 23px 0 35px;

    .content {
      .banner {
        max-width: 76px;
      }
    }
  }
}
</style>
