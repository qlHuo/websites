<template>
  <div :class="cardItemClass" @click.stop="$emit('click')">
    <div class="header" v-if="$scopedSlots.title || title">
      <div class="hi-card-item--header">
        <div class="hi-card-item--header_icon" v-if="$scopedSlots.icon || icon">
          <slot name="icon">
            <t-image :src="icon" :style="{ height: '100%', width: '100%' }" loading shape="circle" fit="cover">
              <HiIcon slot="error" name="icon-qianduan" size="24" />
            </t-image>
          </slot>
        </div>
        <div class="hi-card-item--header_title" v-if="$scopedSlots.title || title">
          <slot name="title">
            <div class="text-hide-1">
              {{ title }}
            </div>
          </slot>
        </div>
      </div>
    </div>
    <div class="hi-card-item--content" v-if="$scopedSlots.content || content">
      <slot name="content">
        <span :title="content">{{ content }}</span>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HiCardItem',
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    actived: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    cardItemClass() {
      return {
        'hi-card-item': true,
        'hi-card-item--active': this.actived
      };
    }
  },

  methods: {
    renderErrorImage() {
      return ``;
    }
  }
};
</script>
