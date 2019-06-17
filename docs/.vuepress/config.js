module.exports = {
  title: 'Plone Documentation Guide',
  description: 'One guide to rule them all',
  ga: 'UA-1907133-7',
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
        'editorial/general-guideline',
        'editorial/anthropomorphism',
        'editorial/acronyms',
        'editorial/colons',
        'editorial/contractions',
        'editorial/tense',
        'editorial/headings',
        'editorial/cross-references.md',
        'editorial/filenames',
      ]
    },
    {
      title: 'About',
      collapsable: true,
      children: [
        'about/overview',
        'about/contributing',
        'about/acknowledge',
      ]
    }
  ]
  }
}
