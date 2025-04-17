export interface ChatProps {
  isChatActive: boolean;
  setIsChatActive: (value: boolean) => void;
  isChatFullscreen: boolean;
  setIsChatFullscreen: (value: boolean) => void;
}

export interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}
