<template>
  <a-form :class="$style.form" :model="formState" layout="vertical" @validate="ts">
    <a-form-item :label="t('email')" name="email" :rules="[{ type: 'email', message: t('emailType') }, { required: true, message: t('emailRequired') }]">
      <a-input v-model:value="formState.email" />
    </a-form-item>

    <a-form-item :label="t('password')" name="password" :rules="[{ required: true, validator: checkPassword, message: t('passwordCaption') }]">
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

    <a-form-item name="telegram">
      <template #label>
        <div v-html="t('telegram')" :class="$style.label" />
      </template>
      <a-input v-model:value="formState.telegram" />
    </a-form-item>

    <a-form-item>
      <a-button block type="primary" shape="round" size="large" html-type="submit">
        {{ t("button") }}
      </a-button>
    </a-form-item>

    <div :class="$style.else">
      {{ t("footerText") }}
      <router-link to="/login" :class="$style.login">{{ t("footerButton") }}</router-link>
    </div>
  </a-form>
</template>

<script lang="ts" setup>
import { reactive, computed } from 'vue';
import type { UnwrapRef } from 'vue';
import { useI18N } from '@/hooks/useI18N';

interface FormState {
  email: string;
  password: string;
  telegram: string;
};

const { t } = useI18N('auth.signUp.form');
const formState: UnwrapRef<FormState> = reactive({
  email: '',
  password: '',
  telegram: '',
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
}

.label {

  span {
    color: #8C8C8C;
  }
}

.else {
  text-align: center;
  color: #8C8C8C;
}

.login {

}
</style>