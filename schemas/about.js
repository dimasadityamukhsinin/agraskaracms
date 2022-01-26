export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      title: 'Description',
      name: 'description',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'About',
      }
    },
  },
}
