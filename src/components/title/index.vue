<template>
  <div class="hi-title">
    <div class="hi-title__content">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    content: {
      type: String,
      default: '标题'
    }
  },
  data() {}
};
</script>

<style scoped>
.title {
  text-align: center;
  margin: 20px 0;
}
</style>
