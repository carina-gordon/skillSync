export interface Experience {
    title: string;
    points: string[];
  }
  
export interface Experiences {
  experiences: Experience[];
}

  //  state structure chat store
  export interface ExperienceStoreState {
    experiences: Experience[];
  }
  
  export interface ExperienceStoreActions {
    updateTitle: (index: number, title: string) => void;
    updatePoint: (expIndex: number, pointIndex: number, point: string) => void;
    setSingleExperience: (inputExperience: Experience) => void;
    setExperiences: (inputExperiences: Experience[]) => void;
  }  