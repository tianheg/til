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
        activeHeaderLinks: false,
        sidebar: {
            '/fe/': [
                '',
                'html/basic-html',
                'css/basic-css',
                'javascript/basic-javascript',
            ],
            '/server/': [
                '',
                'linux',
                'ubuntu/intro',
                'ubuntu/install-software',
                'ubuntu/i-want-to',
                'ubuntu/problems',
            ],
            '/others/': ['', 'git/', 'git/basic-usage', 'resilio-sync'],
            '/': [
                '',
            ],
        },
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
