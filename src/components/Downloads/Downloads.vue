<template>
  <div :class="$style.cards">
    <Card
      :title="t('windows.title')"
      :version="t('windows.version')"
      icon="windows"
      :info="t('windows.caption')"
      :button="{
        label: t('windows.button'),
        to: '/',
      }"
    />

    <Card
      :title="t('mac.title')"
      :version="t('mac.version')"
      icon="mac"
      :info="t('mac.caption')"
      :button="{
        label: t('mac.button'),
        to: '/',
      }"
      :buttonSecondary="{
        label: t('mac.buttonSecondary'),
        to: '/',
      }"
    />
  </div>
</template>

<script lang="ts" setup>
import Card from './Card.vue';
import { useI18N } from '@/hooks/useI18N';

const { t } = useI18N('downloads');
</script>

<style lang="scss" module>
  .cards {
    display: flex;
    justify-content: center;
    gap: 24px;
    padding: 66px 0 24px 0;
  }
</style>