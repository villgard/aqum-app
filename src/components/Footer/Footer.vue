<template>
  <footer class="footer">
    <div class="footer__content container">
      <div class="footer__content-row">
        <div class="footer__content-info">
          <Logo />
          <p class="footer__content-info--text">
            {{ t('footer.text') }}
          </p>
        </div>
        <FooterMenu />
      </div>
      <a-divider class="footer__content-divider"/>
      <p class="footer__content-copyright">
        © 2022 Nero | All Rights Reserved
      </p>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import FooterMenu from './Menu.vue';

const { t } = useI18n();

</script>

<style lang="scss">
@import "/src/assets/scss/utils.scss";

.footer {
  padding-top: 25px;
  width: 100%;
  &__content {

    &-row {
      display: flex;
      justify-content: space-between;
    }
    &-info {

      &--text {
        width: 205px;
        margin: 2px 0 0;
        font-family: 'Gotham Book', sans-serif;
        @include footer-text;
        color: var(--dark-1);
        opacity: .8;
      }
    }
    &-copyright {
      min-width: 100%;
      font-family: 'Gotham Book', sans-serif;
      @include footer-text;
      color: var(--dark-1);
      opacity: .4;
      margin-bottom: 25px;
    }
    .ant-divider-horizontal {
      width: 100%;
      margin: 19px 0;
      border-top: 1px solid rgba(67, 67, 67, 0.15);
    }
  }
}
</style>