<template>
  <a-menu :selectedKeys="null" :mode="mode || 'inline'" :class="[$style.languageSelector, !mode && $style.fullSize]">
    <a-sub-menu>
      <template #title>
        {{ localeObject.label }}
      </template>
      <a-menu-item v-for="item in localeObjects" :key="item.key" @click="updateLanguage(item.key)">
        {{ item.label }}
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script lang="ts" setup>
import { localeObjects } from '@/utils';
import { useI18N } from '@/hooks/useI18N';

const { setLocale, localeObject } = useI18N();
const props = defineProps(['mode']);

function updateLanguage(key: string) {
  setLocale(key);
}
</script>

<style lang="scss" module>
.languageSelector {
  flex-shrink: 0;
  border: none !important;

  &:not(.fullSize) {
    width: 68px;
  }
}
</style>