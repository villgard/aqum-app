<template>
  <Container>
    <a-row :class="$style.recoverConfirm" justify="center">
      <Card
        titleAlign="center" 
        :title="t('title')"
      >
        <template #caption>
          {{ t("caption") }}
          <a @click="resend">{{ t("resend") }}</a>
        </template>
        <template #body>
          <router-link to="/" :class="$style.button">
            <a-button block type="primary" shape="round" size="large">
              {{ t("button") }}
            </a-button>
          </router-link>
        </template>
      </Card>
    </a-row>
  </Container>
</template>

<script lang="ts" setup>
import Container from '@/components/Common/Container.vue';
import Card from '@/components/Card/Card.vue';
import { useI18N } from '@/hooks/useI18N';

const { t } = useI18N('auth.recoverConfirm');
</script>

<style lang="scss" module>
  .recoverConfirm {
    padding: 43px 0 88px 0
  }

  .button {
    display: block;
    margin: 70px 0 -23px 0;
  }
</style>
