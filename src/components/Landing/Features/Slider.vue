<template>
  <div :class="$style.slider">
    <div :class="$style.slide">
      <div :class="$style.card" v-for="(item, index) in slides" :key="index">
        <div :class="$style.info">
          <div :class="$style.header">
            <h3 :class="$style.title">{{ t(`${index}.title`) }}</h3>
            <span :class="$style.num">{{ `0${index + 1}` }}</span>
          </div>
          <p :class="$style.subtitle">{{ t(`${index}.text`) }}</p>
        </div>
        <div :class="$style.banner">
          <img :src="item.image" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useI18N } from '@/hooks/useI18N';

const { t } = useI18N('home.features.slider');

const slides = computed(() => [
  {
    title: t('title'),
    subtitle: t('subtitle'),
    image: '/src/assets/images/slide.png',
  },
  {
    title: t('title'),
    subtitle: t('subtitle'),
    image: '/src/assets/images/slide.png',
  },
  {
    title: t('title'),
    subtitle: t('subtitle'),
    image: '/src/assets/images/slide.png',
  },
  {
    title: t('title'),
    subtitle: t('subtitle'),
    image: '/src/assets/images/slide.png',
  },
  {
    title: t('title'),
    subtitle: t('subtitle'),
    image: '/src/assets/images/slide.png',
  },
  {
    title: t('title'),
    subtitle: t('subtitle'),
    image: '/src/assets/images/slide.png',
  },
]);

</script>

<style lang="scss" module>
@import '@/assets/scss/utils.scss';

.slider {
  position: relative;
  width: calc(100% + 70px);
  height: 484px;
  margin: 0 -35px;
  padding-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: normal;
  overflow-x: auto;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
}

.slide {
  width: 2362px;
  padding: 0 35px;
  display: flex;
  position: absolute;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
}
.card {
  width: 372px;
  height: 464px;
  display: block;
  border-radius: 15px !important;
  margin-right: 26px;
  overflow: hidden;
  border: 1px solid rgba(67, 67, 67, 0.05);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  .info {
    padding: 32px;
    border-radius: 15px 15px 0 0;
    background: var(--white);
  }
  .header {
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  .title {
    @include t(22, 26, 700);
    margin-bottom: 12px;
  }
  .num {
    position: absolute;
    top: -5px;
    right: 0;
    @include t(32, 38, 700);
    color: var(--gray-3);
  }

  .subtitle {
    width: 100%;
    margin: 0;
  }
  .banner {
    width: 100%;
    padding: 48px 37px;
    @extend %flex-center;
    background-color: var(--gray-3);
    img {
      width: 298px;
      height: auto;
      filter: drop-shadow(0px 15px 30px rgba(0, 0, 0, 0.15));
      border-radius: 15px;
    }
  }
}

@media screen and (max-width: 475px) {
  .slider {
    margin-top: 61px;
  }

  .card {
    .info {
      padding: 29px;
    }
    .banner {
      padding: 44px 34px;
    }
  }
}
</style>
