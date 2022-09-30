<template>
  <div :class="$style.info">
    <div :class="$style.title">{{ t('title') }}</div>

    <div :class="$style.setting">
      <div :class="$style.field">
        <div :class="$style.label">{{ t('email') }}</div>
        <div :class="$style.input">
          Example@gmail.com
          <router-link to="/change-email" :class="$style.edit">
            <EditOutlined/>
          </router-link>
        </div>
      </div>
      <div :class="$style.field">
        <div :class="$style.label">{{ t('password') }}</div>
        <div :class="$style.input">
          ***************************
          <router-link to="/change-password" :class="$style.edit">
            <EditOutlined/>
          </router-link>
        </div>
      </div>

      <div :class="$style.subscribtion">
        <div :class="$style.subscribtionInfo">
          <div :class="$style.subscribtionLabel">{{ t('activeSubscription') }}</div>
          Professional
        </div>

        <router-link to="/pricing">
          <a-button :class="$style.button" type="secondary" shape="round">
            {{ t('change') }}
          </a-button>
        </router-link>
      </div>
    </div>

    <div :class="$style.expires">
      <div :class="$style.expiresCaption">
        {{ t('expires') }} 1 {{ t('day')}}
      </div>
      <div :class="$style.expiresDate">
        01-01-2023 00:54
      </div>
    </div>

    <div :class="$style.footer">
      <router-link to="/payment">
        <a-button block :class="$style.button" type="primary" shape="round">
          {{ t('renew') }}
        </a-button>
      </router-link>
      <a-button block :class="$style.exit" type="secondary" shape="round">
        {{ t('logOut') }}
        <UploadOutlined :class="$style.exitIcon"/>
      </a-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { EditOutlined, UploadOutlined } from '@ant-design/icons-vue';
import { useI18N } from '@/hooks/useI18N';

const { t } = useI18N('account');
</script>

<style lang="scss" module>
  .info {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 32px 32px 40px 32px;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 15px;
  }

  .title {
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #434343;
  }

  .setting {
    display: flex;
    flex-direction: column;
    margin: 28px 0 auto 0;
    gap: 22px 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #434343;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 5px 0;
  }

  .input {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .edit {
    color: #8C8C8C;
    font-size: 17px;
  }

  .subscribtion {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0 16px;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #595959;
  }

  .subscribtionInfo {
    display: flex;
    flex-direction: column;
    gap: 4px 0;
  }

  .subscribtionLabel {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #434343;
  }

  .footer {
    display: flex;
    flex-direction: column;
    margin: 12px 0 0 0;
    gap: 18px 0;
  }

  .exit {
    color: #FF4D4F;
  }

  .exitIcon {
    font-size: 19px;
    transform: rotate(90deg);
  }

  .expires {
    display: flex;
    justify-content: space-between;
    gap: 0 16px;
  }

  .expiresCaption {
    max-width: 158px;
  }

  .expiresDate {
    max-width: 108px;
    text-align: right;
  }
</style>