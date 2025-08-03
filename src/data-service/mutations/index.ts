import { MutationDataService } from "../types";

import { AuthMutationKeys, authMutations } from "./auth";
import { MomMutationKeys, momMutations } from "./mom";

export type AllMutationKeys = AuthMutationKeys | MomMutationKeys;

export const allMutations: MutationDataService<AllMutationKeys> = {
  ...authMutations,
  ...momMutations,
};
