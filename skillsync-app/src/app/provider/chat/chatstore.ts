import { create } from "zustand";
import { ChatStoreState, ChatStoreActions, Role, SuggestedRolesData } from './chat_types';

type ChatStore = ChatStoreState & ChatStoreActions;

const useChatStore = create<ChatStore>((set) => ({
    SuggestedRolesData: null,
    currentRole: null,
    selectedRole: null,
    tipsData: null,

    
    setTipsData: (data: any) => set({ tipsData: data }),
    setCurrentRole: (role: Role) => set({ currentRole: role }),
    setSelectedRole: (role: Role) => set({ selectedRole: role }),
    setSuggestedRolesData: (data: SuggestedRolesData) => set({ SuggestedRolesData: data }),
}));
  
export default useChatStore;
