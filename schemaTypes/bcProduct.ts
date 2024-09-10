import {defineField, defineType} from 'sanity'

export const bcProduct = defineType({
  name: 'bcProduct',
  type: 'document',
  title: 'BC - Product',
  fields: [
    defineField({
      name: 'name',
      title: 'name',
      type: 'string',
    }),
  ],
})
