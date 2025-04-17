import { systemPrompt } from "@/lib/prompt";
import { Message } from "@/types/chat";
import { create } from "zustand";

export type ModelEnum = "gpt" | "claude" | "gemini";

export interface LabmateStore {
  model: ModelEnum;
  changeModel: (model: ModelEnum) => void;
  messages: Record<string, Message[]>;
  addMessage: (chatId: string, message: Message) => void;
}

export const _useLabmateStore = create<LabmateStore>((set) => ({
  model: "gemini",
  messages: {},

  changeModel: (model) => set({ model }),

  addMessage: (chatId, message) => {
    set((state) => {
      if (!state.messages[chatId]) {
        return {
          messages: {
            ...state.messages,
            [chatId]: [{ role: "system", content: systemPrompt }, message],
          },
        };
      }

      return {
        messages: {
          ...state.messages,
          [chatId]: [...state.messages[chatId], message],
        },
      };
    });
  },
}));

export const addMessage = (chatId: string, message: Message) =>
  _useLabmateStore.getState().addMessage(chatId, message);

export const changeModel = (model: ModelEnum) =>
  _useLabmateStore.getState().changeModel(model);

export const useLabmate = _useLabmateStore;
