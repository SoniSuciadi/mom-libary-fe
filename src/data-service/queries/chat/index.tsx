import { QueriesDataService } from "../../types";

export type ChatQueriesKeys = "chat-room" | "chat-list";

export const chatQueries: QueriesDataService<ChatQueriesKeys> = {
  "chat-room": "chat/chat-room",
  "chat-list": "chat/:id",
};
