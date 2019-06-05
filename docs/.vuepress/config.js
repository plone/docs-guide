module.exports = {
  title: 'Plone Documentation Guide',
  description: 'One guide to rule them all',
  themeConfig: {
    lastUpdated: 'Last Updated',
    repo: 'plone/docs-guide',
    repoLabel: 'Contribute!',
    docsDir: 'docs',
    editLinks: false,
    editLinkText: 'Help us improve this page!',
    nav: [{
        text: 'PLONE.ORG',
        link: 'https://plone.org'
      },
      {
        text: 'FORUM',
        link: 'https://community.plone.org'
      }
    ],
    sidebar: [{
      title: 'Markdown Styleguide',
      collapsable: true,
      children: [
        '/markdown/accessibility-a11y',
        '/markdown/blockquotes',
        '/markdown/code',
        '/markdown/comments',
        '/markdown/emphasis',
        '/markdown/headings',
        '/markdown/horizontal-rules',
        '/markdown/images',
        '/markdown/links',
        '/markdown/lists',
        '/markdown/naming-conventions',
        '/markdown/paragraphs',
        '/markdown/strings',
        '/markdown/tables',
        '/markdown/whitespace',
      ]
    },
    {
      title: 'Editorial Styleguide',
      collapsable: true,
      children: [
        'editorial/writing-all-abilities',
      ]
    },
    {
      title: 'About',
      collapsable: true,
      children: [
        'about/overview',
        'about/acknowledge',
      ]
    }
  ]
  }
}