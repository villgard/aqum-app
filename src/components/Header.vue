<template>
  <a-layout-header :class="[$style.header, isMainPage && $style.half]">
    <Container>
      <a-row :gutter="[0, 16]">
        <a-col :span="4">
          <Logo :class="$style.logo" />
        </a-col>
        <a-col :span="14" :class="$style.isDesktop">
          <a-row justify="center" :class="$style.menu">
            <a-col>
              <Menu />
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="6" :class="$style.isDesktop">
          <a-row justify="end" align="middle" :class="$style.tools">
            <LanguageSelector mode="horizontal" />
            <router-link to="registration">
              <a-button shape="round">
                {{ t('button') }}
              </a-button>
            </router-link>
          </a-row>
        </a-col>
        <div :class="$style.burger" @click="() => (openMmenu = !openMmenu)">
          <CloseOutlined v-show="openMmenu" />
          <Burger v-show="!openMmenu" :class="$style.burger" />
        </div>
      </a-row>
    </Container>

    <Mmenu v-show="openMmenu" />
  </a-layout-header>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { CloseOutlined } from '@ant-design/icons-vue';
import Container from '@/components/Common/Container.vue';
import Logo from '@/components/Logo.vue';
import Menu from '@/components/Menu.vue';
import LanguageSelector from '@/components/LanguageSelector.vue';
import Mmenu from '@/components/Mmenu.vue';
import Burger from '@/components/Icons/Burger.vue';
import { useI18N } from '@/hooks/useI18N';

const route = useRoute();
const isMainPage = computed(() => route.name === 'index');
const openMmenu = ref<boolean>(false);

const { t } = useI18N('header');
</script>

<style lang="scss" module>
@import '@/assets/scss/typography.scss';

@media (max-width: 1023px) {
  .isDesktop {
    display: none !important;
  }

  .logo {
    width: 87px;
    height: 34px;
    display: block;

    img {
      display: block;
    }
  }
}

.burger {
  @media (min-width: 1024px) {
    display: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 0 auto auto;
  font-size: 15px;
}

.header {
  background: transparent !important;

  @media (min-width: 1024px) {
    height: 68px;
  }

  @media (max-width: 1023px) {
    height: 65px;
    padding: 16px 0 12px 0 !important;
  }

  :global {
    .ant-menu {
      background: transparent;
    }
  }
  .menu {
    position: relative;
    z-index: 15;
  }
}

.tools {
  position: relative;
  z-index: 15;
  gap: 0 6px;
}
</style>
