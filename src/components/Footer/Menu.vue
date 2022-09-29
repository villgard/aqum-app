<template>
  <div :class="$style.footerMenu">
    <List v-for="(list, key) in lists" :key="key" :title="t(`list.title.${key}`)" :list="list" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import List from '@/components/Footer/List.vue';
import { useI18N } from '@/hooks/useI18N';

const { t } = useI18N('footer');

interface MenuItem {
  label: string;
  to: string;
}

interface MenuItems {
  [key: string]: MenuItem[];
}

const lists = computed(
  (): MenuItems => ({
    product: [
      {
        label: t('list.product.pricing'),
        to: 'index',
      },
      {
        label: t('list.product.download'),
        to: 'index',
      },
    ],
    reference: [
      {
        label: t('list.reference.support'),
        to: 'index',
      },
      {
        label: t('list.reference.api'),
        to: 'index',
      },
      {
        label: t('list.reference.help'),
        to: 'index',
      },
    ],
    download: [
      {
        label: t('list.download.win'),
        to: 'index',
      },
      {
        label: t('list.download.mac'),
        to: 'index',
      },
      {
        label: t('list.download.macM'),
        to: 'index',
      },
    ],
    legal: [
      {
        label: t('list.legal.terms'),
        to: 'index',
      },
      {
        label: t('list.legal.agree'),
        to: 'index',
      },
      {
        label: t('list.legal.privacy'),
        to: 'index',
      },
    ],
  }),
);
</script>

<style lang="scss" module>
.footerMenu {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 550px;
  padding: 15px 20px 0 20px;
}
</style>
