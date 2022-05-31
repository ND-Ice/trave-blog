export default {
  name: "posts",
  type: "document",
  title: "Posts",
  fields: [
    {
      name: "caption",
      type: "string",
      title: "Caption",
    },
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "authorId",
      type: "string",
      title: "AuthorId",
    },
  ],
};
