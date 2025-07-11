import { defineField, defineType } from "sanity";

export const web3Tool = defineType({
  name: "web3Tool",
  title: "Web3 Tool",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Tool Name",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "officialLink",
      title: "Official Website",
      type: "url",
      validation: Rule => Rule.required().uri({
        scheme: ['http', 'https'],
      }),
    }),
    defineField({
      name: "supportedBlockchains",
      title: "Supported Blockchains",
      type: "array",
      of: [{ type: "string" }],
      description: "Examples: Ethereum, Polygon, Solana, etc.",
    }),
    defineField({
      name: "keyFeatures",
      title: "Key Features",
      type: "array",
      of: [{ type: "string" }],
      description: "e.g., Non-custodial, dApp Integration",
    }),
    defineField({
      name: "mainImage",
      title: "Tool Logo/Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
