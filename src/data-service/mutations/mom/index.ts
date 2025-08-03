import { MutationDataService } from "../../types";

export type MomMutationKeys =
  | "add-mom"
  | "update-mom"
  | "extract-mom"
  | "mom-summary";

export const momMutations: MutationDataService<MomMutationKeys> = {
  "add-mom": {
    url: "mom",
    method: "POST",
    refetchQueries: ["mom-list"],
  },
  "extract-mom": {
    url: "mom/extract",
    method: "POST",
    refetchQueries: ["mom-detail", "mom-list"],
  },
  "update-mom": {
    url: "mom/:id",
    method: "PATCH",
    refetchQueries: ["mom-detail", "mom-list"],
  },
  "mom-summary": {
    url: "mom/summary/:id",
    method: "POST",
    refetchQueries: [],
  },
};
