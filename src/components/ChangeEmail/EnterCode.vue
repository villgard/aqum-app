<template>
  <a-form :class="$style.form" :model="formState" layout="vertical">
    <a-form-item :label="t('codeFormLetter')" name="code" :rules="[{ required: true, message: t('codeRequired') }]">
      <a-input v-model:value="formState.code" />
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
  code: string;
};

const { t } = useI18N('account.form');
const formState: UnwrapRef<FormState> = reactive({
  code: '',
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