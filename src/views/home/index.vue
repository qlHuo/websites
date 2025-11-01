<template>
  <div class="nav">
    <div class="overlay" :class="{ active: mobileSidebarOpen }" @click="handleCloseMobileSidebar"></div>
    <!-- 左侧菜单区域 -->
    <aside class="nav-menu">
      <div class="nav-logo">
        <HiIcon name="icon-web" size="24" />
        <span class="ml-8" v-if="!collapsed">Hi导航</span>
      </div>
      <t-menu style="height: calc(100% - 60px)" :value="null" :collapsed="collapsed">
        <t-menu-item v-for="item in websiteData" :key="item.id" :value="item.id" @click="handleClickMenuItem(item)">
          <HiIcon slot="icon" :name="item.icon" size="20" />
          <span class="ml-8">{{ item.title }}</span>
        </t-menu-item>
      </t-menu>
    </aside>
    <!-- 右侧内容区域 -->
    <section class="nav-content">
      <div class="nav-content-header">
        <HiIcon
          v-if="showMobile"
          @click="handleToggleMenu"
          style="color: var(--td-font-white-1)"
          size="20"
          name="icon-cebianzhedie2"
        />
        <HiIcon
          v-else
          :name="collapsed ? 'icon-cebianzhedie2' : 'icon-cebianzhedie1'"
          size="20"
          @click="handleToggleMenu"
          style="color: var(--td-font-white-1)"
        />
      </div>
      <div class="nav-content-wrapper">
        <div class="nav-content-wrapper-search">
          <div class="search-img-left">
            <img :src="bannerLeft" alt="bannerLeft" height="100%" />
          </div>
          <div class="search-content">
            <h2 class="search-slogan">构建自己的导航菜单</h2>
            <t-input-adornment>
              <t-select
                :size="searchSize"
                style="width: 82px"
                slot="prepend"
                v-model="searchEngine"
                :options="searchEngineOpts"
              />
              <t-input :size="searchSize" v-model="searchValue" placeholder="请输入搜索内容" @enter="handleSearch" />
              <t-button :size="searchSize" slot="append" style="width: 88px" theme="warning" @click="handleSearch">
                搜 索
              </t-button>
            </t-input-adornment>
            <div class="yiyan">
              <div class="yiyan-hitokoto">{{ yiyanWords?.hitokoto }}</div>
              <div class="yiyan-author" v-if="yiyanWords?.from">—— {{ yiyanWords?.from_who }}</div>
            </div>
            <div class="search-img-bottom">
              <img :src="bannerBottom" alt="bannerBottom" width="100%" />
            </div>
          </div>
          <div class="search-img-right">
            <img :src="bannerRight" alt="bannerRight" height="100%" />
          </div>
        </div>
        <div class="nav-content-wrapper-list">
          <div class="nav-content-list-item" v-for="item in websiteData" :key="item.id">
            <h3 :id="item.key">{{ item.title }}</h3>
            <HiCard :col="4" :gutter="16" :xl="6" :lg="5" :md="4" :sm="3" :xs="2">
              <HiCardItem
                style="background-color: var(--td-font-white-1)"
                v-for="(child, index) in item.children"
                :key="index"
                :icon="child.icon"
                :title="child.title"
                :content="child.desc"
                @click="handleCardClick(child)"
              ></HiCardItem>
            </HiCard>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import bannerLeft from '@/assets/images/banner-left.png';
import bannerRight from '@/assets/images/banner-right.png';
import bannerBottom from '@/assets/images/banner-bottom.png';
import websiteData from '@/constant/website';

