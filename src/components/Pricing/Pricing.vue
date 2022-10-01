<template>
  <UnderHeader :title="t('underHeader.title')" :caption="t('underHeader.caption')" :background="false" />
  <Periods :navigation="periods" @select="updatePeriod" :default="period"/>
  <Container>
    <a-row :class="$style.wrapper" :gutter="[24, 40]">
      <a-col :span="12" :class="$style.column"><SelectedPlan /></a-col>
      <a-col :span="12" :class="[$style.column, $style.planList]">
        <Plan v-for="plan in planList"
          :key="plan.value"
          :value="plan.value"
          :title="plan.title"
          :price="plan.price"
          :save="+saveValue || null"
          :mostPopular="plan.mostPopular || false"
          :active="plan.value === selectedPlan"
          @selectPlan="selectPlan"
        />
      </a-col>
    </a-row>

    <div :class="$style.hr" />

    <a-row justify="end">
      <a-button type="primary" shape="round" size="large">
        {{ t('choosePlan') }}
      </a-button>
    </a-row>

    <PaymentSystems />
  </Container>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import Container from '@/components/Common/Container.vue';
import UnderHeader from '@/components/UnderHeader/UnderHeader.vue';
import Periods from './Periods.vue';
import Plan from './Plan.vue';
import SelectedPlan from './SelectedPlan.vue';
import PaymentSystems from './PaymentSystems.vue';
import { useI18N } from '@/hooks/useI18N';
import { type PlanProps } from './index';

const { t } = useI18N('pricing');
const period = ref<number>(6);
const selectedPlan = ref<string>('professional');
const periods = computed(() => [
  {
    label: t('periods.0'),
    value: '1',
  }, {
    label: t('periods.1'),
    value: '3',
  }, {
    label: t('periods.2'),
    value: '6',
  }, {
    label: t('periods.3'),
    value: '12',
  },
]);

const saveValue = computed<number>(() => {
  switch (period.value) {
    case 1:
      return 0;
    case 3:
      return 10;
    case 6:
      return 20;
    case 12:
      return 30;
  }
});
const planList = computed<Array<PlanProps>>(() => [
  {
    value: 'starter',
    title: t('starter'),
    price: '19.99',
  },
  {
    value: 'personal',
    title: t('personal'),
    price: '59.99',
  },
  {
    value: 'team',
    title: t('team'),
    price: '159.99',
  },
  {
    value: 'professional',
    title: t('professional'),
    price: '299.99',
    mostPopular: true,
  },
  {
    value: 'custom',
    title: t('custom'),
    price: '399+',
  }
]);

const updatePeriod = (value) => {
  period.value = +value;
};

const selectPlan = (plan: string) => {
  selectedPlan.value = plan;
}
</script>

<style lang="scss" module>
  .wrapper {
    max-width: 1020px;
    margin: 0 auto !important;

    @media (max-width: 767px) {
      flex-direction: column-reverse;
      gap: 40px;

      .column {
        width: 100%;
        flex: 0 0 100%;
        max-width: 100%;
        padding: 0 !important;
      }
    }
  }

  .planList {
    display: flex;
    flex-direction: column;
    gap: 16px 0;
  }

  .hr {
    width: 100%;
    height: 1px;
    margin: 38px 0 34px 0;
    background: rgba(67, 67, 67, 0.25);
  }
</style>