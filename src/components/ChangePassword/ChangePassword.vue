<template>
  <Container>
    <a-row :class="$style.changePassword" justify="center">
      <Card
        titleAlign="center" 
        :title="title"
        :caption="caption"
      >
        <template #body>
          <EnterCurrentPassword v-if="step === 0" />
          <EnterNewPassword v-else />
        </template>
      </Card>
    </a-row>
  </Container>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import Container from '@/components/Common/Container.vue';
import Card from '@/components/Card/Card.vue';
import EnterCurrentPassword from './EnterCurrentPassword.vue';
import EnterNewPassword from './EnterNewPassword.vue';
import { useI18N } from '@/hooks/useI18N';

const { t } = useI18N('account');
const step = ref<number>(0);
const title = computed(() => step.value === 0 ? t('enterCurrentPassword.title') : t('enterNewPassword.title'));
const caption = computed((): string => step.value === 0 ? t('enterCurrentPassword.caption') : null);

onMounted(() => {
  setTimeout(() => {
    step.value = 1;
  }, 2000);
});
</script>

<style lang="scss" module>
  .changePassword {
    @media (min-width: 1024px) {
      padding: 43px 0 88px 0;
    }

    @media (max-width: 1023px) {
      padding: 28px 0 64px 0;
    }
  }
</style>
