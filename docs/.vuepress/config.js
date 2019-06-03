module.exports = {
  themeConfig: {
    nav: [
      { text: 'PLONE.ORG', link: 'https://plone.org' },
      { text: 'FORUM', link: 'https://community.plone.org' },
    ],
    sidebar: [
      '/',
      ['/markdown','Markdown Style Guide']
    ],
    lastUpdated: 'Last Updated', // string | boolean
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'plone/docs-guide',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Help us improve this page!'
  },
  title: 'Plone Documentation Guide',
  description: 'One guide to rule them all'
}
