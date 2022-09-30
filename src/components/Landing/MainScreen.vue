<template>
  <section :class="$style.mainScreen">
    <Container :class="$style.wrapper">
      <div :class="$style.content">
        <h1 :class="$style.title">{{ t('title') }}</h1>
        <p :class="$style.subtitle">{{ t('subtitle') }}</p>
        <a-button :class="$style.button" type="primary" shape="round">{{ t('button') }}</a-button>
      </div>
      <div :class="$style.empty">
        <div :class="[$style.banner, $style.mobile]">
          <img src="@/assets/images/main-img.webp" />
        </div>
      </div>
    </Container>
    <div :class="$style.banner">
      <img src="@/assets/images/main-img.webp" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18N } from '@/hooks/useI18N';

const { t } = useI18N('home.main');
</script>

<style lang="scss" module>
@import '@/assets/scss/utils.scss';

.mainScreen {
  position: relative;
  .wrapper {
    display: flex;
    position: relative;
    .empty {
      .banner.mobile {
        display: none;
      }
    }
  }
  .content {
    max-width: 465px;
    margin: 97px 59px 99px 0;
    .title {
      @include h1;
      margin-bottom: 18px;
    }
    .subtitle {
      @include p-subtitle-text;
      margin-bottom: 60px;
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
  .banner {
    overflow: hidden;
    position: absolute;
    top: -68px;
    right: 0;
    z-index: 10;
    width: 50vw;
    height: 630px;
    background-image: url('/src/assets/images/main-bg.webp');
    background-size: 100% 100%;
    img {
      max-width: 50vw;
      max-height: 546px;
      width: min(87%, 683px);
      height: auto;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}

@media screen and (max-width: 1024px) {
  .mainScreen {
    .content {
      max-width: 334px;
      margin: 65px 14px 71px 0;

      .title {
        @include t(38, 46, 500);
      }
      .subtitle {
        margin-bottom: 28px;
      }
      :global {
        .ant-btn-round {
          padding: 7px 49px;
        }
      }
    }
    .banner {
      width: calc(50vw + 214px);
      right: -214px;
      height: 496px;
      img {
        max-width: calc(50vw + 214px);
        width: min(87%, 535px);
        max-height: 427px;
        right: 40px;
      }
    }
  }
}

@media screen and (max-width: 695px) {
  .mainScreen {
    .wrapper {
      flex-direction: column;
      overflow: hidden;

      .empty {
        width: 100vw;
        position: relative;
        height: 367px;

        .banner.mobile {
          position: absolute;
          width: calc(100vw + 80px);
          height: 367px;
          top: 0;
          right: 0;
          left: 0;
          display: block;
          margin: -15px;

          img {
            max-width: 396px;
            max-height: 317px;
            right: 30px;
          }
        }
      }
    }
    .content {
      margin: 38px 0 60px;
      max-width: 100%;
      .title {
        max-width: 550px;
      }
      .subtitle {
        max-width: 450px;
      }
    }
    .banner {
      display: none;
    }
  }
}

</style>
