<template>
  <a-collapse v-model:activeKey="activeKey" expand-icon-position="right" accordion :bordered="false">
    <a-collapse-panel key="1">
      <template #header>
        <h4 :class="$style.title">header</h4>
      </template>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam </p>
    </a-collapse-panel>
    <a-collapse-panel key="2" header="This is panel header 2">
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam </p>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam </p>
    </a-collapse-panel>
    <a-collapse-panel key="3" header="This is panel header 3" collapsible="">
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam </p>
    </a-collapse-panel>
  </a-collapse>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const activeKey = ref([1]);

</script>

<style lang="scss" module>
.title {

}
</style>