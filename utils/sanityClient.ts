import {createClient} from '@sanity/client'

export const sanityClient = createClient({
  projectId: '4i36j00k', // TODO PUT THIS PROJECT ID AND DATASET5 TO THE ENV VARIABLE
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-05-03',
  token: process.env.SANITY_SECRET_TOKEN,
})
