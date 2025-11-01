<template>
  <div class="expand flex-middle">
    <HiExpand v-model="expand" position="top" :resizable="true" :width="240">
      <template #default>
        <p>这里是展开内容的区域</p>
      </template>
    </HiExpand>
    <div class="expand-content" a="1" b="1" c="1" d="1" a1="1" b11="1" c1="1" d1="1">
      <p>这里是展开内容的区域</p>
    </div>
  </div>
</template>

<script lang="js">
import HiExpand from '@/components/expand/index.vue';
export default {
  name: 'Expand',
  components: {
    HiExpand
  },
  data() {
    return {
      expand: true
    };
  }
};
</script>

<style scoped lang="less">
.expand {
  height: 100%;
  width: 100%;

  &-content {
    flex: 1;
    height: 100%;
  }
}
</style>
