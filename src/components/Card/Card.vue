<template>
  <div :class="[$style.card, $style[size]]">
    <div v-if="title" :class="[$style.title, $style[titleAlign]]">{{ title }}</div>
    <div v-if="caption" :class="$style.caption" v-html="caption"></div>
    <slot name="body" />
  </div>
</template>

<script lang="ts" setup>
import { type CardProps, CardSizes, CardTitleAlign } from './index';

const props = withDefaults(defineProps<CardProps>(), {
  size: 'default' as CardSizes,
  titleAlign: 'left' as CardTitleAlign,
});
</script>

<style lang="scss" module>
.card {

}

.title {

}

.caption {

}
</style>
