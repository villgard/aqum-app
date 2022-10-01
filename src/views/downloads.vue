<template>
  <UnderHeader :title="t('underHeader.title')" :caption="t('underHeader.caption')" />
  <Container>
    <Downloads />
  </Container>
</template>

<script lang="ts" setup>
import Container from '@/components/Common/Container.vue';
import UnderHeader from '@/components/UnderHeader/UnderHeader.vue';
import Downloads from '@/components/Downloads/Downloads.vue';
import { useI18N } from '@/hooks/useI18N';

const { t } = useI18N('downloads');
</script>
