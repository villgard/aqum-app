<template>
  <UnderHeader :title="t('underHeader.title')" :caption="t('underHeader.caption')"/>
  <Navigation />
</template>

<script lang="ts" setup>
import UnderHeader from '@/components/UnderHeader/UnderHeader.vue';
import Navigation from './Navigation.vue';
import { useI18N } from '@/hooks/useI18N';

const { t } = useI18N('documents');
</script>