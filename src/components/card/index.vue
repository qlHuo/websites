<template>
  <div class="hi-card" :style="styles">
    <div class="hi-card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import './index.less';
export default {
  name: 'HCard',
  props: {
    col: {
      type: Number,
      default: 4
    },
    gutter: {
      type: Number,
      default: 16
    },
    // 大于1920px
    xl: {
      type: Number,
      default: null
    },
    // 1680px ~ 1920px
    lg: {
      type: Number,
      default: null
    },
    // 1280px ~ 1680px
    md: {
      type: Number,
      default: null
    },
    // 960px ~ 1280px
    sm: {
      type: Number,
      default: null
    },
    // 小于960px
    xs: {
      type: Number,
      default: null
    },
    // 卡片高度
    cardHeight: {
      type: String,
      default: '48px'
    },
    borderRadius: {
      type: String,
      default: '8px'
    }
  },
  computed: {
    styles() {
      return {
        // 根据不同的屏幕尺寸设置不同的列数
        '--width': `calc(${100 / this.col}% - ${this.gutter}px)`,
        '--xl-width': `calc(${100 / (this.xl || this.col)}% - ${this.gutter}px)`,
        '--lg-width': `calc(${100 / (this.lg || this.col)}% - ${this.gutter}px)`,
        '--md-width': `calc(${100 / (this.md || this.col)}% - ${this.gutter}px)`,
        '--sm-width': `calc(${100 / (this.sm || this.col)}% - ${this.gutter}px)`,
        '--xs-width': `calc(${100 / (this.xs || this.col)}% - ${this.gutter}px)`,
        '--hi-card-height': this.cardHeight, // 设置卡片的高度
        '--hi-card-border-radius': this.borderRadius
      };
    }
  }
};
</script>
