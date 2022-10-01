<template>
  <div :class="$style.card">
    <!--<div :class="$style.popular">Most Popular Plan</div>-->
    <div :class="$style.wrapper">
      <div :class="$style.head">
        <div :class="$style.headInfo">
          <div :class="$style.title">Professional</div>
          <div :class="$style.label">Save to 30%</div>
        </div>

        <div :class="$style.price">€299.99<span :class="$style.month">\Month</span></div>
      </div>

      <div :class="$style.info">
        <div :class="$style.infoItem">
          <div>Profiles</div>
          <div :class="$style.infoValue">1200</div>
        </div>
        <div :class="$style.infoItem">
          <div>Device</div>
          <div :class="$style.infoValue">2</div>
        </div>
        <div :class="$style.infoItem">
          <div>Profile Paterns</div>
          <div :class="$style.infoValue">10</div>
        </div>
        <div :class="$style.infoItem">
          <div>Drag'n'drop cookies</div>
          <div :class="$style.infoValue">100</div>
        </div>
        <div :class="$style.infoItem">
          <div>Team members</div>
          <div :class="$style.infoValue">8</div>
        </div>
        <div :class="$style.infoItem">
          <div>Proxy Manager</div>
          <div :class="[$style.infoCheck, $style.disabled]"><IconCheck /></div>
        </div>
        <div :class="$style.infoItem">
          <div>API Access</div>
          <div :class="$style.infoCheck"><IconCheck /></div>
        </div>
        <div :class="$style.infoItem">
          <div>Unlimited Tags</div>
          <div :class="$style.infoCheck"><IconCheck /></div>
        </div>
        <div :class="$style.infoItem">
          <div>Transfer profiles</div>
          <div :class="$style.infoCheck"><IconCheck /></div>
        </div>
        <div :class="$style.infoItem">
          <div>Mobile application</div>
          <div :class="$style.infoCheck"><IconCheck /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconCheck from "@/components/Icons/Check.vue";
</script>

<style lang="scss" module>
.card {
  z-index: 2;
  position: relative;
  height: 100%;
}

.wrapper {
  width: 100%;
  height: 100%;
  @media (min-width: 1024px) {
    padding: 32px 32px 40px 32px;
  }

  @media (max-width: 1023px) and (min-width: 768px) {
    padding: 22px;
  }

  @media (max-width: 767px) {
    padding: 22px;
  }

  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 15px;
}

.popular {
  z-index: -1;
  position: absolute;
  bottom: calc(100% - 10px);
  left: 0;
  width: 100%;
  height: 62px;
  padding: 11px 16px 0 16px;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 29px;
  }

  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 22px;
  }
  text-align: center;
  color: #508ff8;
  background: #f5f5f5;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.05);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: start;

  @media (min-width: 1024px) {
    margin: 0 0 28px 0;
  }

  @media (max-width: 1023px) and (min-width: 768px) {
    margin: 0 0 18px 0;
  }

  @media (max-width: 767px) {
    margin: 0 0 18px 0;
  }
}

.headInfo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 13px 0;
}

.title {
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 29px;
  }

  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 22px;
  }
  color: #434343;
}

.label {
  display: inline-block;
  height: 26px;
  padding: 4px 21px;
  background: #f5f5f5;
  border-radius: 13px;
  font-size: 14px;
  line-height: 18px;
  color: #595959;
}

.price {
  display: flex;
  align-items: flex-end;
  margin: -6px 0 0 0;
  font-weight: 700;
  text-align: right;
  color: #508ff8;

  @media (min-width: 1024px) {
    font-size: 32px;
    line-height: 38px;
  }

  @media (max-width: 1023px) {
    flex-direction: column;
    font-size: 24px;
    line-height: 29px;
  }
}

.month {
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 22px 0;
}

.infoItem {
  display: flex;
  justify-content: space-between;
}

.infoValue {
  color: #434343;
}

.infoCheck {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 21px;
  height: 21px;
  border-radius: 21px;

  &:not(.disabled) {
    background-color: #508ff8;
  }

  &.disabled {
    background-color: #d9d9d9;
  }
}
</style>
