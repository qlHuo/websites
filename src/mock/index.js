import Mock from 'mockjs';

// 设置响应延时
Mock.setup({
  timeout: '200-600'
});

// 导航数据
Mock.mock(/\/api\/nav\/list/, 'get', {
  code: 200,
  message: 'success',
  data: [
    // AI导航 - 智能对话
    {
      id: 1,
      title: '文心一言',
      url: 'https://yiyan.baidu.com',
      icon: 'https://www.baidu.com/favicon.ico',
      description: '百度出品的AI对话模型',
      category: 'ai',
      subCategory: 'ai-chat'
    },
    {
      id: 2,
      title: '通义千问',
      url: 'https://qianwen.aliyun.com',
      icon: 'https://img.alicdn.com/tfs/TB1_ZXuNcfpK1RjSZFOXXa6nFXa-32-32.ico',
      description: '阿里云出品的AI对话模型',
      category: 'ai',
      subCategory: 'ai-chat'
    },
    {
      id: 3,
      title: '讯飞星火',
      url: 'https://xinghuo.xfyun.cn',
      icon: 'https://www.xfyun.cn/favicon.ico',
      description: '科大讯飞出品的AI对话模型',
      category: 'ai',
      subCategory: 'ai-chat'
    },
    {
      id: 4,
      title: '智谱AI',
      url: 'https://chatglm.cn',
      icon: 'https://zhipu.ai/favicon.ico',
      description: '清华智谱AI对话模型',
      category: 'ai',
      subCategory: 'ai-chat'
    },

    // AI导航 - 图像生成
    {
      id: 11,
      title: '文心一格',
      url: 'https://yige.baidu.com',
      icon: 'https://www.baidu.com/favicon.ico',
      description: '百度出品的AI绘画平台',
      category: 'ai',
      subCategory: 'ai-image'
    },
    {
      id: 12,
      title: '腾讯智影',
      url: 'https://zenvideo.qq.com',
      icon: 'https://zenvideo.qq.com/favicon.ico',
      description: '腾讯出品的AI创作平台',
      category: 'ai',
      subCategory: 'ai-image'
    },
    {
      id: 13,
      title: 'DALL·E',
      url: 'https://labs.openai.com',
      icon: 'https://labs.openai.com/favicon.ico',
      description: 'OpenAI的AI绘画模型',
      category: 'ai',
      subCategory: 'ai-image'
    },
    {
      id: 14,
      title: '文心一格',
      url: 'https://yige.baidu.com',
      icon: 'https://yige.baidu.com/favicon.ico',
      description: '百度的AI绘画平台',
      category: 'ai',
      subCategory: 'ai-image'
    },

    // 前端开发 - 社区
    {
      id: 101,
      title: '稀土掘金',
      url: 'https://juejin.cn',
      icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/favicon-32x32.png',
      description: '面向全球中文开发者的技术内容分享与交流平台',
      category: 'frontend',
      subCategory: 'community'
    },
    {
      id: 102,
      title: '开源中国',
      url: 'https://www.oschina.net',
      icon: 'https://www.oschina.net/favicon.ico',
      description: '中文开源技术交流社区',
      category: 'frontend',
      subCategory: 'community'
    },
    {
      id: 103,
      title: 'CSDN',
      url: 'https://www.csdn.net',
      icon: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
      description: '专业IT技术社区',
      category: 'frontend',
      subCategory: 'community'
    },
    {
      id: 104,
      title: 'V2EX',
      url: 'https://v2ex.com',
      icon: 'https://v2ex.com/favicon.ico',
      description: '创意工作者的社区',
      category: 'frontend',
      subCategory: 'community'
    },

    // 前端开发 - 框架工具
    {
      id: 111,
      title: 'Vue.js',
      url: 'https://vuejs.org',
      icon: 'https://vuejs.org/logo.svg',
      description: '渐进式JavaScript框架',
      category: 'frontend',
      subCategory: 'framework'
    },
    {
      id: 112,
      title: 'React',
      url: 'https://reactjs.org',
      icon: 'https://reactjs.org/favicon.ico',
      description: 'Facebook开发的UI库',
      category: 'frontend',
      subCategory: 'framework'
    },
    {
      id: 113,
      title: 'Angular',
      url: 'https://angular.io',
      icon: 'https://angular.io/favicon.ico',
      description: 'Google开发的前端框架',
      category: 'frontend',
      subCategory: 'framework'
    },
    {
      id: 114,
      title: 'Vite',
      url: 'https://vitejs.dev',
      icon: 'https://vitejs.dev/logo.svg',
      description: '下一代前端构建工具',
      category: 'frontend',
      subCategory: 'framework'
    },

    // 开发工具 - 代码托管
    {
      id: 301,
      title: 'GitHub',
      url: 'https://github.com',
      icon: 'https://github.com/favicon.ico',
      description: '全球最大的代码托管平台',
      category: 'tools',
      subCategory: 'tools-code'
    },
    {
      id: 302,
      title: 'Gitee',
      url: 'https://gitee.com',
      icon: 'https://gitee.com/assets/favicon.ico',
      description: '国内最大的代码托管平台',
      category: 'tools',
      subCategory: 'tools-code'
    },
    {
      id: 303,
      title: 'GitLab',
      url: 'https://gitlab.com',
      icon: 'https://gitlab.com/favicon.ico',
      description: '开源的代码托管平台',
      category: 'tools',
      subCategory: 'tools-code'
    },
    {
      id: 304,
      title: 'Coding',
      url: 'https://coding.net',
      icon: 'https://coding.net/favicon.ico',
      description: '一站式软件研发管理平台',
      category: 'tools',
      subCategory: 'tools-code'
    },

    // 开发工具 - IDE
    {
      id: 311,
      title: 'VS Code',
      url: 'https://code.visualstudio.com',
      icon: 'https://code.visualstudio.com/favicon.ico',
      description: '微软出品的代码编辑器',
      category: 'tools',
      subCategory: 'tools-ide'
    },
    {
      id: 312,
      title: 'WebStorm',
      url: 'https://www.jetbrains.com/webstorm',
      icon: 'https://resources.jetbrains.com/storage/products/webstorm/img/meta/webstorm_logo_300x300.png',
      description: '功能强大的JavaScript IDE',
      category: 'tools',
      subCategory: 'tools-ide'
    },
    {
      id: 313,
      title: 'Sublime Text',
      url: 'https://www.sublimetext.com',
      icon: 'https://www.sublimetext.com/favicon.ico',
      description: '轻量级代码编辑器',
      category: 'tools',
      subCategory: 'tools-ide'
    },
    {
      id: 314,
      title: 'Atom',
      url: 'https://atom.io',
      icon: 'https://atom.io/favicon.ico',
      description: 'GitHub出品的编辑器',
      category: 'tools',
      subCategory: 'tools-ide'
    },

    // 设计资源
    {
      id: 201,
      title: '站酷',
      url: 'https://www.zcool.com.cn',
      icon: 'https://static.zcool.cn/git_z/z/site/favicon.ico',
      description: '设计师互动平台',
      category: 'design',
      subCategory: 'design-resource'
    },
    {
      id: 202,
      title: '花瓣网',
      url: 'https://huaban.com',
      icon: 'https://huaban.com/favicon.ico',
      description: '图片素材领导者',
      category: 'design',
      subCategory: 'design-resource'
    },
    {
      id: 203,
      title: 'UI中国',
      url: 'https://www.ui.cn',
      icon: 'https://www.ui.cn/favicon.ico',
      description: 'UI设计师学习交流平台',
      category: 'design',
      subCategory: 'design-resource'
    },
    {
      id: 204,
      title: '优设网',
      url: 'https://www.uisdc.com',
      icon: 'https://www.uisdc.com/favicon.ico',
      description: '设计师交流学习平台',
      category: 'design',
      subCategory: 'design-resource'
    },

    // 学习平台
    {
      id: 401,
      title: '慕课网',
      url: 'https://www.imooc.com',
      icon: 'https://www.imooc.com/favicon.ico',
      description: '程序员的实战视频课程平台',
      category: 'learning',
      subCategory: 'learning-platform'
    },
    {
      id: 402,
      title: '腾讯课堂',
      url: 'https://ke.qq.com',
      icon: 'https://ke.qq.com/favicon.ico',
      description: '专业的在线教育平台',
      category: 'learning',
      subCategory: 'learning-platform'
    },
    {
      id: 403,
      title: '网易云课堂',
      url: 'https://study.163.com',
      icon: 'https://study.163.com/favicon.ico',
      description: '网易旗下在线教育平台',
      category: 'learning',
      subCategory: 'learning-platform'
    },
    {
      id: 404,
      title: '腾讯课堂',
      url: 'https://ke.qq.com',
      icon: 'https://ke.qq.com/favicon.ico',
      description: '专业的在线教育平台',
      category: 'learning',
      subCategory: 'learning-platform'
    }
  ]
});

