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
        nav: require('./nav'),
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
            path: '/fe/html/',
            collapsable: false,
            children: ['basic-html'],
        },
        {
            title: groupB,
            path: '/fe/css/',
            collapsable: false,
            children: ['basic-css'],
        },
        {
            title: groupC,
            path: '/fe/javascript/',
            collapsable: false,
            children: ['', 'basic-javascript'],
        },
        {
            title: groupD,
            path: '/fe/tools/',
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
            path: '/server/ubuntu/',
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
            path: '/others/git/',
            collapsable: false,
            children: ['', 'basic-usage'],
        },
        'resilio-sync',
    ];
}
