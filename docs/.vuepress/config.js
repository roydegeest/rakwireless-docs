module.exports = {
  locales: {
    '/en-us/': {
      lang: 'en-US',
      title: 'RAKwireless Document Center',
      description: 'RAKwireless Knowledge Hub'
    },
    '/zh-cn/': {
      lang: 'zh-CN',
      title: 'RAKwireless Document Center',
      description: 'RAKwireless Knowledge Hub'
    }
  },
  head: [
    ['link', {
      rel: 'icon',
      href: `/favicon.ico`
    }],
<<<<<<< HEAD
    ['script', { src: '/js/livechat.js' }]
=======
    ['script', {}, `
 
    function initFreshChat() {
      window.fcWidget.init({
        token: "15eb72a9-7ba6-43c6-9923-4a6769c7b9bc",
        host: "https://wchat.freshchat.com"
      });
    }
    function initialize(i,t){var e;i.getElementById(t)?initFreshChat():((e=i.createElement("script")).id=t,e.async=!0,e.src="https://wchat.freshchat.com/js/widget.js",e.onload=initFreshChat,i.head.appendChild(e))}function initiateCall(){initialize(document,"freshchat-js-sdk")}window.addEventListener?window.addEventListener("load",initiateCall,!1):window.attachEvent("load",initiateCall,!1);
    `]
>>>>>>> f9079a55e9ec2b7bdd07878a8e12e468bb666fae
  ],
  themeConfig: {
    logo: '/assets/rakwireless/rak-blue-dark.svg',
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
        sidebar: require('./includes/sidebar/en-us'),
        nav: require('./includes/nav/en-us')
      },
      '/zh-cn/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        sidebar: require('./includes/sidebar/zh-cn'),
        nav: require('./includes/nav/zh-cn')
      }
    },
    pageFooter: [
      '© 2014-2020 Shenzhen RAKwireless Technology Co., Ltd.',
      'All rights reserved. 粤ICP备16112976号'
    ]
  },
  plugins: {
    'sitemap': {
      hostname: 'https://docs.rakwireless.com/'
    },
    'redirect': {
      locales: true,
    },
    'robots': {
      host: "https://docs.rakwireless.com/",
      sitemap: "/sitemap.xml",
      policies: [{
        userAgent: '*',
        disallow: [
          '/'
        ],
        allow: []
      }]
    },
    '@vuepress/medium-zoom': {
      selector: '.zoomable',
      delay: 200,
      options: {},
    },
    // '@vuepress/back-to-top': {},
    'vuepress-plugin-code-copy': {
      selector: String,
      align: String,
      color: String,
      backgroundTransition: Boolean,
      backgroundColor: String,
      successText: String
    },
  },
  markdown: {
    extendMarkdown: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-include'), 'docs')
    }
  },
  extraWatchFiles: [
    '.vuepress/*/.js'
  ],
  chainWebpack (config) {
    config.resolve.alias.set('@variables', require('path').resolve(__dirname, 'styles/variables.styl'))
  }
}