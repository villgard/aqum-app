<template>
<div class="footer__content-links">
  <List :title="t('footer.list.title.product')" :list="productList"/>
  <List :title="t('footer.list.title.reference')" :list="referenceList"/>
  <List :title="t('footer.list.title.download')" :list="downloadList"/>
  <List :title="t('footer.list.title.legal')" :list="legalList"/>
</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import {computed} from "vue";

const { t } = useI18n();

const productList = computed(() => [
  {
    label: t('footer.list.product.pricing'),
    to: 'index',
  },
  {
    label: t('footer.list.product.download'),
    to: 'index',
  },
]);

const referenceList = computed(() => [
  {
    label: t('footer.list.reference.support'),
    to: 'index',
  },
  {
    label: t('footer.list.reference.api'),
    to: 'index',
  },
  {
    label: t('footer.list.reference.help'),
    to: 'index',
  },
]);

const downloadList = computed(() => [
  {
    label: t('footer.list.download.win'),
    to: 'index',
  },
  {
    label: t('footer.list.download.mac'),
    to: 'index',
  },
  {
    label: t('footer.list.download.macM'),
    to: 'index',
  },
]);

const legalList = computed(() => [
  {
    label: t('footer.list.legal.terms'),
    to: 'index',
  },
  {
    label: t('footer.list.legal.agree'),
    to: 'index',
  },
  {
    label: t('footer.list.legal.privacy'),
    to: 'index',
  },
])
</script>

<style lang="scss">
@import "/src/assets/scss/utils.scss";

.footer__content-links {
  max-width: 550px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

</style>