<template>
  <Container>
    <a-row :class="$style.payment" justify="center">
      <Card
        titleAlign="center" 
        :title="t('title')"
        :caption="t('caption')"
      >
        <template #body>
          <CheckOutlined :class="$style.icon"/>
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
import { CheckOutlined } from '@ant-design/icons-vue';
import { useI18N } from '@/hooks/useI18N';

const { t } = useI18N('payment.success');
</script>

<style lang="scss" module>
  .payment {
    @media (min-width: 1024px) {
      padding: 43px 0 88px 0;
    }

    @media (max-width: 1023px) {
      padding: 28px 0 64px 0;
    }
  }

  .icon {
    display: block;
    margin: 28px 0 48px 0;
    font-size: 54px;
    color: #508FF8;
  }

  .button {
    display: block;
    margin: 0 0 -30px 0;
  }
</style>
