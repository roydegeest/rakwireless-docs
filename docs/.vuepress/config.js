module.exports = {
  base: '/rakwireless-docs/',
  locales: {
    '/en-us/': {
      lang: 'en-US',
      title: 'RAKwireless Document Center',
      description: 'RAKwireless Knowledge Hub'
    },
    // '/zh-cn/': {
    //   lang: 'zh-CN',
    //   title: null,
    //   description: 'RAKwireless Document Center'
    // }
  },
  themeConfig: {
    logo: '/rakwireless/rak-blue-dark.svg',
    sidebar: 'auto',
    repo: 'RAKwirelessDev/rakwireless-docs',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    smoothScroll: true,
    locales: {
      '/en-us/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page in GitHub',
        lastUpdated: 'Last Updated',
        nav: [
          { text: 'Home', link: '/en-us/' },
          { text: 'Quick Start', link: '/en-us/quick-start/' },
          { text: 'Data Sheet', link: '/en-us/data-sheet/' },
          { text: 'RUI', link: '/zh-cn/rui/' },
          { text: 'Downloads', link: 'https://downloads.rakwireless.com/' },
          { text: 'Store', link: 'https://store.rakwireless.com/' },
          { text: 'Forum', link: 'https://forum.rakwireless.com/' }
        ]
      },
      // '/zh-cn/': {
      //   selectText: '选择语言',
      //   label: '简体中文',
      //   editLinkText: '在 GitHub 上编辑此页',
      //   lastUpdated: '上次更新',
      //   nav: [
      //     { text: '家', link: '/zh-cn/' },
      //     { text: '快速开始', link: '/zh-cn/quick-start/' },
      //     { text: '数据表', link: '/zh-cn/data-sheet/' },
      //     { text: 'RUI', link: '/zh-cn/rui/' },
      //     { text: '下载中心', link: 'https://downloads.rakwireless.com/' },
      //     { text: '商店', link: 'https://store.rakwireless.com/' },
      //     { text: '论坛', link: 'https://forum.rakwireless.com/' }
      //   ]
      // }
    }
  },
  plugins: {
    'sitemap': {
      hostname: 'https://doc.rakwireless.com/'
    },
    'redirect': {
      locales: true,
    }
  }
}