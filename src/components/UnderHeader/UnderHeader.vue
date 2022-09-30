<template>
  <div :class="[$style.underHeader, background && $style.withBackground]">
    <div v-if="image" :class="$style.background">
      <img :src="image" :class="$style.image" />
    </div>

    <Container :class="$style.container">
      <div :class="$style.title">{{ title }}</div>
      <div v-if="caption" :class="$style.caption">{{ caption }}</div>
    </Container>
  </div>
</template>

<script lang="ts" setup>
import Container from '@/components/Common/Container.vue';
import { type UnderHeaderProps } from './index';

const props = withDefaults(defineProps<UnderHeaderProps>(), {
  background: true,
});
</script>

<style lang="scss" module>
@import '@/assets/scss/typography.scss';

.underHeader {
  position: relative;
  min-height: 210px;
  padding: 50px 0 56px 0;

  &.withBackground {
    background-color: #F5F5F5;
  }
}

.background {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.container {
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100%;
  text-align: center;
}

.title {
  margin: 0 0 12px 0;
  @include h1-sec();
  color: #434343;
}

.caption {
  max-width: 452px;
}

</style>