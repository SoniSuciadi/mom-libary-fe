import { MutationDataService } from "../types";

import { AuthMutationKeys, authMutations } from "./auth";
import { ChatMutationKeys, chatMutations } from "./chat";
import { PaymentMutationKeys, paymentMutations } from "./payment";

export type AllMutationKeys =
  | AuthMutationKeys
  | ChatMutationKeys
  | PaymentMutationKeys;

export const allMutations: MutationDataService<AllMutationKeys> = {
  ...authMutations,
  ...chatMutations,
  ...paymentMutations,
};
