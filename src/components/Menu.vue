<template>
  <nav class="header__menu">
    <ul class="header__menu-list">
      <li v-for="item in menu" :key="item.label" class="header__menu-item">
        <RouterLink v-if="item.to" :to="{ name: item.to }" class="header__menu-link">{{ item.label }}</RouterLink>
        <a-dropdown v-else :trigger="['click']">
          <a class="header__menu-link" @click.prevent>
            {{ item.label }}
            <DownOutlined width="8" height="4" />
          </a>
          <template #overlay>
            <a-menu class="header__menu-submenu submenu">
              <a-menu-item v-for="item in subMenu" :key="item.label" class="submenu__item">
                  <RouterLink :to="{ name: item.to }" class="submenu__link">{{ item.label }}</RouterLink>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { DownOutlined } from '@ant-design/icons-vue';
import { computed } from "vue";

const { t } = useI18n();

const menu = computed(() => [
  {
    label: t('menu.home'),
    to: 'index',
  },
  {
    label: t('menu.pricing'),
    to: 'pricing',
  },
  {
    label: t('menu.download'),
    to: 'download',
  },
  {
    label: t('menu.help'),
  },
]);

const subMenu = computed(() => [
  {
    label: t('menu.faq'),
    to: 'faq',
  },
  {
    label: t('menu.support'),
    to: 'support',
  },
]);

</script>

<style lang="scss">
@import "src/assets/scss/utils.scss";
.header__menu {
  max-width: 442px;
  width: 100%;
  height: 100%;
  &-list {
    height: 100%;
    margin: 0;
    @extend %flex-space-between;
  }
  &-item {
  }
  &-link {
    font-family: 'Gotham Book', sans-serif;
    @include menu-link();
    color: var(--dark-2);
    cursor: pointer;
  }
}
.submenu {
  box-shadow: none !important;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 5px;
}
</style>