<template>
  <div  :class="[$style.list]">
    <a-row :gutter="[{lg: 51, md: 42, sm: 36, xs: 0},{lg: 51, md: 51, sm: 42, xs: 24}]" justify="space-between">
      <a-col :lg="8" :md="12" :sm="12" :xs="24"
             v-for="(item, index) in opportunitiesList"
             :key="index"
      >
        <div :class="$style.item">
          <img :src="item.icon" :alt="item.label">
          <h3 :class="$style.title">
            {{ item.label }}
          </h3>
          <p :class="$style.text">
            {{ item.text }}
          </p>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useI18N } from "@/hooks/useI18N";

const { t } = useI18N('home');

interface opportunitiesItem {
  icon: string,
  label: string,
  text: string,
}

const opportunitiesList = computed((): Array<opportunitiesItem> => [
  {
    icon: '/src/assets/images/opportunities/opp-icon-1.svg',
    label: t('opportunities.list.title.one'),
    text: t('opportunities.list.text.one'),
  },
  {
    icon: '/src/assets/images/opportunities/opp-icon-2.svg',
    label: t('opportunities.list.title.two'),
    text: t('opportunities.list.text.two'),
  },
  {
    icon: '/src/assets/images/opportunities/opp-icon-3.svg',
    label: t('opportunities.list.title.three'),
    text: t('opportunities.list.text.three'),
  },
  {
    icon: '/src/assets/images/opportunities/opp-icon-4.svg',
    label: t('opportunities.list.title.four'),
    text: t('opportunities.list.text.four'),
  },
  {
    icon: '/src/assets/images/opportunities/opp-icon-5.svg',
    label: t('opportunities.list.title.five'),
    text: t('opportunities.list.text.five'),
  },
  {
    icon: '/src/assets/images/opportunities/opp-icon-6.svg',
    label: t('opportunities.list.title.six'),
    text: t('opportunities.list.text.six'),
  },
]);
</script>

<style lang="scss" module>
@import "@/assets/scss/utils.scss";
.list {
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  @media screen and (max-width: 992px){
    padding: 0 35px;
  }
  @media screen and (max-width: 576px) {
    padding: 0 25px;
  }
}
.item {
  padding: 33px 31px 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: var(--white);
  border: 1px solid rgba(67, 67, 67, 0.05);
  border-radius: 15px;
  .title {
    margin: 12px 0;
    font-family: 'Poppins', sans-serif;
    @include card-title;
    color: var(--dark-1);
  }
  .text {
    font-family: 'Poppins', sans-serif;
    @include p-subtitle-text;
    color: var(--dark-2);
    opacity: .8;
  }
}
</style>