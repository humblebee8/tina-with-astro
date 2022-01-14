
import { defineSchema } from "@tinacms/cli";

export default defineSchema({
  collections: [
    {
      label: "Blog Posts",
      name: "posts",
      path: "src/pages/posts",
      fields: [
        {
          type: "string",
          label: "Setup",
          name: "setup",
        },
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Publish Date",
          name: "publishDate",
        },
        {
          type: "string",
          label: "Author Name",
          name: "name",
        },
        {
          type: "number",
          label: "Value",
          name: "value",
        },
        {
          type: "string",
          label: "Description",
          name: "description",
        },
        {
          type: "string",
          label: "Blog Post Body",
          name: "body",
          isBody: true,
          ui: {
            component: "textarea"
          },
        },
      ],
    },
  ],
});
