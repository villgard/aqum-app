<template>
  <Container>
    <a-row :class="$style.confirmAccount" justify="center">
      <Card
        titleAlign="center" 
        :title="t('title')"
      >
        <template #caption>
          {{ t("caption") }}
          <a @click="resend">{{ t("resend") }}</a>
        </template>
        <template #body>
          <router-link to="/">
            <a-button block type="primary" shape="round" size="large" :class="$style.button">
              {{ t("button") }}
            </a-button>
          </router-link>

          <div :class="$style.else" v-html="t('footerText', { link: '/' })" />
        </template>
      </Card>
    </a-row>
  </Container>
</template>

<script lang="ts" setup>
import Container from '@/components/Common/Container.vue';
import Card from '@/components/Card/Card.vue';
import { useI18N } from '@/hooks/useI18N';

const { t } = useI18N('auth.confirmAccount');

const resend = () => {
  console.log('resend');
}
</script>

<style lang="scss" module>
  .confirmAccount {
    padding: 43px 0 88px 0;
  }

  .button {
    margin: 70px 0 30px 0;
  }

  .else {
    text-align: center;
    color: #8C8C8C;
  }
</style>
