import { QueriesDataService } from "../types";

import { AuthQueriesKeys, authQueries } from "./auth";
import { momQueries, MomQueriesKeys } from "./mom";

export type AllQueriesKeys = AuthQueriesKeys | MomQueriesKeys;

export const allQueries: QueriesDataService<AllQueriesKeys> = {
  ...authQueries,
  ...momQueries,
};
