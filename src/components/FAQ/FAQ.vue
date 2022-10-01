<template>
  <section :class="$style.faq">
    <div class="heading">
      <h2 :class="[$style.title, $style.titleH2]"></h2>
    </div>
    <Tabs />
  </section>
</template>

<script lang="ts" setup>
import Tabs from './Tabs.vue';
</script>

<style lang="scss" module>
@import '@/assets/scss/utils.scss';

.faq {
  margin: 120px auto;
  max-width: 1100px;
  padding: 0 15px;
}
</style>
