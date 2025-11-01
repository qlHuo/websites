<template>
  <div
    class="expand-sidebar"
    :class="{ collapsed: !isExpanded }"
    :style="{ width: isExpanded ? currentWidth + 'px' : '24px' }"
  >
    <div v-show="isExpanded" class="sidebar-content">
      <slot></slot>
    </div>
    <div class="sidebar-toggle" @click="handleToggle">
      <span v-if="isExpanded">&#10094;</span>
      <span v-else>&#10095;</span>
    </div>
    <div v-if="isExpanded && resizable" class="sidebar-resizer" @mousedown.prevent="startResize"></div>
  </div>
</template>

<script>
export default {
  name: 'ExpandSidebar',
  props: {
    // v-model: 控制展开/收起
    value: {
      type: Boolean,
      default: true
    },
    // 默认宽度
    width: {
      type: Number,
      default: 240
    },
    minWidth: {
      type: Number,
      default: 160
    },
    maxWidth: {
      type: Number,
      default: 480
    },
    resizable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentWidth: this.width,
      resizing: false,
      startX: 0,
      startWidth: 0
    };
  },
  computed: {
    isExpanded: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
        this.$emit('update:value', val);
      }
    }
  },
  watch: {
    width(val) {
      if (!this.resizing) this.currentWidth = val;
    }
  },
  methods: {
    handleToggle() {
      this.isExpanded = !this.isExpanded;
    },
    startResize(e) {
      this.resizing = true;
      this.startX = e.clientX;
      this.startWidth = this.currentWidth;
      document.addEventListener('mousemove', this.resize);
      document.addEventListener('mouseup', this.stopResize);
    },
    resize(e) {
      let newWidth = this.startWidth + (e.clientX - this.startX);
      if (newWidth < this.minWidth) newWidth = this.minWidth;
      if (newWidth > this.maxWidth) newWidth = this.maxWidth;
      this.currentWidth = newWidth;
      this.$emit('update:width', newWidth);
    },
    stopResize() {
      this.resizing = false;
      document.removeEventListener('mousemove', this.resize);
      document.removeEventListener('mouseup', this.stopResize);
    }
  },
  beforeDestory() {
    this.stopResize();
  }
};
</script>

<style scoped>
.expand-sidebar {
  position: relative;
  height: 100%;
  background: #f5f5f5;
  border-right: 1px solid #ddd;
  transition: width 0.2s;
  display: flex;
  align-items: stretch;
}
.expand-sidebar.collapsed {
  width: 8px !important;
  min-width: 8px !important;
  max-width: 8px !important;
}
.sidebar-content {
  flex: 1;
  overflow: auto;
  padding: 16px;
}
.sidebar-toggle {
  width: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  background: #e0e0e0;
  border-left: 1px solid #ddd;
  z-index: 2;
}
.sidebar-resizer {
  width: 4px;
  cursor: ew-resize;
  background: #ccc;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
}
</style>
