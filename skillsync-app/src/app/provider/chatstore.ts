import { create } from "zustand";

interface Role {
  role_name: string;
  description: string;
}

interface ChatStoreState {
  suggestedRoleData: SuggestedRoleData | null;
selectedRole: Role | null;
}

interface ChatStoreActions {
  setSuggestedRoleData: (data: SuggestedRoleData) => void;
    setSelectedRole: (role: Role) => void;
}

type ChatStore = ChatStoreState & ChatStoreActions;

export interface SuggestedRoleData {
    roles: Role[];
  }

export interface SelectedRole {
    role: Role;
}  


const useChatStore = create<ChatStore>((set) => ({
  suggestedRoleData: null,
  selectedRole: null,

  setSelectedRole: (role: Role) => set({ selectedRole: role }),
  setSuggestedRoleData: (data: SuggestedRoleData) =>
    set({ suggestedRoleData: data }),
}));

export default useChatStore;
