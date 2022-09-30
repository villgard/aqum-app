<template>
<div :class="$style.faq">
  <a-tabs tab-position="right" size="large" :class="$style.tabs">
    <a-tab-pane key="1"  :class="$style.tab">
      <template #tab>General <RightOutlined /></template>
      <TabContent />
    </a-tab-pane>
    <a-tab-pane key="2" tab="Custom">
      <TabContent />
    </a-tab-pane>
    <a-tab-pane key="3" tab="Safety">
      <TabContent />
    </a-tab-pane>
    <a-tab-pane key="4" tab="Other">
      <TabContent />
    </a-tab-pane>
  </a-tabs>
</div>
</template>

<script setup lang="ts">
import TabContent from './TabContent.vue';
import RightOutlined from '@ant-design/icons-vue';

</script>

<style lang="scss" module>
@import "@/assets/scss/utils.scss";
:global(.ant-tabs-right > .ant-tabs-nav) {
  order: 0;
  border-left: 1px solid var(--grey);
}
.faq {
  margin: 120px auto;
  max-width: 1100px;
  padding: 0 15px;

}

.tabs {
  .tab{
    .ant-tabs-tab.ant-tabs-tab-active {
      border-left: 1px solid var(--blue);
    }
  }
}
</style>