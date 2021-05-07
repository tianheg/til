// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/front-end/',
    items: [
      {
        text: '前端文章',
        items: [
          { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' },
          { text: 'Vue', link: '/pages/5d463fbdb172d43b/' },
        ],
      },
      {
        text: '学习笔记',
        items: [
          { text: '《JavaScript教程》笔记', link: '/note/javascript/' },
          { text: '《JavaScript高级程序设计》笔记', link: '/note/js/' },
          { text: '《ES6 教程》笔记', link: '/note/es6/' },
          { text: '《Vue》笔记', link: '/note/vue/' },
          { text: '《React》笔记', link: '/note/react/' },
          {
            text: '《TypeScript 从零实现 axios》',
            link: '/note/typescript-axios/',
          },
          {
            text: '《Git》学习笔记',
            link: '/note/git/',
          },
          {
            text: 'TypeScript笔记',
            link: '/pages/51afd6/',
          },
          {
            text: 'JS设计模式总结笔记',
            link: '/pages/4643cd/',
          },
        ],
      },
    ],
  },
  {
    text: '后端',
    link: '/back-end/',
    items: [
      { text: 'HTML', link: '/pages/8309a5b876fc95e3/' },
      { text: 'CSS', link: '/pages/0a83b083bdf257cb/' },
    ],
  },
  {
    text: '其他',
    link: '/others/',
    items: [
      { text: '技术文档', link: '/pages/9a7ee40fc232253e/' },
      { text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/' },
      { text: 'Nodejs', link: '/pages/117708e0af7f0bd9/' },
      { text: '博客搭建', link: '/pages/41f87d890d0a02af/' },
    ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
