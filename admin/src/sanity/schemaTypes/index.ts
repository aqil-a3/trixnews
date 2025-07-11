import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { tagType } from "./tagType";
import { presalesType } from "./presalesType";
import { airdropType } from "./airdropType";
import { guideType } from "./guideType";
import { predictionType } from "./predictionType";
import { web3Tool } from "./web3toolType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    tagType,
    presalesType,
    airdropType,
    guideType,
    predictionType,
    web3Tool
  ],
};
