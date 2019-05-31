module.exports = {
  themeConfig: {
    nav: [
      { text: 'PLONE.ORG', link: 'https://plone.org' },
      { text: 'FORUM', link: 'https://community.plone.org' },
    ],
   sidebar: [
      {
	title: 'Styleguide Markdown',
        collapsable: true,
        children: [
          '/styleguide-markdown/accessibility-a11y.md', // These are pages we'll add later
          '/styleguide-markdown/blockquotes.md',
          '/styleguide-markdown/code.md',
          '/styleguide-markdown/comments.md',
          '/styleguide-markdown/emphasis.md',
          '/styleguide-markdown/headings.md',
          '/styleguide-markdown/horizontal-rules.md',
          '/styleguide-markdown/images.md',
          '/styleguide-markdown/links.md',
          '/styleguide-markdown/lists.md',
          '/styleguide-markdown/naming-conventions.md',
          '/styleguide-markdown/paragraphs.md',
          '/styleguide-markdown/raw-html.md',
          '/styleguide-markdown/strings.md',
          '/styleguide-markdown/tables.md',
          '/styleguide-markdown/whitespace.md',
       ]
      }
    ]
  },
  title: 'Plone Documentation Guide',
  description: 'One guide to rule them all'
}
