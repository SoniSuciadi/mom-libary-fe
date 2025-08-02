import { MutationDataService } from "../../types";

export type AuthMutationKeys = "login" | "register" | "logout";

export const authMutations: MutationDataService<AuthMutationKeys> = {
  login: {
    url: "auth/login",
    method: "POST",
    refetchQueries: [],
  },
  register: {
    url: "auth/register",
    method: "POST",
    refetchQueries: [],
  },
  logout: {
    url: "auth/logout",
    method: "POST",
    refetchQueries: ["user-information"],
  },
};
