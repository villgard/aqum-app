<template>
  <div :class="$style.card">
    <div :class="$style.head">
      <a-avatar :class="$style.icon" :size="66" style="background-color: #F5F5F5; color: #508FF8">
        <template #icon>
          <WindowsOutlined v-if="icon === 'windows'"/>
          <AppleOutlined v-if="icon === 'mac'" />
        </template>
      </a-avatar>

      <div>
        <div :class="$style.title">{{ title }}</div>
        <div :class="$style.version">{{ version }}</div>
      </div>
    </div>

    <div :class="$style.info" v-html="info" />

    <a v-if="!buttonSecondary" :href="button.to" :class="$style.space">
      <a-button block type="primary" shape="round">
        {{ button.label }}
      </a-button>
    </a>
    <div v-else :class="[$style.buttonsGroup, $style.space]">
      <a :href="button.to">
        <a-button :class="$style.button" type="primary" shape="round">
          {{ button.label }}
        </a-button>
      </a>
      <a :href="buttonSecondary.to">
        <a-button :class="$style.button" type="secondary" shape="round">
          {{ buttonSecondary.label }}
        </a-button>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { WindowsOutlined, AppleOutlined } from '@ant-design/icons-vue';

interface CardButton {
  label: string;
  to: string;
}

interface CardProps {
  title: string;
  version?: string;
  icon: 'windows' | 'mac';
  info: string;
  button: CardButton;
  buttonSecondary?: CardButton;
};

const props = defineProps<CardProps>();
</script>

<style lang="scss" module>
  @import '@/assets/scss/typography.scss';

  .card {
    display: flex;
    flex-direction: column;
    max-width: 422px;
    padding: 20px 32px 33px 32px;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    
    @media (min-width: 768px) {
      width: 50%;
    }

    @media (max-width: 767px) {
      width: 100%;
    }
  }

  .head {
    display: flex;
    align-items: center;
    gap: 0 13px;
    margin: 0 0 12px 0;
  }

  .icon {
    flex-shrink: 0;
  }

  .title {
    margin: 0 0 5px 0;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #434343;
  }

  .version {
    font-size: 14px;
    line-height: 20px;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 8px 0;
    margin: 0 0 31px 0;
    font-size: 14px;
    line-height: 20px;

    p {
      margin: 0;
    }
  }

  .buttonsGroup {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 1023px) {
      flex-direction: column;
    }

    gap: 8px;
  }

  .button {

    @media (min-width: 1024px) {
      width: 175px;
    }

    @media (max-width: 1023px) {
      width: 100% !important;
    }
  }

  .space {
    margin: auto 0 0 0;
  }
</style>