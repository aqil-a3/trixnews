import { defineType, defineField } from "sanity";
import { TagIcon } from "@sanity/icons";

export const airdropType = defineType({
  name: "airdrop",
  title: "Airdrop",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "id",
      title: "Airdrop ID",
      type: "string",
      description: "Unique identifier for the airdrop",
      readOnly:true,
      initialValue:`airdrop-${Date.now()}`,
      validation: (Rule) => Rule.required().error("ID is required"),
    }),
    defineField({
      name: "name",
      title: "Airdrop Name",
      type: "string",
      validation: (Rule) => Rule.required().error("Name is required"),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      validation: (Rule) => Rule.required().error("Start date is required"),
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      validation: (Rule) => Rule.required().error("End date is required"),
    }),
    defineField({
      name: "rewardAmount",
      title: "Reward Amount",
      type: "string",
      description: 'e.g., "1000 ABC" or "50 USD"',
      validation: (Rule) => Rule.required().error("Reward amount is required"),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Approved", value: "approved" },
          { title: "Rejected", value: "rejected" },
        ],
        layout: "radio",
      },
      initialValue: "pending",
      validation: (Rule) => Rule.required().error("Status is required"),
    }),
    defineField({
      name: "officialLink",
      title: "Official Link",
      type: "url",
      validation: (Rule) =>
        Rule.required()
          .uri({ scheme: ["http", "https"] })
          .error("Valid link is required"),
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
      description: "Only used internally",
      validation: (Rule) =>
        Rule.required().email().error("Valid email is required"),
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error("Slug is required"),
    }),
  ],
});
