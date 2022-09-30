<template>
  <Container>
    <a-row :class="$style.signUp" justify="center">
      <Card
        titleAlign="center" 
        :title="t('title')"
        :caption="t('caption', {
          terms: '/terms',
          privacy: '/privacy',
        })">
        <template #body>
          <Form />
        </template>
      </Card>
    </a-row>
  </Container>
</template>

<script lang="ts" setup>
import Container from '@/components/Common/Container.vue';
import Card from '@/components/Card/Card.vue';
import Form from './Form.vue';
import { useI18N } from '@/hooks/useI18N';

const { t } = useI18N('auth.signUp');
</script>

<style lang="scss" module>
  .signUp {
    padding: 43px 0 88px 0;
  }
</style>
