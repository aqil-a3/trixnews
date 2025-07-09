export const groqGetAllPost = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt
    }`;

export const groqGetPostBySlug = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    summary,
    author->{
      _id,
      name
    },
    categories[]->{
      _id,
      title
    },
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    },
    body
  }
`;
