<template>
  <a-form :class="$style.form" :model="formState" layout="vertical">
    <a-form-item :label="t('form.select')" name="payment">
      <a-select v-model:value="formState.payment">
        <a-select-option value="bitcoin" label="bitcoin">
          <span role="img" aria-label="bitcoin"><Bitcoin /></span>
          BTC
        </a-select-option>
      </a-select>
    </a-form-item>
    <div :class="$style.options">
      <div :class="$style.optionsItem">
        <div>{{ t('user') }}</div>
        <div :class="$style.optionsValue">Example@gmail.com</div>
      </div>

      <div :class="$style.optionsItem">
        <div>{{ t('subscription') }}</div>
        <div :class="$style.optionsValue">Starter</div>
      </div>

      <div :class="$style.optionsItem">
        <div>{{ t('period') }}</div>
        <div :class="$style.optionsValue">3 Months</div>
      </div>

      <div :class="$style.optionsItem">
        <div>{{ t('amount') }}</div>
        <div :class="$style.optionsValue">€235.00</div>
      </div>
    </div>
    <a-form-item>
      <a-button block type="primary" shape="round" size="large" html-type="submit">
        {{ t("form.button") }}
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import Bitcoin from '../Icons/Payment/Bitcoin.vue';
import type { UnwrapRef } from 'vue';
import { useI18N } from '@/hooks/useI18N';

interface FormState {
  payment: string;
};

const { t } = useI18N('payment.payment');
const formState: UnwrapRef<FormState> = reactive({
  payment: 'bitcoin',
});

const checkPassword = (_: any, value) => {
  if(/[a-z]+/.test(value) && /[A-Z]+/.test(value) && /\d+/.test(value) && value.length >= 6) {
    return Promise.resolve();
  }

  return Promise.reject();
};
</script>

<style lang="scss" module>
.form {
  width: 100%;
  margin: 29px 0 -45px 0;
}

.label {

  span {
    color: #8C8C8C;
  }
}

.options {
  display: flex;
  flex-direction: column;
  margin: 28px 0;
  gap: 22px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #434343;
}

.optionsItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.optionsValue {
  text-align: right;
  color: #595959;
}
</style>