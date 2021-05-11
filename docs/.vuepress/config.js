const path = require('path');

module.exports = {
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
        nav: require('./nav/nav'),
        smoothScroll: true,
        sidebar: {
            '/fe/': getFeSidebar('HTML', 'CSS', 'JavaScript', 'Tools'),
            '/server/': getServerSidebar('Ubuntu'),
            '/others/': getOthersSidebar('Git'),
        },
    },
    plugins: [
        [
            'vuepress-plugin-clean-urls',
            {
                normalSuffix: '/',
            },
        ],
        '@vuepress/back-to-top',
        '@vuepress/medium-zoom',
    ],
    extraWatchFiles: ['.vuepress/nav/nav.js'],
    markdown: {
        lineNumbers: true,
    },
};

function getFeSidebar(groupA, groupB, groupC, groupD) {
    return [
        '',
        {
            title: groupA,
            path: '/html/',
            collapsable: false,
            children: ['basic-html'],
        },
        {
            title: groupB,
            path: '/css/',
            collapsable: false,
            children: ['basic-css'],
        },
        {
            title: groupC,
            path: '/javascript/',
            collapsable: false,
            children: ['', 'basic-javascript'],
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
