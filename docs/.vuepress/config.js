module.exports = {
  locales: {
    '/en-us/': {
      lang: 'en-US',
      title: null,
      description: 'RAKwireless Document Center'
    },
    '/zh-cn/': {
      lang: 'zh-CN',
      title: null,
      description: 'RAKwireless Document Center'
    }
  },
  themeConfig: {
    logo: '/rakwireless/rak-blue-dark.svg',
    sidebar: 'auto',
    locales: {
      '/en-us/': {
        selectText: 'Languages',
        label: 'English',
        nav: [
          { text: 'Home', link: '/en-us/' },
          { text: 'Quick Start', link: '/zh-cn/quick-start/' },
          { text: 'Data Sheet', link: '/zh-cn/datasheet/' },
          { text: 'RUI', link: '/zh-cn/rui/' },
          { text: 'Downloads', link: 'https://downloads.rakwireless.com/' },
          { text: 'Store', link: 'https://store.rakwireless.com/' },
          { text: 'Forum', link: 'https://forum.rakwireless.com/' }
        ]
      },
      '/zh-cn/': {
        selectText: '选择语言',
        label: '简体中文',
        nav: [
          { text: '家', link: '/zh-cn/' },
          { text: '快速开始', link: '/zh-cn/quick-start/' },
          { text: '数据表', link: '/zh-cn/datasheet/' },
          { text: 'RUI', link: '/zh-cn/rui/' },
          { text: '下载中心', link: 'https://downloads.rakwireless.com/' },
          { text: '商店', link: 'https://store.rakwireless.com/' },
          { text: '论坛', link: 'https://forum.rakwireless.com/' }
        ]
      }
    }
  }
}