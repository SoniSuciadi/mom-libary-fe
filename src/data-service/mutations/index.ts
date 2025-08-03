import { MutationDataService } from "../types";

import { AuthMutationKeys, authMutations } from "./auth";
import { ChatMutationKeys, chatMutations } from "./chat";
import { MomMutationKeys, momMutations } from "./mom";

export type AllMutationKeys =
  | AuthMutationKeys
  | MomMutationKeys
  | ChatMutationKeys;

export const allMutations: MutationDataService<AllMutationKeys> = {
  ...authMutations,
  ...momMutations,
  ...chatMutations,
};
