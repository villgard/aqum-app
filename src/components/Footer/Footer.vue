<template>
  <a-layout-footer>
    <Container>
      <a-row :class="$style.row">
        <a-col :span="6" :class="$style.column">
          <Logo />
          <div :class="$style.text">
            {{ t('text') }}
          </div>
        </a-col>
        <a-col :span="18" :class="$style.column">
          <a-row justify="end">
            <FooterMenu />
          </a-row>
        </a-col>
      </a-row>
      <div :class="$style.divider" />
      <div :class="$style.copyright">
        © 2022 Nero | All Rights Reserved
      </div>
    </Container>
  </a-layout-footer>
</template>

<script setup>
import Container from '@/components/Common/Container.vue';
import Logo from '@/components/Logo.vue';
import FooterMenu from './Menu.vue';
import { useI18N } from '@/hooks/useI18N';

const { t } = useI18N('footer');
</script>

<style lang="scss" module>
.text {
  max-width: 230px;
  font-size: 12px;
  color: rgba(67, 67, 67, 0.8);
}

.divider {
  width: 100%;
  height: 1px;
  margin: 20px 0;
  background: rgba(67, 67, 67, 0.15);
}
.copyright {
  padding: 0 0 40px 0;
  font-size: 12px;
  color: rgba(67, 67, 67, 0.4);
}

@media (max-width: 767px) {
  .row {
    margin: 0 !important;
    flex-direction: column !important;
  }

  .column {
    width: 100% !important;
    max-width: 100% !important;
    flex-basis: 0 0 100% !important;
  }
}
</style>
