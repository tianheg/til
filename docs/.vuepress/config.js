const path = require('path');

module.exports = {
    title: 'TIL',
    description: 'Today I Learned',
    theme: 'book',
    themeConfig: {
        repo: 'tianheg/til',
        searchPlaceholder: 'Search...',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Edit this page on Github',
        nav: require('./nav/nav'),
        smoothScroll: true,
        sidebar: {
            '/fe/': getFeSidebar(
                'HTML',
                'CSS',
                'JavaScript',
                'Tools'
            ),
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
            children: ['git/','git/basic-usage'],
        },
        'resilio-sync',
    ];
}
