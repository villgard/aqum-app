<template>
  <Container>
    <a-row :class="$style.resetPassword" justify="center">
      <Card
        titleAlign="center" 
        :title="t('title')"
      >
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

const { t } = useI18N('auth.resetPassword');
</script>

<style lang="scss" module>
  .resetPassword {
    padding: 43px 0 88px 0;
  }
</style>
