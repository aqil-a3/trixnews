export const groqGetAllPost = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  _createdAt,
  _updatedAt,
  _type,
  title,
  slug,
  publishedAt,
  summary,
  body,
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
  }
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

export const groqGetPostByCategorySlug = `
  *[_type == "post" && references(*[_type == "category" && slug.current == $slug]._id)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt
  }
`;

export const groqGetAllCategories = `
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description
  }
`;

export const groqGetRelatedPosts = `
  *[
    _type == "post" &&
    slug.current != $slug &&
    (
      count(categories[@._ref in $categoryIds]) > 0 ||
      count(tags[@._ref in $tagIds]) > 0
    )
  ]
  | order(publishedAt desc)[0...$count] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    "categoryTitles": categories[]->title,
    "tagTitles": tags[]->title
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

export const groqGetPresaleBySlug = `*[_type == "presales" && slug.current == $slug][0] {
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

export const groqGetAllAirdrops = `*[_type == "airdrop"] | order(startDate desc) {
  _id,
  _type,
  id,
  name,
  description,
  startDate,
  endDate,
  rewardAmount,
  status,
  officialLink,
  contactEmail,
  mainImage {
    asset,
    alt
  },
  slug
}`;

export const groqGetAllGuides = `*[_type == "guide"] | order(popularity desc) {
  _id,
  _type,
  title,
  description,
  slug,
  icon,
  content,
  popularity
}`;

export const groqGetAllPredictions = `*[_type == "prediction"] | order(date desc) {
  _id,
  _type,
  id,
  title,
  summary,
  date,
  mainImage {
    asset,
    alt
  },
  slug,
  author,
  predictionContent,
  status,
  isResolved,
  resolutionDate,
  actualOutcome,
  accuracyScore,
  contactEmail
}`;