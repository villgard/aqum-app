<template>
  <a-form :class="$style.form" :model="formState" layout="vertical">
    <a-form-item :label="t('newPassword')" name="password" :rules="[{ required: true, validator: checkPassword, message: t('passwordCaption') }]">
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

    <a-form-item :label="t('repeatPassword')" name="repeatPassword" :rules="[{ required: true, validator: checkPassword, message: t('passwordCaption') }, { validator: isEqual, message: t('repeatPasswordError')}]">
      <a-input-password v-model:value="formState.repeatPassword" />
    </a-form-item>

    <a-form-item>
      <a-button block type="primary" shape="round" size="large" html-type="submit">
        {{ t("button") }}
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import type { UnwrapRef } from 'vue';
import { useI18N } from '@/hooks/useI18N';

interface FormState {
  password: string;
  repeatPassword: string;
};

const { t } = useI18N('account.form');
const formState: UnwrapRef<FormState> = reactive({
  password: '',
  repeatPassword: '',
});

const checkPassword = (_: any, value) => {
  if(/[a-z]+/.test(value) && /[A-Z]+/.test(value) && /\d+/.test(value) && value.length >= 6) {
    return Promise.resolve();
  }

  return Promise.reject();
};

const isEqual = (_: any, value) => {
  if (value === formState.password) {
    return Promise.resolve();
  }

  return Promise.reject();
};
</script>

<style lang="scss" module>
.form {
  width: 100%;
  @media (min-width: 1024px) {
    margin: 29px 0 -45px 0;
  }

  @media (max-width: 1023px) {
    margin: 26px 0 0 0;
  }
}

.label {

  span {
    color: #8C8C8C;
  }
}
</style>