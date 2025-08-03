import { MutationDataService } from "../../types";

export type ChatMutationKeys = "send-message";

export const chatMutations: MutationDataService<ChatMutationKeys> = {
  "send-message": {
    url: "chat/send-message",
    method: "POST",
    refetchQueries: [],
  },
};
