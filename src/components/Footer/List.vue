<template>
  <ul class="footer__content-list">
    <li class="footer__content-list--title">{{ title }}</li>
    <li v-for="item in list" :id="item.label" class="footer__content-list--item">
      <RouterLink :to="{ name: item.to }"  class="footer__content-list--link">{{ item.label }}</RouterLink>
    </li>
  </ul>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  title: String,
  list: Array,
})
</script>

<style lang="scss">
@import "/src/assets/scss/utils.scss";

.footer__content-list {
  list-style: none;

  &--title {
    margin-bottom: 10px;
    font-family: 'Gotham Medium', sans-serif;
    @include footer-list-title;
    color: var(--dark-1);
  }
  &--item {
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
  &--link {
    color: var(--dark-1);
    opacity: .8;
    @include footer-text;
  }
}

</style>