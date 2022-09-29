<template>
  <div :class="$style.container">
    <slot />
  </div>
</template>

<style lang="scss" module>
.container {
  width: 100%;
  margin: 0 auto;

  @media (min-width: 1218px) {
    max-width: 1218px;
  }

  @media (min-width: 768px) {
    padding: 0 24px;
  }

  @media (max-width: 767px) {
    padding: 0 16px;
  }
}
</style>