// 导航分类数据
Mock.mock(/\/api\/nav\/categories/, 'get', {
  code: 200,
  message: 'success',
  data: [
    {
      label: 'AI导航',
      value: 'ai',
      icon: 'robot',
      type: 'submenu',
      children: [
        { label: '智能对话', value: 'ai-chat', icon: 'chat' },
        { label: '图像生成', value: 'ai-image', icon: 'image' },
        { label: '代码助手', value: 'ai-code', icon: 'code' }
      ]
    },
    {
      label: '前端开发',
      value: 'frontend',
      icon: 'code',
      type: 'submenu',
      children: [
        { label: '开发社区', value: 'community', icon: 'usergroup' },
        { label: '框架工具', value: 'framework', icon: 'tool' },
        { label: '学习资源', value: 'resource', icon: 'book' }
      ]
    },
    {
      label: '开发工具',
      value: 'tools',
      icon: 'tools',
      description: '常用开发工具集合',
      type: 'submenu',
      children: [
        {
          label: '代码托管',
          value: 'tools-code',
          icon: 'git',
          description: '代码托管平台'
        },
        {
          label: '开发环境',
          value: 'tools-ide',
          icon: 'desktop',
          description: '开发工具和IDE'
        },
        {
          label: '效率工具',
          value: 'tools-productivity',
          icon: 'tools',
          description: '提升效率的工具'
        }
      ]
    },
    {
      label: '热门推荐',
      value: 'hot',
      icon: 'star',
      description: '热门网站推荐',
      type: 'item'
    },
    {
      label: '最近更新',
      value: 'recent',
      icon: 'time',
      description: '最近更新的网站',
      type: 'item'
    },
    {
      label: '学习资源',
      value: 'learning',
      icon: 'book',
      description: '在线学习平台导航',
      children: [
        {
          label: '前端开发',
          value: 'learning-frontend',
          icon: 'code',
          description: '前端开发学习资源'
        },
        {
          label: '后端开发',
          value: 'learning-backend',
          icon: 'server',
          description: '后端开发学习资源'
        },
        {
          label: '移动开发',
          value: 'learning-mobile',
          icon: 'mobile',
          description: '移动开发学习资源'
        },
        {
          label: '大数据',
          value: 'learning-bigdata',
          icon: 'chart',
          description: '大数据学习资源'
        }
      ]
    },
    {
      label: '设计资源',
      value: 'design',
      icon: 'image',
      description: '设计相关资源导航',
      children: [
        {
          label: 'UI设计',
          value: 'design-ui',
          icon: 'layout',
          description: 'UI设计资源'
        },
        {
          label: '平面设计',
          value: 'design-graphic',
          icon: 'image',
          description: '平面设计资源'
        },
        {
          label: '设计素材',
          value: 'design-resource',
          icon: 'template',
          description: '设计素材资源'
        }
      ]
    }
  ]
});
