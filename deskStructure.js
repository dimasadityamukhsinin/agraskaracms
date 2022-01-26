import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'home',
            'about',
            'setting',
            'contact',
          ].includes(listItem.getId()),
      ),
      S.listItem()
        .title('Home')
        .child(
          S.document().schemaType('home').documentId('home'),
        ),
      S.listItem()
        .title('About')
        .child(
          S.document().schemaType('about').documentId('about'),
        ),
      S.listItem()
        .title('Contact')
        .child(
          S.document().schemaType('contact').documentId('contact'),
        ),
      S.listItem()
        .title('Setting')
        .child(
          S.document().schemaType('setting').documentId('setting'),
        ),
    ])
