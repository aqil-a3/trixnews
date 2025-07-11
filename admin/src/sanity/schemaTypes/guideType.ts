import { defineType, defineField } from "sanity";

export const guideType = defineType({
  name: "guide",
  title: "Guide",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: [
          { title: "Book", value: "BookOpen" },
          { title: "Lightbulb", value: "Lightbulb" },
          { title: "Graduation Cap", value: "GraduationCap" },
        ],
        layout: "dropdown",
      },
    }),
    defineField({
      name: "content",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "popularity",
      type: "number",
    }),
  ],
});
