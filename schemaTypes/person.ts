import {defineField} from 'sanity'

export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    ...new Array(30).fill(null).map((_, i) =>
      defineField({
        name: 'field_' + i,
        type: 'internationalizedArrayString',
      }),
    ),
  ],
}
