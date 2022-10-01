<template>
  <a-tabs size="large" :class="$style.tabs" :tab-position="checkWidth" tabBarGutter="28" :centered="!width">
    <a-tab-pane v-for="(theme, key) in questions" :key="key" key="1">
      <template #tab><div :class="$style.tab">{{ t(`tabs.${key}`) }}</div></template>
      <TabContent :theme="theme"/>
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts" setup>
import TabContent from './TabContent.vue';
import { computed } from "vue";
import { useI18N } from '@/hooks/useI18N';

const { t } = useI18N('faq');

const width = computed(() => window.document.documentElement.clientWidth);
const checkWidth = computed(() => {
  return (width.value > 751) ? 'right' : 'top'
})

interface ThemeItem {
  title: string,
  text: string,
}

interface ThemeItems {
  [key: string]: ThemeItem[],
}

const questions = computed((): ThemeItems => ({
  general: [
    {
      title: t('theme.general.q1.title'),
      text: t('theme.general.q1.text'),
    },
    {
      title: t('theme.general.q2.title'),
      text: t('theme.general.q2.text'),
    },
    {
      title: t('theme.general.q3.title'),
      text: t('theme.general.q3.text'),
    },
    {
      title: t('theme.general.q4.title'),
      text: t('theme.general.q4.text'),
    },
  ],
  custom: [
    {
      title: t('theme.custom.q1.title'),
      text: t('theme.custom.q1.text'),
    },
    {
      title: t('theme.custom.q2.title'),
      text: t('theme.custom.q2.text'),
    },
    {
      title: t('theme.custom.q3.title'),
      text: t('theme.custom.q3.text'),
    },
    {
      title: t('theme.custom.q4.title'),
      text: t('theme.custom.q4.text'),
    },
  ],
  safety: [
    {
      title: t('theme.safety.q1.title'),
      text: t('theme.safety.q1.text'),
    },
    {
      title: t('theme.safety.q2.title'),
      text: t('theme.safety.q2.text'),
    },
    {
      title: t('theme.safety.q3.title'),
      text: t('theme.safety.q3.text'),
    },
    {
      title: t('theme.safety.q4.title'),
      text: t('theme.safety.q4.text'),
    },
  ],
  other: [
    {
      title: t('theme.other.q1.title'),
      text: t('theme.other.q1.text'),
    },
    {
      title: t('theme.other.q2.title'),
      text: t('theme.other.q2.text'),
    },
    {
      title: t('theme.other.q3.title'),
      text: t('theme.other.q3.text'),
    },
    {
      title: t('theme.other.q4.title'),
      text: t('theme.other.q4.text'),
    },
  ],

}))
</script>

<style lang="scss" module>
@import '@/assets/scss/utils.scss';

.tab {
  @include t(18, 120%);
  color: rgba(89, 89, 89, 0.8);
}
:global {
  .ant-tabs-tab.ant-tabs-tab-active {
    position: relative;

    &::after {
      position: absolute;
      right: 0;
      content: '>';
      color: var(--dark-1);
    }
  }
  .ant-tabs-right > .ant-tabs-nav {
    order: 0;
  }
  .ant-tabs-right > .ant-tabs-content-holder {
    border-right: 0;
    max-width: 78%;
    margin-left: auto;
  }
  .ant-tabs-tab {
    border-left: 2px solid var(--gray-3);
  }

}

@media screen and (max-width: 751px) {
  :global {
    .ant-tabs-tab.ant-tabs-tab-active::after {
      content: '';
    }
    .ant-tabs-tab {
      border-left: 0
    }
    .ant-tabs > .ant-tabs-nav .ant-tabs-nav-wrap {
      justify-content: center;
    }
  }
}

@media screen and (max-width: 450px) {
  .tab {
    @include t(14, 17);
    color: rgba(89, 89, 89, 0.6)
  }
}
</style>
