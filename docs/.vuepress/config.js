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
            children: [['/fe/html/basic-html', 'Basic HTML']],
        },
        {
            title: groupB,
            collapsable: false,
            children: [['/fe/css/basic-css','Basic CSS']],
        },
        {
            title: groupC,
            collapsable: false,
            children: [['/fe/javascript/basic-javascript/','Basic JavaScript']],
        },
        {
            title: groupD,
            collapsable: false,
            children: [['/fe/tools/vscode', 'VS Code']],
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
                '/server/ubuntu/intro',
                '/server/ubuntu/install-software',
                '/server/ubuntu/i-want-to',
                '/server/ubuntu/problems',
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
            children: ['/others/git/', '/others/git/basic-usage'],
        },
        'resilio-sync',
    ];
}
