<template>
  <div :class="[$style.card, $style[size]]">
    <div v-if="title" :class="[$style.title, $style[titleAlign]]">{{ title }}</div>
    <div v-if="caption" :class="$style.caption" v-html="caption" />
    
    <div v-if="hasCaptionsSlot" :class="$style.caption">
      <slot name="caption" />
    </div>
    <slot name="body" />
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue';
import { type CardProps, CardSizes, CardTitleAlign } from './index';

const slots = useSlots();
const props = withDefaults(defineProps<CardProps>(), {
  size: 'default' as CardSizes,
  titleAlign: 'left' as CardTitleAlign,
});
const hasCaptionsSlot = computed<Boolean>(() => !!slots['caption']);
</script>

<style lang="scss" module>
.card {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 15px;

  &.default {
    padding: 36px 44px 63px 44px;

    @media (min-width: 768px) {
      width: 100%;
      max-width: 498px;
    }
  }
}

.title {
  margin: 0 0 13px 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #434343;

  &.center {
    text-align: center;
  }

  &.right {
    text-align: right;
  }
}

.caption {
  padding: 0 10px;
  margin: 0 0 24px 0;
  color: #8C8C8C;
  text-align: center;
}
</style>
