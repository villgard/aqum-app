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
        to: '/pricing',
      },
      {
        label: t('list.product.download'),
        to: '/downloads',
      },
    ],
    reference: [
      {
        label: t('list.reference.support'),
        to: '/',
      },
      {
        label: t('list.reference.api'),
        to: '/',
      },
      {
        label: t('list.reference.help'),
        to: '/',
      },
    ],
    download: [
      {
        label: t('list.download.win'),
        to: '/downloads',
      },
      {
        label: t('list.download.mac'),
        to: '/downloads',
      },
      {
        label: t('list.download.macM'),
        to: '/downloads',
      },
    ],
    legal: [
      {
        label: t('list.legal.terms'),
        to: '/documents/terms-of-service',
      },
      {
        label: t('list.legal.agree'),
        to: '/documents/user-agreement',
      },
      {
        label: t('list.legal.privacy'),
        to: '/documents/privacy-policy',
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
  
  @media (min-width: 768px) {
    padding: 15px 20px 0 20px;
  }

  @media (max-width: 767px) {
    padding: 32px 0 0 0;
    flex-wrap: wrap;
    gap: 48px;
  }
}
</style>
