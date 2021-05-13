const path = require('path');

module.exports = (ctx) => ({
    title: 'TIL',
    description: 'Today I Learnt',
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
        sidebarDepth: 2,
        sidebar: {
            '/fe/': getFeSidebar('HTML', 'CSS', 'JavaScript', 'Tools'),
            '/server/': getServerSidebar('Ubuntu'),
            '/others/': getOthersSidebar('Git'),
        },
    },
    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/container', // https://vuepress.github.io/reference/default-theme/markdown.html
        '@vuepress/last-updated',
        '@vuepress/medium-zoom',
        '@vuepress/nprogress',
        'one-click-copy',
        'fulltext-search',
        'last-reading',
        'element-ui',
        [
            'thirdparty-search',
            {
                thirdparty: [
                    {
                        title: '在MDN中搜索',
                        frontUrl:
                            'https://developer.mozilla.org/en-US/search?q=',
                        behindUrl: '',
                    },
                    {
                        title: '在Runoob中搜索',
                        frontUrl: 'https://www.runoob.com/?s=',
                        behindUrl: '',
                    },
                ],
            },
        ],
    ],
    markdown: {
        lineNumbers: true,
    },
    extraWatchFiles: ['.vuepress/nav.js'],
});
function getFeSidebar(groupA, groupB, groupC, groupD) {
    return [
        '',
        {
            title: groupA,
            collapsable: false,
            children: ['html/basic-html'],
        },
        {
            title: groupB,
            collapsable: false,
            children: ['css/basic-css'],
        },
        {
            title: groupC,
            collapsable: false,
            children: ['javascript/basic-javascript'],
        },
        {
            title: groupD,
            collapsable: false,
            children: ['tools/vscode', 'tools/chrome', 'tools/emmet'],
        },
    ];
}

function getServerSidebar(groupA) {
    return [
        '',
        'linux',
        {
            title: groupA,
            collapsable: false,
            children: [
                'ubuntu/intro',
                'ubuntu/install-software',
                'ubuntu/i-want-to',
                'ubuntu/problems',
            ],
        },
    ];
}

function getOthersSidebar(groupA) {
    return [
        '',
        {
            title: groupA,
            collapsable: false,
            children: ['git/', 'git/basic-usage'],
        },
        'resilio-sync',
    ];
}
