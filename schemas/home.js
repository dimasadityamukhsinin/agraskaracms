export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      title: 'Description',
      name: 'description',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
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
