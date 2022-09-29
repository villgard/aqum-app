<template>
  <section class="statistic container">
    <div class="statistic__quote">
      <a-avatar src="https://joeschmoe.io/api/v1/random" class="statistic__quote-avatar" />
      <p class="statistic__quote-text">
        <span class="statistic__quote-name">
          {{ t('statistic.quote.name') }}
        </span>
        <span class="statistic__quote-quote">
          {{ t('statistic.quote.text') }}
        </span>
      </p>
    </div>
    <ul class="statistic__nums-list">
      <li class="statistic__nums-item">
        <span class="statistic__nums-number">
          {{ t('statistic.nums.num.first') }}
        </span>
        <span class="statistic__nums-text">
          {{ t('statistic.nums.text.first') }}
        </span>
      </li>
      <li class="statistic__nums-item">
        <span class="statistic__nums-number">
          {{ t('statistic.nums.num.second') }}
        </span>
        <span class="statistic__nums-text">
          {{ t('statistic.nums.text.second') }}
        </span>
      </li>
      <li class="statistic__nums-item">
        <span class="statistic__nums-number">
          {{ t('statistic.nums.num.third') }}
        </span>
        <span class="statistic__nums-text">
          {{ t('statistic.nums.text.third') }}
        </span>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { useI18N } from '@/hooks/useI18N';

const { t } = useI18N('home');
</script>

<style lang="scss">
@import '/src/assets/scss/utils.scss';

.statistic {
  @extend %flex-space-between;

  &__quote {
    max-width: 402px;
    display: flex;
    align-items: flex-start;

    &-avatar.ant-avatar {
      min-width: 42px;
      height: 42px;
      margin-top: 4px;
      margin-right: 11px;
    }

    &-text {
      display: flex;
      flex-direction: column;
    }

    &-name {
      font-family: 'Poppins Regular', sans-serif;
      @include p-subtitle-text;
      color: var(--dark-2);
    }

    &-quote {
      position: relative;
      font-family: 'Gotham Medium', sans-serif;
      @include quote;
      color: var(--dark-1);

      &::after {
        position: absolute;
        content: '|';
        margin-left: 3px;
      }
    }
  }

  &__nums {

    &-list {
      max-width: 550px;
      display: flex;
      align-items: center;
    }

    &-item {
      margin-left: 18px;
      display: flex;
      align-items: center;
    }

    &-number {
      margin-right: 8px;
      font-family: 'Gotham Medium', sans-serif;
      @include stat-num;
      color: var(--dark-1);
    }

    &-text {
      font-family: 'Gotham Book', sans-serif;
      @include stat-text;
      color: var(--dark-2);
    }
  }
}
</style>
