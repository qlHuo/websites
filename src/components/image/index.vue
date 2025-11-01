<template>
  <div class="hi-image" :style="wrapperStyle" role="img" :aria-label="alt">
    <img
      :src="currentSrc"
      :alt="alt"
      :style="imgStyle"
      :loading="lazy ? 'lazy' : undefined"
      @load="onLoad"
      @error="onError"
      draggable="false"
    />
  </div>
</template>

<script>
export default {
  name: 'HiImage',
  props: {
    // 图片地址（推荐传入），如果不传会显示占位图
    src: {
      type: String,
      default: ''
    },
    // img 的 alt
    alt: {
      type: String,
      default: ''
    },
    // 宽度（Number：像素 / String：带单位）
    width: {
      type: [Number, String],
      default: null
    },
    // 高度（Number：像素 / String：带单位）
    height: {
      type: [Number, String],
      default: null
    },
    // 快速设置正方形尺寸（会覆盖 width 和 height）
    size: {
      type: [Number, String],
      default: null
    },
    // object-fit，默认 cover
    fit: {
      type: String,
      default: 'cover'
    },
    // border-radius（Number：像素 / String：带单位）
    radius: {
      type: [Number, String],
      default: 0
    },
    // 出错时使用的图片（默认是灰色占位 svg）
    errorImage: {
      type: String,
      default: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200'><rect width='100%' height='100%' fill='%23e6e6e6'/></svg>`
    },
    // 占位图（初始加载前显示）
    placeholder: {
      type: String,
      default: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200'><rect width='100%' height='100%' fill='%23f5f5f5'/></svg>`
    },
    // 是否使用浏览器原生懒加载
    lazy: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      currentSrc: this.src || this.placeholder,
      errored: false,
      loaded: false
    };
  },
  computed: {
    // wrapper 的 style（宽高/圆角）
    wrapperStyle() {
      const w = this.size != null ? this.size : this.width;
      const h = this.size != null ? this.size : this.height;
      return {
        width: this._addUnitIfNumber(w) || 'auto',
        height: this._addUnitIfNumber(h) || 'auto',
        overflow: 'hidden',
        display: 'inline-block',
        borderRadius: this._addUnitIfNumber(this.radius)
      };
    },
    // img 的 object-fit
    imgStyle() {
      return {
        width: '100%',
        height: '100%',
        objectFit: this.fit,
        display: 'block',
        userSelect: 'none'
      };
    }
  },
  watch: {
    src(newVal) {
      this.errored = false;
      this.loaded = false;
      this.currentSrc = newVal || this.placeholder;
    }
  },
  methods: {
    _addUnitIfNumber(val) {
      if (val == null || val === '') return null;
      return typeof val === 'number' || /^\d+$/.test(String(val)) ? `${val}px` : String(val);
    },
    onLoad(event) {
      this.loaded = true;
      this.$emit('load', event);
    },
    onError(event) {
      if (this.errored) return;
      this.errored = true;
      // 优先使用 errorImage；若没有则占位图
      this.currentSrc = this.errorImage || this.placeholder;
      this.$emit('error', event);
    }
  },
  mounted() {
    // initial state handled in data, but ensure fallback if src empty
    if (!this.src) {
      this.currentSrc = this.placeholder;
    }
  }
};
</script>

<style scoped>
.hi-image img {
  -webkit-user-drag: none;
  user-drag: none;
}
</style>
