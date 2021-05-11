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
        sidebar: {
            '/fe/': [
                '',
                {
                    title: 'HTML',
                    collapsable: false,
                    children: ['/html/basic-html'],
                },
                {
                    title: 'CSS',
                    collapsable: false,
                    children: ['/css/basic-css'],
                },
                {
                    title: 'JavaScript',
                    collapsable: false,
                    children: [
                        '/javascript/basic-javascript',
                    ],
                },
                {
                    title: 'Tools',
                    collapsable: false,
                    children: ['/tools/vscode'],
                },
            ],
            '/server/': [
                '',
                'linux',
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
            ],
            '/others/': [
                '',
                {
                    title: 'Git',
                    collapsable: false,
                    children: ['/git/', '/git/basic-usage'],
                },
                'resilio-sync',
            ],
        },
    },
    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/medium-zoom',
    ],
    markdown: {
        lineNumbers: true,
    },
    extraWatchFiles: ['.vuepress/nav.js'],
});