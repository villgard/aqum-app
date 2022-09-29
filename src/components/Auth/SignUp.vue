<template>
  <a-row :class="$style">
    <Card :title="title" titleAlign="center" :caption="caption" />
  </a-row>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import Card from '@/components/Card/Card.vue';
import { useI18N } from '@/hooks/useI18N';

const { t } = useI18N('auth.signUp');
const title = computed<string>(() => t('title'));
const caption = computed<string>(() =>
  t('caption', {
    terms: '/terms',
    privacy: '/privacy',
  }),
);
</script>

<style lang="scss" module></style>
