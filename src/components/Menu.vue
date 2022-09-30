<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal" :class="$style.menu">
    <template v-for="(item, index) in menu">
      <a-menu-item v-if="!item.submenu" :key="index">
        <router-link :to="item.to">
          {{ item.label }}
        </router-link>
      </a-menu-item>
      <a-sub-menu v-if="item.submenu" :key="index" :class="$style.submenu">
        <template #title>
          {{ item.label }}
        </template>
        <a-menu-item v-for="(subItem, subIndex) in item.submenu" :key="`sub${index}` + subIndex">
          <router-link :to="subItem.to">
            {{ subItem.label }}
          </router-link>
        </a-menu-item>
      </a-sub-menu>
    </template>
  </a-menu>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18N } from '@/hooks/useI18N';

const { t } = useI18N('menu');
const current = ref<void>(null);

interface MenuItem {
  label: string;
  to?: string;
  submenu?: MenuItem[];
}

const menu = computed(
  (): Array<MenuItem> => [
    {
      label: t('home'),
      to: '/',
    },
    {
      label: t('pricing'),
      to: '/pricing',
    },
    {
      label: t('download'),
      to: '/downloads',
    },
    {
      label: t('help'),
      submenu: [
        {
          label: t('faq'),
          to: '/faq',
        },
        {
          label: t('support'),
          to: '/support',
        },
      ],
    },
  ],
);
</script>

<style lang="scss" module>
@import 'src/assets/scss/utils.scss';

.menu {
  border: none !important;
  gap: 0 25px;
}
.submenu {
  :global {
    .ant-menu-submenu-arrow {
      display: block !important;
      transform: translate(100%, -50%) rotate(90deg);
      right: -6px;
    }
  }
}

:global {
  .ant-menu-submenu-open,
  .ant-menu-submenu-active {
    * {
      color: var(--primary-color) !important;
    }
  }
}
</style>
