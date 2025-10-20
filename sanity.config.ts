import {createAuthStore, defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'sample-studio',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,

  schema: {
    types: schemaTypes,
  },

  plugins: [
    structureTool(),
    visionTool(),
    internationalizedArray({
      languages: [
        {id: 'en', title: 'English'},
        {id: 'fr', title: 'French'},
      ],
      defaultLanguages: ['en'],
      fieldTypes: ['string'],
    }),
  ],
  auth: createAuthStore({
    projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
    dataset: process.env.SANITY_STUDIO_DATASET!,
    mode: 'replace',
    redirectOnSingle: false,
    providers: [
      {
        name: 'saml',
        title: 'saml',
        url: process.env.SANITY_STUDIO_AUTH_URL!,
      },
    ],
  }),
})
