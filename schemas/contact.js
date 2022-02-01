export default {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    {
      title: 'Alamat',
      name: 'alamat',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'No Telpon',
      name: 'notelpon',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Email',
      name: 'email',
      type: 'email',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Whatsapp',
      name: 'whatsapp',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Facebook',
      name: 'facebook',
      type: 'url',
    },
    {
      title: 'Instagram',
      name: 'instagram',
      type: 'url',
    },
    {
      title: 'Linkedin',
      name: 'linkedin',
      type: 'url',
    },
    {
      title: 'Youtube',
      name: 'youtube',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Contact',
      }
    },
  },
}
