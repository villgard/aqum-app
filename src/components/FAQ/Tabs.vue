<template>
  <a-tabs tab-position="right" size="large" :class="$style.tabs">
    <a-tab-pane key="1" :class="$style.tab">
      <template #tab>General</template>
      <TabContent />
    </a-tab-pane>
    <a-tab-pane key="2">
      <template #tab> Custom </template>
      <TabContent />
    </a-tab-pane>
    <a-tab-pane key="3" tab="Safety">
      <TabContent />
    </a-tab-pane>
    <a-tab-pane key="4" tab="Other">
      <TabContent />
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts" setup>
import TabContent from './TabContent.vue';
</script>

<style lang="scss" module>
@import '@/assets/scss/utils.scss';
.tabs {
}
:global(.ant-tabs-right > .ant-tabs-nav) {
  order: 0;
  border-left: 1px solid var(--grey);
}

.tabs {
  .tab {
    .ant-tabs-tab.ant-tabs-tab-active {
      border-left: 1px solid var(--blue);
    }
  }
}
</style>
