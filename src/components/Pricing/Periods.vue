<template>
  <div :class="$style.navigation">
    <a-menu :selectedKeys="current" @click="selected" mode="horizontal" :class="$style.list">
      <a-menu-item v-for="item in navigation" :key="item.value" :class="$style.item">
        {{ item.label }}
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits, computed } from 'vue';

interface NavigationItem {
  label: string;
  value: string;
}

interface Navigation {
  navigation: NavigationItem[];
  default: number;
}

const emit = defineEmits<{
  (e: 'select', value: number): void;
}>();
const props = defineProps<Navigation>();
const current = computed<Array<string>>(() => [props.default.toString()]);
const selected = ({ key }) => emit('select', key);
</script>

<style lang="scss" module>

.navigation {
  display: flex;
  @media (min-width: 1024px) {
    justify-content: center;
    margin: 20px 0 98px 0;
  }

  @media (max-width: 1023px) {
    overflow-x: auto;
  }

  @media (max-width: 1023px) and (min-width: 768px) {
    margin: 26px 0 46px 0;
    padding: 0 24px 8px 24px;
  }

  @media (max-width: 767px) {
    margin: 26px 0 32px 0;
    padding: 0 16px 8px 16px;
    font-size: 12px !important;
  }
}
.list {
  position: relative;
  background: transparent;
  justify-content: center;
  border: none;
  color: rgba(89, 89, 89, 0.6);

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    height: 4px;
    border-radius: 5px;
    background-color: #D9D9D9;
  }

  :global {

    .ant-menu-item {
      @media (max-width: 1023px) and (min-width: 768px) {
        padding: 0 40px !important;
      }

      @media (max-width: 767px) {
        padding: 0 16px !important;
      }
    }

    .ant-menu-item-selected {
      color: #595959 !important;

      &::after {
        opacity: 1;
      }
    }
  }
}

.item {
  z-index: 2;
  position: relative;

  &::after {
    width: 100%;
    right: unset !important;
    left: 0 !important;
    top: calc(100% - 1px);
    bottom: unset !important;
    height: 4px;
    border: none;
    background: #508FF8;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) !important;
  }
}
</style>