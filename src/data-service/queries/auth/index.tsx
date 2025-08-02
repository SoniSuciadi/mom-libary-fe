import { QueriesDataService } from "../../types";

export type AuthQueriesKeys = "user-information";

export const authQueries: QueriesDataService<AuthQueriesKeys> = {
  "user-information": "auth/user-information",
};
