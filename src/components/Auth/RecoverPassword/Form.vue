<template>
  <a-form :class="$style.form" :model="formState" layout="vertical">
    <a-form-item :label="t('form.email')" name="email" :rules="[{ type: 'email', message: t('form.emailType') }, { required: true, message: t('form.emailRequired') }]">
      <a-input v-model:value="formState.email" />
    </a-form-item>

    <a-form-item>
      <a-button block type="primary" shape="round" size="large" html-type="submit">
        {{ t("recoverPassword.form.button") }}
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import type { UnwrapRef } from 'vue';
import { useI18N } from '@/hooks/useI18N';

interface FormState {
  email: string;
};

const { t } = useI18N('auth');
const formState: UnwrapRef<FormState> = reactive({
  email: '',
});
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
</style>