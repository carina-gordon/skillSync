// resume_data_types.ts

import { Experience } from "../experiences/experience_types";

// Define the state structure for the ResumeStore
export interface ResumeStoreState {
  imports: string;
  header: string;
  education: string;
  experiences: string;
  skills: string;
}



// Define the actions available for the ResumeStore
export interface ResumeStoreActions {
  setImports: (imports: string) => void;
  setHeader: (header: string) => void;
  setEducation: (education: string) => void;
  setExperiences: (experiences: string) => void;
  setSkills: (skills: string) => void;
}
