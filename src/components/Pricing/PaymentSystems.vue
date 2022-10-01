<template>
  <div :class="$style.title">{{ t('paymentsTitle') }}</div>
  <div :class="$style.list">
    <Visa />
    <MasterCard />
    <GooglePay />
    <ApplePay />
    <Bitcoin />
    <Tether />
    <Ethereum />
    <Litecoin />
  </div>
</template>

<script lang="ts" setup>
import Visa from '@/components/Icons/Visa.vue';
import MasterCard from '@/components/Icons/MasterCard.vue';
import GooglePay from '@/components/Icons/GooglePay.vue';
import ApplePay from '@/components/Icons/ApplePay.vue';
import Bitcoin from '@/components/Icons/Bitcoin.vue';
import Tether from '@/components/Icons/Tether.vue';
import Ethereum from '@/components/Icons/Ethereum.vue';
import Litecoin from '@/components/Icons/Litecoin.vue';
import { useI18N } from '@/hooks/useI18N';

const { t } = useI18N('pricing');
</script>

<style lang="scss" module>
  .title {
    text-align: center;

    @media (min-width: 1024px) {
      margin: 81px 0 64px 0;
    }

    @media (max-width: 1023px) and (min-width: 768px) {
      margin: 64px 0 34px 0;
    }

    @media (max-width: 767px) {
      margin: 81px 0 24px 0;
    }
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 48px 72px;
    margin: 0 0 62px 0;
  }
</style>