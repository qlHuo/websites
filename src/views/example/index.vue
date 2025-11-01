<template>
  <div class="home">
    <div style="width: 100px; margin: 24px auto">
      <HiEllipsis :line-clamp="1" content="这是一段很长的内容这是一段很长的内容这是一段很长的内容" />
    </div>
    <HiCard :col="4">
      <HiCardItem
        v-for="(item, index) in cards"
        :key="index"
        :icon="item.avatar"
        :title="item.title"
        :actived="activedIndex === index"
        @click="handleCardClick(index)"
      >
        <template #description>
          <HiEllipsis :line-clamp="2" :content="item.desc" />
        </template>
      </HiCardItem>
    </HiCard>

    <HiAlert content="这是一个警告提示" theme="default" variant="outline" />
    <HiAlert
      content="这是一个警告提示这是一个警告提示这是一个警告提示这是一个警告提示这是一个警告提示这是一个警告提示这是一个警告提示这是一个警告提示这是一个警告提示这是一个警告提示这是一个警告提示这是一个警告提示"
      theme="info"
    />
    <HiAlert content="这是一个警告提示" theme="success" variant="outline" />
    <HiAlert content="这是一个警告提示" theme="warning" variant="outline" />
    <HiAlert content="这是一个警告提示" theme="error" variant="outline" />
  </div>
</template>

<script>
import HiEllipsis from '@/components/ellipsis/index.vue';
export default {
  name: 'Home',
  components: {
    HiEllipsis
  },
  data() {
    return {
      cards: [
        {
          title: '卡片1卡片1卡片1卡片1卡片1卡片1卡片1卡片1卡片1卡片1卡片1卡片1卡片1卡片1卡片1',
          desc: '内容1',
          avatar: 'https://toolwa.com/favicon.png',
          actions: '操作'
        },
        {
          title: '卡片2',
          desc: '内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2',
          avatar: 'https://toolwa.com/favicon.png',
          actions: '操作'
        },
        {
          title: '卡片3',
          desc: '内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2',
          avatar: 'https://toolwa.com/favicon.png'
        },
        {
          title: '卡片4',
          desc: '内容4',
          avatar: 'https://toolwa.com/favicon.png'
        },
        {
          title: '卡片5',
          desc: '内容5',
          avatar: 'https://toolwa.com/favicon.png'
        },
        {
          title: '卡片6',
          desc: '内容6',
          avatar: 'https://toolwa.com/favicon.png'
        },
        {
          title: '卡片7',
          desc: '内容7',
          avatar: 'https://toolwa.com/favicon.png'
        },
        {
          title: '卡片8',
          desc: '11',
          avatar: 'https://toolwa.com/favicon.png'
        }
      ],
      activedIndex: 0
    };
  },
  methods: {
    handleCardClick(index) {
      console.log('Card clicked:', index);
      this.activedIndex = index;
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  padding: 24px;
  min-height: 100vh;
}
</style>
