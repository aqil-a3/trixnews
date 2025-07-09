export const groqGetAllPost = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt
    }`;
