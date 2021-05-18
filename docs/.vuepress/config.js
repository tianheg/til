const path = require('path');
const wikilinks = require('vuepress-markdown-it-wikilink')

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
        sidebarDepth: 2,
        sidebar: {
            '/fe/': getFeSidebar('HTML', 'CSS', 'JavaScript', 'Color', 'Tools'),
            '/server/': getServerSidebar('Ubuntu'),
            '/others/': getOthersSidebar('Git', 'Hardware', 'Network'),
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
            'vuepress-plugin-clean-urls',
            {
                normalSuffix: '/',
            },
        ],
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
        extendMarkdown: (md) => {
            md.use(wikilinks);
        },
    },
    extraWatchFiles: ['.vuepress/nav.js'],
});
function getFeSidebar(groupA, groupB, groupC, groupD, groupE) {
    return [
        '',
        {
            title: groupA,
            collapsable: false,
            children: ['html/basic-html', 'html/examples'],
        },
        {
            title: groupB,
            collapsable: false,
            children: ['css/way', 'css/basic-css', 'css/examples'],
        },
        {
            title: groupC,
            collapsable: false,
            children: [
                'javascript/way',
                'javascript/basic-javascript',
                'javascript/es6',
                'javascript/examples',
            ],
        },
        {
            title: groupD,
            collapsable: false,
            children: ['color/basic'],
        },
        {
            title: groupE,
            collapsable: false,
            children: [
                'tools/nodejs',
                'tools/eslint-prettier',
                'tools/vscode',
                'tools/chrome',
                'tools/emmet',
            ],
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

function getOthersSidebar(groupA, groupB, groupC) {
    return [
        '',
        'resilio-sync',
        'backup',
        {
            title: groupA,
            collapsable: false,
            children: ['git/', 'git/basic-usage'],
        },
        {
            title: groupB,
            collapsable: false,
            children: ['hardware/', 'hardware/power', 'hardware/bluetooth'],
        },
        {
            title: groupC,
            collapsable: false,
            children: ['network/', 'network/protocol'],
        },
    ];
}
