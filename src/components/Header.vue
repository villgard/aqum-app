<template>
  <a-layout-header>
    <Container>
      <a-row :gutter="[0, 16]">
        <a-col :span="6">
          <Logo />
        </a-col>
        <a-col :span="12">
          <a-row justify="center">
            <a-col>
              <Menu />
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="6">
          <a-row gap="26" justify="end" align="middle" :class="$style.tools">
            <LanguageSelector />
            <a-button shape="round">
              {{ t('button') }}
            </a-button>
          </a-row>
        </a-col>
      </a-row>
    </Container>
  </a-layout-header>
</template>

<script setup>
import Container from '@/components/Common/Container.vue';
import Logo from '@/components/Logo.vue';
import Menu from '@/components/Menu.vue';
import LanguageSelector from '@/components/LanguageSelector.vue';
import { useI18N } from '@/hooks/useI18N';

const { t } = useI18N('header');
</script>

<style lang="scss" module>
@import 'src/assets/scss/utils.scss';

.header {
  height: 68px;
  background: var(--white);
  &__content {
    height: 100%;
    @extend %flex-space-between;
  }
}

.tools {
  gap: 0 6px;
}
</style>
