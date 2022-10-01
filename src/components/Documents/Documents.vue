<template>
  <UnderHeader :title="t('underHeader.title')" :caption="t('underHeader.caption')"/>
  <Navigation :navigation="navigation" />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import UnderHeader from '@/components/UnderHeader/UnderHeader.vue';
import Navigation from '@/components/Common/NavigationInline.vue';
import { useI18N } from '@/hooks/useI18N';

const { t } = useI18N('documents');

const navigation = computed(() => [
  {
    label: t('navigation.0'),
    to: '/documents/terms-of-service',
  },
  {
    label: t('navigation.1'),
    to: '/documents/user-agreement',
  },
  {
    label: t('navigation.2'),
    to: '/documents/privacy-policy',
  },
])
</script>