<template>
  <UnderHeader :title="t('title')" :caption="t('subtitle')" :background="true" :class="$style.heading"/>
  <Container>
    <FAQTabs />
  </Container>
</template>

<script lang="ts" setup>
import FAQTabs from '@/components/FAQ/Tabs.vue';
import {useI18N} from "@/hooks/useI18N";

const { t } = useI18N('faq');
</script>

<style lang="scss" module>
.heading {
  margin-bottom: 60px;
}

@media screen and (max-width: 992px) {
  .heading {
    margin-bottom: 50px;
  }
}
@media screen and (max-width: 450px) {
  .heading {
    margin-bottom: 32px;
  }
}
</style>