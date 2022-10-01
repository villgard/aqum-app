<template>
  <a-collapse expand-icon-position="right" accordion :bordered="false" :class="$style.collapse">
    <a-collapse-panel v-for="(item, index) in theme" :key="index">
      <template #header>
        <h4 :class="$style.title">
          {{ item.title }}
        </h4>
      </template>
      <p :class="$style.text">
        {{ item.text }}
      </p>
    </a-collapse-panel>
  </a-collapse>
</template>

<script lang="ts" setup>
defineProps({
  theme: Array,
});
</script>

<style lang="scss" module>
@import '@/assets/scss/utils.scss';

.title {
  margin-bottom: 0;
  @include t(18, 120%, 500);
  color: var(--dark-1);
}

.text {
  @include t(16, 130%);
  margin-bottom: 24px;
  color: var(--dark-2);
}
:global {
  .ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow {
    font-size: 18px;
    color: var(--dark-1);
  }

  .ant-collapse-icon-position-right > .ant-collapse-item > .ant-collapse-header {
    padding: 28px 40px 28px 0;
  }

  .ant-collapse-borderless > .ant-collapse-item {
    border-bottom: 1px solid rgba(67, 67, 67, 0.15);
  }

  .ant-collapse-borderless > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box {
    padding: 0 142px 0 0;
  }
}

@media screen and (max-width: 992px) {
  .title {
    font-size: 16px;
  }
}
</style>