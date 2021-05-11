const path = require('path');

module.exports = (ctx) => ({
    title: 'TIL',
    description: '今天我学习了',
    theme: 'book',
    themeConfig: {
        repo: 'tianheg/til',
        searchPlaceholder: '搜索……',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: '在 Github 上编辑',
        nav: require('./nav'),
        smoothScroll: true,
        lastUpdated: '上次更新',
        sidebarDepth: 2,
        sidebar: [
            {
                title: 'HTML',
                collapsable: false,
                children: ['/fe/html/basic-html'],
            },
            {
                title: 'CSS',
                collapsable: false,
                children: ['/fe/css/basic-css'],
            },
            {
                title: 'JavaScript',
                collapsable: false,
                children: ['/fe/javascript/basic-javascript'],
            },
            {
                title: 'Tools',
                collapsable: false,
                children: ['/fe/tools/vscode'],
            },
            {
                title: 'Ubuntu',
                collapsable: false,
                children: [
                    '/ubuntu/intro',
                    '/ubuntu/install-software',
                    '/ubuntu/i-want-to',
                    '/ubuntu/problems',
                ],
            },
            {
                title: 'Git',
                collapsable: false,
                children: ['/git/', '/git/basic-usage'],
            },
        ],
    },
    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/medium-zoom',
        [
            '@vuepress/last-updated',
            {
                dateOptions: {
                    hour8: true,
                },
            },
        ],
    ],
    markdown: {
        lineNumbers: true,
    },
    extraWatchFiles: ['.vuepress/nav.js'],
});