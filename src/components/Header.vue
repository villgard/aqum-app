<template>
  <a-layout-header :class="[$style.header, isMainPage && $style.half]">
    <Container>
      <a-row :gutter="[0, 16]">
        <a-col :span="4">
          <Logo />
        </a-col>
        <a-col :span="14">
          <a-row justify="center" :class="$style.menu">
            <a-col>
              <Menu />
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="6">
          <a-row justify="end" align="middle" :class="$style.tools">
            <LanguageSelector />
            <router-link to="registration">
              <a-button shape="round">
                {{ t('button') }}
              </a-button>
            </router-link>
          </a-row>
        </a-col>
      </a-row>
    </Container>
  </a-layout-header>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import Container from '@/components/Common/Container.vue';
import Logo from '@/components/Logo.vue';
import Menu from '@/components/Menu.vue';
import LanguageSelector from '@/components/LanguageSelector.vue';
import { useI18N } from '@/hooks/useI18N';

const route = useRoute();
const isMainPage = computed(() => route.name === 'index');

const { t } = useI18N('header');
</script>

<style lang="scss" module>
@import '@/assets/scss/typography.scss';

.header {
  height: 68px;
  background: transparent !important;

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
