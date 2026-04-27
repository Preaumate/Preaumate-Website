export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      // Slug is the URL-friendly version of the title
      // e.g. "My First Post" becomes "my-first-post"
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required()
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short summary shown on the blog listing page'
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true }
      // hotspot: true lets you choose which part of the image
      // to focus on when it gets cropped on different screen sizes
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }]
      // 'block' is Sanity's rich text format
      // supports bold, italic, headings, links, lists etc
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Industry News', value: 'industry-news' },
          { title: 'Case Studies', value: 'case-studies' },
          { title: 'Technical Guides', value: 'technical-guides' },
          { title: 'Company Updates', value: 'company-updates' },
        ]
      }
    }
  ]
}