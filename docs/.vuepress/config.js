import { blogPlugin } from '@vuepress/plugin-blog'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import path from 'path'

export default defineUserConfig({
  lang: 'zh-CN',

  title: '郑千鹤的博客',
  description: '哦耶',

  theme: defaultTheme({
    logo: 'https://tse4.mm.bing.net/th/id/OIP.bFujutx-gmwcey8Ey2YB8wHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',

    navbar: [
      '/',
      {
        text: 'Article',
        link: '/article/',
      },
      {
        text: 'Category',
        link: '/category/leetcode每日一题/',
      },
      {
        text: 'Tag',
        link: '/tag/大模型/',
      },
      {
        text: 'Timeline',
        link: '/timeline/',
      },
    ],

    // 修改后的 sidebar 配置
    sidebar: {
      // 针对 leetcode 目录的侧边栏配置
      '/leetcode/': [
        {
          text: 'LeetCode 每日一题',
          collapsible: true,
          children: [
            '20250728.md',
            '20250729.md',
            '20250730.md',
            '20250731.md',
            '20250801.md',
            '20250802.md',
            '20250803.md',
            '20250804.md',
            '20250805.md',
            '20250806.md',
            '20250807.md',
            '20250808.md',
            '20250809.md',
            '20250810.md',
            '20250811.md',
            '20250812.md',
            '20250813.md',
            '20250814.md',
            '20250815.md',
            '20250816.md',
            '20250817.md',
            '20250818.md',
            '20250819.md',
            '20250820.md',
            '20250821.md',
            '20250822.md',
            '20250823.md',
            '20250824.md',
            '20250825.md',
            '20250826.md',
            '20250827.md',
            '20250828.md',
            '20250829.md',
            '20250830.md',
            '20250831.md',
          ],
        },
        {
          text: 'LeetCode 难题回顾',
          collapsible: true,
          children: [            
            '20250803.md',
            '20250807.md',
            '20250827.md',
            '20250831.md',
          ],
        },
        {
          text: 'LeetCode HOT100',
          collapsible: true,
          children: [            
            '20250803.md',
          ],
        },
        {
          text: '算法专题与总结',
          collapsible: true,
          children: [            
            '20250803.md',
          ],
        },

      ],
      '/llm/': [
        {
          text: 'LLM',
          collapsible: true,
          children: [
            'cortex.md',
            'RAG.md',
            'RL repo.md',
            'survey.md'
          ],
        },
      ]
    },
  }),

  plugins: [
    blogPlugin({
      // Only files under posts are articles
      filter: ({ filePathRelative }) =>
        filePathRelative ? filePathRelative.startsWith('leetcode/') || filePathRelative.startsWith('llm/') : false,

      // Getting article info
      getInfo: ({ frontmatter, title, data }) => ({
        title,
        author: frontmatter.author || '',
        date: frontmatter.date || null,
        category: frontmatter.category || [],
        tag: frontmatter.tag || [],
        excerpt:
          // Support manually set excerpt through frontmatter
          typeof frontmatter.excerpt === 'string'
            ? frontmatter.excerpt
            : data?.excerpt || '',
      }),

      // Generate excerpt for all pages excerpt those users choose to disable
      excerptFilter: ({ frontmatter }) =>
        !frontmatter.home &&
        frontmatter.excerpt !== false &&
        typeof frontmatter.excerpt !== 'string',

      category: [
        {
          key: 'category',
          getter: (page) => page.frontmatter.category || [],
          layout: 'Category',
          itemLayout: 'Category',
          frontmatter: () => ({
            title: 'Categories',
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `Category ${name}`,
            sidebar: false,
          }),
        },
        {
          key: 'tag',
          getter: (page) => page.frontmatter.tag || [],
          layout: 'Tag',
          itemLayout: 'Tag',
          frontmatter: () => ({
            title: 'Tags',
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `Tag ${name}`,
            sidebar: false,
          }),
        },
      ],

      type: [
        {
          key: 'article',
          // Remove archive articles
          filter: (page) => !page.frontmatter.archive,
          layout: 'Article',
          frontmatter: () => ({
            title: 'Articles',
            sidebar: false,
          }),
          // Sort pages with time and sticky
          sorter: (pageA, pageB) => {
            if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
              return pageB.frontmatter.sticky - pageA.frontmatter.sticky

            if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky) return -1

            if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1

            if (!pageB.frontmatter.date) return 1
            if (!pageA.frontmatter.date) return -1

            return (
              new Date(pageB.frontmatter.date).getTime() -
              new Date(pageA.frontmatter.date).getTime()
            )
          },
        },
        {
          key: 'timeline',
          // Only article with date should be added to timeline
          filter: (page) => page.frontmatter.date instanceof Date,
          // Sort pages with time
          sorter: (pageA, pageB) =>
            new Date(pageB.frontmatter.date).getTime() -
            new Date(pageA.frontmatter.date).getTime(),
          layout: 'Timeline',
          frontmatter: () => ({
            title: 'Timeline',
            sidebar: false,
          }),
        },
      ],
      hotReload: true,
    }),
  ],

  bundler: viteBundler(),
})
