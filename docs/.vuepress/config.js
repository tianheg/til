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
        '@vuepress/medium-zoom',
        [
            '@vuepress/last-updated',
            {
                dateOptions: {
                    hour12: false,
                },
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
            children: ['tools/vscode'],
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