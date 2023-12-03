import { create } from "zustand";

interface Role {
  role_name: string;
  description: string;
}

export interface SuggestedRoleData {
  roles: Role[];
}

interface ChatStoreState {
  suggestedRoleData: SuggestedRoleData | null;
}

interface ChatStoreActions {
  setSuggestedRoleData: (data: SuggestedRoleData) => void;
}

type ChatStore = ChatStoreState & ChatStoreActions;






const useChatStore = create<ChatStore>((set) => ({
  suggestedRoleData: null,
  setSuggestedRoleData: (data: SuggestedRoleData) =>
    set({ suggestedRoleData: data }),
}));

export default useChatStore;
