export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'SEO',
      name: 'seo',
      type: 'object',
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: 'seo_description',
          type: 'string',
          title: 'Description',
        },
        {
          name: 'seo_keywords',
          type: 'string',
          title: 'Keywords',
        },
        {
          name: 'seo_image',
          title: 'Image',
          description: '800 x 600 | PNG / JPEG / WEBP | max 100kb',
          type: 'image',
          fields: [
            {
              title: 'Edit Alt Text',
              name: 'name',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      title: 'Description',
      name: 'description',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
    {
        title: 'Image',
        name: 'image',
        type: 'array',
        validation: (Rule) => Rule.required(),
        of: [
            {
                type: 'image',
            }
        ]
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Home',
      }
    },
  },
}
