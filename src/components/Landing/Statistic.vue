<template>
  <section :class="[$style.statistic, $style.container]">
    <div :class="$style.quote">
      <img src="../../assets/images/avatar-quote.png" :alt="t('statistic.quote.name')" :class="$style.avatar" />
      <p :class="$style.text">
        <span :class="$style.name">
          {{ t('statistic.quote.name') }}
        </span>
        <span :class="$style.quoting">
          {{ t('statistic.quote.text') }}
        </span>
      </p>
    </div>
    <div :class="$style.stats">
      <div :class="$style.item">
        <span :class="$style.number">
          {{ t('statistic.nums.num.first') }}
        </span>
        <span :class="$style.text">
          {{ t('statistic.nums.text.first') }}
        </span>
      </div>
      <div :class="$style.item">
        <span :class="$style.number">
          {{ t('statistic.nums.num.second') }}
        </span>
        <span :class="$style.text">
          {{ t('statistic.nums.text.second') }}
        </span>
      </div>
      <div :class="$style.item">
        <span :class="$style.number">
          {{ t('statistic.nums.num.third') }}
        </span>
        <span :class="$style.text">
          {{ t('statistic.nums.text.third') }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18N } from '@/hooks/useI18N';

const { t } = useI18N('home');
</script>

<style lang="scss" module>
@import '@/assets/scss/utils.scss';

.statistic {
  @extend %flex-space-between;

  .quote {
    max-width: 402px;
    display: flex;
    align-items: flex-start;

    .avatar {
      width: 42px;
      height: 42px;
      margin-top: 4px;
      margin-right: 11px;
    }

    .text {
      display: flex;
      flex-direction: column;

      .name {
        font-family: 'Poppins', sans-serif;
        @include p-subtitle-text;
        color: var(--dark-2);
      }

      .quoting {
        @include quote;
        color: var(--dark-1);

        &::after {
          content: '|';
          position: absolute;
          margin-left: 3px;
        }
      }
    }
  }

  .stats {
    max-width: 550px;
    display: flex;
    align-items: center;

    .item {
      display: flex;
      align-items: center;
      gap: 8px;
      .number {
        @include stat-num;
        color: var(--dark-1);
      }

      .text {
        @include stat-text;
        color: var(--dark-2);
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .statistic {
    gap: 8px;
    .quote {
      .avatar {
        width: 38px;
        height: 38px;
        margin-right: 8px;
      }
      .text {
        max-width: 256px;
        .name {
          @include t(14, 21);
        }
        .quoting {
          @include t(12, 14, 500);
        }
      }
    }
    .stats {
      max-width: 390px;
      .item {
        .number {
          @include t(24, 29, 500);
        }
        .text {
          @include t(10, 12);
        }
      }
    }
  }
}
@media screen and (max-width: 690px){
  .statistic {
    justify-content: center;
    flex-direction: column;
    .quote {
      .text {
      }
    }
  }
}

@media screen and (max-width: 425px){
  .statistic {
    .quote {
      .text {
        max-width: 100%;
      }
    }
    .stats {
      display: none;
    }
  }

}
</style>
