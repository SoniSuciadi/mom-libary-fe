import { QueriesDataService } from "../types";

import { AuthQueriesKeys, authQueries } from "./auth";
import { chatQueries, ChatQueriesKeys } from "./chat";

export type AllQueriesKeys = AuthQueriesKeys | ChatQueriesKeys;

export const allQueries: QueriesDataService<AllQueriesKeys> = {
  ...authQueries,
  ...chatQueries,
};
