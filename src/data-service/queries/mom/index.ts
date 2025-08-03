import { QueriesDataService } from "../../types";

export type MomQueriesKeys = "mom-detail" | "mom-list";

export const momQueries: QueriesDataService<MomQueriesKeys> = {
  "mom-detail": "mom/:id",
  "mom-list": "mom",
};
