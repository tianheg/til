const path = require('path');
const wikilinks = require('vuepress-markdown-it-wikilink');

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
            '/basic/': getBasicSidebar(
                'HTML',
                'CSS',
                'JavaScript',
                'Git',
                'Network',
                'GPG',
                'Hardware',
                'Python',
                'Ubuntu',
                'SH',
                'Tools',
                'Node.js'
            ),
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
        // [
        //     'vuepress-plugin-clean-urls',
        //     {
        //         normalSuffix: '/',
        //     },
        // ],
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
function getBasicSidebar(
    groupA,
    groupB,
    groupC,
    groupD,
    groupE,
    groupF,
    groupG,
    groupH,
    groupI,
    groupJ,
    groupK,
    groupL
) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: ['html/basic-html', 'html/examples'],
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                'css/way',
                'css/basic-css',
                'css/examples',
                'color/basic',
            ],
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
            children: ['git/', 'git/basic-usage', 'git/github'],
        },
        {
            title: groupE,
            collapsable: false,
            children: [
                'network/',
                'network/protocol',
                'dns/dns-resolution-smooth-migration',
            ],
        },
        {
            title: groupF,
            collapsable: false,
            children: [
                'gpg/import-github-key',
                'gpg/can-not-change-name-or-comment-without-losing-signatures',
            ],
        },
        {
            title: groupG,
            collapsable: false,
            children: ['hardware/', 'hardware/bluetooth', 'hardware/power'],
        },
        {
            title: groupH,
            collapsable: false,
            children: ['python/basic-python', 'python/examples'],
        },
        'linux',
        {
            title: groupI,
            collapsable: false,
            children: [
                'ubuntu/intro',
                'ubuntu/install-software',
                'ubuntu/i-want-to',
                'ubuntu/backup',
                'ubuntu/problems',
            ],
        },
        {
            title: groupJ,
            collapsable: false,
            children: ['sh/examples'],
        },
        {
            title: groupK,
            collapsable: false,
            children: [
                'tools/chrome',
                'tools/emacs',
                'tools/emmet',
                'tools/eslint-prettier',
                'tools/firefox',
                'tools/gulp',
                'tools/nodejs',
                'tools/resilio-sync',
                'tools/vscode',
            ],
        },
        {
            title: groupL,
            collapsable: false,
            children: [
                'nodejs/install-nodejs-npm',
                'nodejs/used-packages',
                'nodejs/sources',
            ],
        },
    ];
}
