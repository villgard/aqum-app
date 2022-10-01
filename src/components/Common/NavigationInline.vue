<template>
  <div :class="$style.navigation">
    <a-menu :selectedKeys="current" mode="horizontal" :class="$style.list">
      <a-menu-item v-for="(item, index) in navigation" :key="index" :class="$style.item">
        <router-link :to="item.to">
          {{ item.label }}
        </router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

interface NavigationItem {
  label: string;
  to: string;
}

interface Navigation {
  navigation: NavigationItem[];
}

const props = defineProps<Navigation>()
const { currentRoute } = useRouter();

const current = computed(() => [
  props.navigation.findIndex(item => item.to === currentRoute.value.path)
]);
</script>

<style lang="scss" module>
.navigation {
  display: flex;
  justify-content: center;
  @media (min-width: 1024px) {
    margin: 20px 0 48px 0;
  }

  @media (max-width: 1023px) {
    margin: 20px 0 32px 0;
  }
}
.list {
  position: relative;
  background: transparent;
  justify-content: center;
  border: none;
  color: rgba(89, 89, 89, 0.6);

  @media (max-width: 767px) {
    font-size: 12px !important;
  }

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
      @media (max-width: 767px) {
        padding: 0 8px !important;
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