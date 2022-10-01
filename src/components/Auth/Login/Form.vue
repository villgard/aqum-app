<template>
  <a-form :class="$style.form" :model="formState" layout="vertical">
    <a-form-item :label="t('form.email')" name="email" :rules="[{ type: 'email', message: t('form.emailType') }, { required: true, message: t('form.emailRequired') }]">
      <a-input v-model:value="formState.email" />
    </a-form-item>

    <a-form-item :label="t('form.password')" name="password" :rules="[{ required: true, validator: checkPassword, message: t('form.passwordCaption') }]">
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

    <a-form-item>
      <a-button block type="primary" shape="round" size="large" html-type="submit">
        {{ t("login.form.button") }}
      </a-button>
    </a-form-item>

    <div :class="$style.footer">
      <router-link to="/registration" :class="$style.signUp">{{ t("login.signUp") }}</router-link>
      <router-link to="/recover-password">{{ t("login.recoverPassword") }}</router-link>
    </div>
  </a-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import type { UnwrapRef } from 'vue';
import { useI18N } from '@/hooks/useI18N';

interface FormState {
  email: string;
  password: string;
};

const { t } = useI18N('auth');
const formState: UnwrapRef<FormState> = reactive({
  email: '',
  password: '',
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
  margin: 29px 0 0 0;
}

.label {

  span {
    color: #8C8C8C;
  }
}

.footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
}

.signUp {
  color: #8C8C8C;
}
</style>