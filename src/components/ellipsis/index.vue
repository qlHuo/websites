<template>
  <t-tooltip :content="content" v-bind="tooltipAttrs" :disabled="disabled">
    <div :class="contentClass" :style="{ '--line-clamp': lineClamp }" @mouseenter="handleMouseEnter">
      <slot>{{ content }}</slot>
    </div>
  </t-tooltip>
</template>

<script>
export default {
  name: 'HiEllipsis',
  props: {
    content: {
      type: String,
      required: true
    },
    lineClamp: {
      type: Number,
      default: 1
    },
    tooltipAttrs: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      disabled: false
    };
  },

  computed: {
    contentClass() {
      return this.lineClamp > 1 ? 'text-hide-multiple' : 'text-hide-single';
    }
  },

  methods: {
    handleMouseEnter(event) {
      const eventTarget = event.target;
      const evWidth = eventTarget.scrollWidth;
      const elWidth = eventTarget.clientWidth;
      const evHeight = eventTarget.scrollHeight;
      const elHeight = eventTarget.clientHeight;

      this.disabled = this.lineClamp > 1 ? evHeight <= elHeight : evWidth <= elWidth;
    }
  }
};
</script>

<style scoped lang="less">
.text-hide-single {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.text-hide-multiple {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--line-clamp);
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
}
</style>
