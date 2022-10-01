<template>
  <div :class="$style.mmenu">
    <router-link to="registration">
      <a-button shape="round" block>
        {{ t('header.button') }}
      </a-button>
    </router-link>
    <a-menu v-model:selectedKeys="current" mode="inline" :class="$style.menu">
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
    <LanguageSelector />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18N } from '@/hooks/useI18N';

const { t } = useI18N();
const current = ref<void>(null);

interface MenuItem {
  label: string;
  to?: string;
  submenu?: MenuItem[];
}

const menu = computed(
  (): Array<MenuItem> => [
    {
      label: t('menu.home'),
      to: '/',
    },
    {
      label: t('menu.pricing'),
      to: '/pricing',
    },
    {
      label: t('menu.download'),
      to: '/downloads',
    },
    {
      label: t('menu.help'),
      submenu: [
        {
          label: t('menu.faq'),
          to: '/faq',
        },
        {
          label: t('menu.support'),
          to: '/support',
        },
      ],
    },
  ],
);
</script>

<style lang="scss" module>
@import 'src/assets/scss/utils.scss';

.mmenu {
  z-index: 10;
  position: absolute;
  top: 65px;
  right: 0;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  @media (max-width: 1023px) and (min-width: 768px) {
    width: 290px;
    padding: 24px;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 16px;
  }
}

.menu {
  border: none !important;
  gap: 0 25px;
}

:global {
  .ant-menu-item,
  .ant-menu-submenu-title {
    padding: 0 !important;
  }

  .ant-menu-submenu-open,
  .ant-menu-submenu-active {
    * {
      color: var(--primary-color) !important;
    }
  }
}
</style>
