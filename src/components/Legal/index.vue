<template>
  <section class="privacy__content">
    <a-tabs v-model:activeKey="activeKey" centered>
      <a-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2" force-render>Content of Tab Pane 2</a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane>
    </a-tabs>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const activeKey = ref(1);
</script>

<style lang="scss" module>
</style>