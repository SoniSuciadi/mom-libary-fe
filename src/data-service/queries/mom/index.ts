import { QueriesDataService } from "../../types";

export type MomQueriesKeys = "mom-detail";

export const momQueries: QueriesDataService<MomQueriesKeys> = {
  "mom-detail": "mom/:id",
};
