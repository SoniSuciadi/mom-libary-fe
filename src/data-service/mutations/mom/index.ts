import { MutationDataService } from "../../types";

export type MomMutationKeys = "add-mom" | "update-mom";

export const momMutations: MutationDataService<MomMutationKeys> = {
  "add-mom": {
    url: "mom",
    method: "POST",
    refetchQueries: [],
  },
  "update-mom": {
    url: "mom/:id",
    method: "PATCH",
    refetchQueries: [],
  },
};
