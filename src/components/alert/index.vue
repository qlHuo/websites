<template>
  <div :class="alertCls" :style="styles">
    <!-- 图标区域 -->
    <span :class="iconCls">
      <slot name="icon">
        <ErrorCircleFilledIcon class="fs-20" />
      </slot>
    </span>

    <!-- 内容区域 -->
    <div class="hi-tips-content hi-tips-content-width flex-middle ml-4">
      <span :class="tipCls">
        <!-- 如果启用了 tooltip，则显示 tooltip -->
        <t-tooltip v-if="tooltip" :content="content" :placement="tooltipPlacement">
          <slot>{{ content }}</slot>
        </t-tooltip>
        <!-- 否则直接显示内容 -->
        <slot v-else>{{ content }}</slot>
      </span>

      <!-- 额外内容插槽 -->
      <div class="flex-left">
        <slot name="extra"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { ErrorCircleFilledIcon } from 'tdesign-icons-vue';

// 工具函数：判断值是否在数组中
const oneOf = (value, arr) => {
  return arr.indexOf(value) !== -1;
};
const THEMESBGCOLORS = {
  default: 'var(--td-bg-color-component)',
  info: 'var(--td-brand-color-light)',
  success: 'var(--td-success-color-light)',
  warning: 'var(--td-warning-color-light)',
  error: 'var(--td-error-color-light)'
};
const THEMESCOLORS = {
  default: 'var(--td-text-color-primary)',
  info: 'var(--td-brand-color)',
  success: 'var(--td-success-color)',
  warning: 'var(--td-warning-color)',
  error: 'var(--td-error-color)'
};
// 主题类型
const THEMES = ['default', 'info', 'success', 'warning', 'error'];

export default {
  name: 'HiAlert',
  components: {
    ErrorCircleFilledIcon
  },
  props: {
    // 提示内容
    content: {
      type: String,
      default: ''
    },
    // 主题类型
    theme: {
      type: String,
      default: 'default',
      validator(value) {
        return oneOf(value, THEMES);
      }
    },
    // 样式变体（背景或边框）
    variant: {
      type: String,
      default: 'background',
      validator: value => oneOf(value, ['background', 'outline'])
    },
    // 是否启用 tooltip
    tooltip: {
      type: Boolean,
      default: false
    },
    // tooltip 的位置
    tooltipPlacement: {
      type: String,
      default: 'top'
    },
    // 文本颜色
    textColor: {
      type: String,
      default: ''
    },
    // 背景颜色
    backgroundColor: {
      type: String,
      default: ''
    },
    // 是否启用省略号
    ellipsis: {
      type: Boolean,
      default: false
    },
    // 图标颜色
    iconColor: {
      type: String,
      default: ''
    },
    // 左侧内边距
    paddingLeft: {
      type: String,
      default: '8px'
    }
  },
  computed: {
    // 警告框的类名
    alertCls() {
      return ['hi-alert', `hi-alert-${this.theme}`, `hi-alert-${this.variant}`];
    },
    // 警告框的内联样式
    styles() {
      return {
        color: this.textColor || THEMESCOLORS[this.theme],
        backgroundColor: this.backgroundColor || THEMESBGCOLORS[this.theme],
        paddingLeft: this.paddingLeft
      };
    },
    // 图标的类名
    iconCls() {
      return ['hi-alert-icon', this.iconColor ? `hi-alert-icon-${this.iconColor}` : ''];
    },
    // 提示内容的类名
    tipCls() {
      return ['hi-alert-tip', this.ellipsis ? 'hi-alert-tip-ellipsis' : ''];
    }
  }
};
</script>

<style lang="less" scoped>
/* 警告框的基础样式 */
.hi-alert {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 16px;

  &-outline {
    background-color: unset !important;
  }
}

/* 图标样式 */
.hi-alert-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}

.hi-alert-icon-default {
  color: #333;
}

.hi-alert-icon-info {
  color: #007bff;
}

.hi-alert-icon-success {
  color: #28a745;
}

.hi-alert-icon-warning {
  color: #ffc107;
}

.hi-alert-icon-error {
  color: #dc3545;
}

/* 提示内容样式 */
.hi-alert-tip {
  flex: 1;
  font-size: 14px;
  line-height: 1.5;
}
.hi-alert-tip-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 提示内容宽度限制 */
.hi-alert-tip-width {
  max-width: 200px;
}
.hi-alert-tip-width-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 200px;
}
</style>