export default {
  name: 'index',
  components: {},
  data() {
    return {
      websiteData,
      bannerLeft,
      bannerRight,
      bannerBottom,
      mobileSidebarOpen: false,
      collapsed: false,
      showMobile: false,
      searchEngine: 'bing',
      searchSize: 'large',
      searchEngineOpts: [
        { label: '必应', value: 'bing' },
        { label: '百度', value: 'baidu' },
        { label: '谷歌', value: 'google' }
      ],
      searchValue: '',
      yiyanWords: {}
    };
  },
  watch: {
    showMobile(newVal) {
      this.searchSize = newVal ? 'medium' : 'large';
    }
  },
  mounted() {
    this.getYiYanWords();
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    getYiYanWords() {
      fetch('https://v1.hitokoto.cn/?c=i')
        .then(response => response.json())
        .then(data => {
          this.yiyanWords = data;
        })
        .catch(error => {
          console.error('获取一言失败：', error);
        });
    },
    handleResize() {
      if (document.body.offsetWidth < 1280) {
        this.showMobile = true;
        this.collapsed = false;
        this.mobileSidebarOpen = false;
        const navMenu = document.querySelector('.nav-menu');
        navMenu.style.transform = 'translateX(-100%)';
      } else {
        this.showMobile = false;
        this.mobileSidebarOpen = false;
        this.collapsed = false;
        const navMenu = document.querySelector('.nav-menu');
        navMenu.style.transform = 'translateX(0)';
      }
    },
    // 关闭移动端侧边栏
    handleCloseMobileSidebar() {
      this.mobileSidebarOpen = false;
      this.collapsed = true;
      // 隐藏导航菜单
      const navMenu = document.querySelector('.nav-menu');
      navMenu.style.transform = 'translateX(-100%)';
    },

    // 切换菜单显示与隐藏
    handleToggleMenu() {
      // web端大屏幕
      if (document.body.offsetWidth > 1280) {
        this.collapsed = !this.collapsed;
      } else {
        // 移动端小屏幕
        this.collapsed = false;
        const navMenu = document.querySelector('.nav-menu');
        navMenu.style.transform = 'translateX(0)';
        this.mobileSidebarOpen = true;
      }
    },
    handleClickMenuItem(item) {
      // 获取目标元素id（从按钮href属性提取，如href="#target"）
      const targetId = item.key;
      // 找到目标元素
      const targetElement = document.getElementById(targetId);
      // 平滑滚动到目标位置
      targetElement.scrollIntoView({ behavior: 'smooth' });
    },
    handleSearch() {
      if (this.searchValue.trim() === '') {
        this.$message.warning('请输入搜索内容');
        return;
      }
      const searchMap = {
        bing: 'https://cn.bing.com/search?q=',
        baidu: 'https://www.baidu.com/s?wd=',
        google: 'https://www.google.com/search?q='
      };
      const searchUrl = searchMap[this.searchEngine] + encodeURIComponent(this.searchValue.trim());
      window.open(searchUrl, '_blank');
    },

    handleCardClick(card) {
      if (card.url) {
        window.open(card.url, '_blank');
      }
    }
  }
};
</script>

<style lang="less" scoped>
.nav {
  display: flex;
  height: 100%;
  width: 100%;
  background-color: var(--website-bg-color);
  // 遮罩层
  .overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 998;

    &.active {
      display: block;
    }
  }
  &-logo {
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0 24px;
    background: var(--td-brand-color);
    color: var(--td-font-white-1);
  }
  &-menu {
    height: 100%;
    background-color: #fff;
    transition: all 0.3s ease;
    transform: translateX(0);
    @media screen and (max-width: 1280px) {
      position: absolute;
      z-index: 999;
      transform: translateX(-100%);
    }
  }

  &-content {
    flex: 1;
    &-header {
      height: 60px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
      display: flex;
      align-items: center;
      background-color: var(--td-brand-color);
      padding: 0 24px;
    }
    &-wrapper {
      padding: 16px 24px;
      height: calc(100% - 76px);
      overflow: auto;
      &-search {
        display: flex;
        height: 240px;
        background: var(--td-brand-color);
        border-radius: 8px;
        @media screen and (max-width: 1280px) {
          .search-img-left,
          .search-img-right {
            display: none;
          }
        }
        .search-img-left {
          width: auto;
          height: 100%;
        }
        .search-img-right {
          width: auto;
          height: 100%;
        }
        .search-content {
          position: relative;
          flex: 1;
          text-align: center;
          margin: 40px 40px 0;

          .search-slogan {
            color: var(--td-font-white-1);
          }
          .search-img-bottom {
            margin-top: 16px;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            img {
              display: block;
            }
          }
          ::v-deep .t-input--focused {
            border: none;
            box-shadow: none;
          }
          ::v-deep .t-input__inner {
            width: 100%;
          }

          .yiyan {
            position: absolute;
            right: 0;
            margin-top: 12px;
            width: 100%;
            color: var(--td-font-white-1);
            text-align: right;
            z-index: 99;
            .yiyan-hitokoto {
              font-size: 14px;
              font-style: italic;
              margin-bottom: 8px;
            }
            .yiyan-author {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>
