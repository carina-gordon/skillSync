
// role format
export interface Role {
    role_name: string;
    description: string;
  }
  
  // the structure for the suggested roles data
  export interface SuggestedRolesData {
    roles: Role[];
  }

  export interface tip {
    tip_number: string;
  }
  export interface tipsData {
    tips: tip[];
  }
  
  //  state structure chat store
  export interface ChatStoreState {
    SuggestedRolesData: SuggestedRolesData | null;
    currentRole: Role | null;
    selectedRole: Role | null;
    tipsData: tipsData | null;
  }
  
  // actions available in chat store
  export interface ChatStoreActions {
    setSuggestedRolesData: (data: SuggestedRolesData) => void;
    setCurrentRole: (role: Role) => void;
    setSelectedRole: (role: Role) => void;
    setTipsData: (data: tipsData) => void;
  }
  