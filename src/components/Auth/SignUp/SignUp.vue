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
    @media (min-width: 1024px) {
      padding: 43px 0 88px 0;
    }

    @media (max-width: 1023px) {
      padding: 28px 0 64px 0;
    }
  }
</style>
