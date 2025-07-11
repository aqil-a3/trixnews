import { defineType, defineField } from "sanity";

export const predictionType = defineType({
  name: "prediction",
  title: "Prediction",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "Prediction ID",
      type: "string",
      validation: (Rule) => Rule.required(),
      initialValue: `prediction-${Date.now()}`,
      readOnly: true,
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Prediction Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alt text",
        }),
      ],
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "predictionContent",
      title: "Prediction Content",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: ["active", "archived", "pending"],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isResolved",
      title: "Resolved?",
      type: "boolean",
    }),
    defineField({
      name: "resolutionDate",
      title: "Resolution Date",
      type: "date",
    }),
    defineField({
      name: "actualOutcome",
      title: "Actual Outcome",
      type: "text",
    }),
    defineField({
      name: "accuracyScore",
      title: "Accuracy Score",
      type: "number",
      description: "Score from 0–100",
      validation: (Rule) =>
        Rule.min(0).max(100).warning("Value should be between 0 and 100"),
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
      validation: (Rule) => Rule.email().warning("Must be a valid email"),
    }),
  ],
});
