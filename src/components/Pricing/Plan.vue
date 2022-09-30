<template>
  <div :class="[$style.plan, active && $style.active]" @click="selectPlan">
    <div :class="$style.check"><IconCheck /></div>
    <div :class="$style.head">
      <div :class="$style.headInfo">
        <div :class="$style.title">{{ title }}</div>
        <div v-if="save" :class="$style.label">{{ t('saveTo') }} {{ save }}%</div>
      </div>

      <div :class="$style.headCost">
        <div :class="$style.price">€{{ price }}<span :class="$style.month">\{{ t('month') }}</span></div>
        <div v-if="mostPopular" :class="[$style.label, $style.popular]">{{ t('mostPopularLabel') }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue';
import IconCheck from '@/components/Icons/Check.vue';
import { useI18N } from '~/src/hooks/useI18N';
import { type PlanProps } from './index';

const { t } = useI18N('pricing');
const emit = defineEmits<{
  (e: 'select-plan', plan: string): void;
}>();
const props = defineProps<PlanProps>();

const selectPlan = () => {
  console.log(props);
  
  emit('select-plan', props.value);
}
</script>

<style lang="scss" module>
  .plan {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 21px 16px 20px 38px;
    height: 111px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    cursor: pointer;
    
    &:not(.active) {
      color: #434343;
      background: #fff;
    }

    &.active {
      color: #fff;
      background: #508FF8;

      .label {
        color: #595959;
      }

      .check {
        border-color: #fff;
      }
    }
  }

  .head {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .headInfo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 13px 0;
  }

  .title {
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
  }

  .label {
    display: inline-block;
    height: 26px;
    padding: 4px 21px;
    background: #F5F5F5;
    border-radius: 13px;
    font-size: 14px;
    line-height: 18px;
    color: #508FF8;
    text-align: center;
  }

  .price {
    display: flex;
    align-items: flex-end;
    margin: -6px 0 0 0;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    text-align: right;
  }

  .month {
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
  }

  .check {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin: 0 31px 0 0;
    width: 24px;
    height: 24px;
    border: 1px solid #8C8C8C;
    border-radius: 24px;
  }

  .headCost {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px 0;
  }
</style>