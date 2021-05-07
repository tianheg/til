const nav = require('./themeConfig/nav.js');
const sidebar = require('./themeConfig/sidebar.js');

// 主题配置
module.exports = {
  nav,
  sidebarDepth: 2,
  logo: '/img/logo.png',
  repo: 'tianheg/til',
  searchMaxSuggestions: 10,
  lastUpdated: '上次更新',
  docsDir: 'docs',
  editLinks: true,
  editLinkText: '编辑',
  sidebar: 'structuring',
}
