<template>
  <Swiper :class="$style.swiper" :options="options" :modules="modules" @swiper="onSwiper" @slideChange="onSlideChange">
    <SwiperSlide v-for="(item, index) in slides" :key="index">
      <div :class="$style.card">
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
    </SwiperSlide>
    <div class="pagination"></div>
  </Swiper>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Swiper as SwiperClass, SwiperOptions } from 'swiper';
import { computed, ref } from 'vue';
import { useI18N } from '@/hooks/useI18N';

const { t } = useI18N('home.features.slider');

let swiper: SwiperClass = null;
const modules = [Pagination];
const index = ref<number>(0);

const options: SwiperOptions = {
  initialSlide: 1,
  slidesPerView: 1,
  slidesPerGroup: 2.5,
  watchSlidesProgress: true,
  grabCursor: true,
  pagination: {
    el: '.pagination',
  },
};

const slides = computed(() => [
  {
    title: t('title'),
    subtitle: t('subtitle'),
    image: '/src/assets/images/slide.webp',
  },
  {
    title: t('title'),
    subtitle: t('subtitle'),
    image: '/src/assets/images/slide.webp',
  },
  {
    title: t('title'),
    subtitle: t('subtitle'),
    image: '/src/assets/images/slide.webp',
  },
  {
    title: t('title'),
    subtitle: t('subtitle'),
    image: '/src/assets/images/slide.webp',
  },
  {
    title: t('title'),
    subtitle: t('subtitle'),
    image: '/src/assets/images/slide.webp',
  },
  {
    title: t('title'),
    subtitle: t('subtitle'),
    image: '/src/assets/images/slide.webp',
  },
]);

function onSwiper(swiperInstance: SwiperClass) {
  swiper = swiperInstance;
}

function onSlideChange() {
  index.value = swiper.activeIndex;
}
</script>

<style lang="scss" module>
@import '@/assets/scss/utils.scss';

.swiper {
  padding: 41px 0;
  overflow: hidden;
  margin: auto;
  :global {
    .swiper-wrapper {
      display: flex;
      justify-content: space-between;
      max-width: 2362px;
    }
  }
}
.card {
  width: 372px;
  height: 464px;
  display: block;
  border-radius: 15px;
  margin-right: 26px;
  overflow: hidden;
  border: 1px solid rgba(67, 67, 67, 0.05);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  .info {
    padding: 32px;

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
    }
  }
}
</style>
