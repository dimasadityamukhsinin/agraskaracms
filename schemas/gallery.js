export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      media: 'image',
    },
  },
}
