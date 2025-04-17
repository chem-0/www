import apiClient from "@/lib/api-client";
import { ChatOutput } from "@/schema/chat";
import { Message } from "@/types/chat";

export const chatResults = async (messages: Message[]) => {
  const res = await apiClient.post<ChatOutput>("/chat", { messages: messages });
  console.log({ res });

  return res.data;
};
