<template>
  <section class="opportunities">
    <h2 class="opportunities__title h2-title">{{ t('landing.opportunities.title') }}</h2>
    <p class="opportunities__subtitle">{{ t('landing.opportunities.subtitle') }}</p>
    <ul class="opportunities__list">
      <li
          v-for="(item, index) in opportunitiesList"
          :key="index"
          class="opportunities__item"
      >
        <img :src="item.icon" :alt="item.label">
        <h3 class="opportunities__item-title">
          {{ item.label }}
        </h3>
        <p class="opportunities__item-text">
          {{ item.text }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const opportunitiesList = computed(() => [
  {
    icon: '/src/assets/images/opportunities/opp-icon-1.svg',
    label: t('landing.opportunities.list.title.one'),
    text: t('landing.opportunities.list.text.one'),
  },
  {
    icon: '/src/assets/images/opportunities/opp-icon-2.svg',
    label: t('landing.opportunities.list.title.two'),
    text: t('landing.opportunities.list.text.two'),
  },
  {
    icon: '/src/assets/images/opportunities/opp-icon-3.svg',
    label: t('landing.opportunities.list.title.three'),
    text: t('landing.opportunities.list.text.three'),
  },
  {
    icon: '/src/assets/images/opportunities/opp-icon-4.svg',
    label: t('landing.opportunities.list.title.four'),
    text: t('landing.opportunities.list.text.four'),
  },
  {
    icon: '/src/assets/images/opportunities/opp-icon-5.svg',
    label: t('landing.opportunities.list.title.five'),
    text: t('landing.opportunities.list.text.five'),
  },
  {
    icon: '/src/assets/images/opportunities/opp-icon-6.svg',
    label: t('landing.opportunities.list.title.six'),
    text: t('landing.opportunities.list.text.six'),
  },
])
</script>

<style lang="scss">
@import "/src/assets/scss/utils.scss";

.opportunities {
  text-align: center;
  margin-bottom: 120px;
  &__title {
    margin-bottom: 12px;
  }
  &__subtitle {
    font-family: 'Gotham Book', sans-serif;
    @include p-subtitle-text-2;
    margin-bottom: 64px;
  }
  &__list {
    max-width: 1070px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    gap: 51px;
  }
  &__item {
    max-width: 323px;
    width: 30%;
    padding: 33px 31px 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    background-color: var(--white);
    border: 1px solid rgba(67, 67, 67, 0.05);
    border-radius: 15px;
    &-title {
      margin: 12px 0;
      font-family: 'Poppins SemiBold', sans-serif;
      @include card-title;
      color: var(--dark-1);
    }
    &-text {
      font-family: 'Poppins Regular', sans-serif;
      @include p-subtitle-text;
      color: var(--dark-2);
      opacity: .8;
    }
  }
}
</style>