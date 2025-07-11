export const groqGetAllPost = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt
    }`;

export const groqGetAllCategory = `*[_type == "category"] | order(title asc) {
  _id,
  _type,
  title,
  slug,
  description
}`;

export const groqGetAllTags = `*[_type == "tag"] | order(title asc) {
  _id,
  _type,
  title,
  slug,
  description
}`;

export const groqGetAllImages = `*[_type == "gallery"]{
  _id,
  title,
  display,
  zoom,
  images[]{
    asset->{
      url,
      metadata { dimensions, lqip }
    },
    alt
  }
}
`;

export const groqGetAllPresales = `*[_type == "presales"] | order(startDate asc) {
  _id,
  _type,
  id,
  name,
  description,
  startDate,
  endDate,
  softCap,
  hardCap,
  tokenSupply,
  status,
  contactEmail,
  image {
    asset,
    alt
  },
  slug
}`;
