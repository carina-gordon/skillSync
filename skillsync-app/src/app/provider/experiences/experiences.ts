import { create } from "zustand";
import { Experience, ExperienceStoreActions, ExperienceStoreState, Experiences } from "./experience_types";


type ExperienceState = ExperienceStoreState & ExperienceStoreActions;

const ExperienceStore = create<ExperienceState>((set) => ({
  experiences: [],
  updateTitle: (index: number, title: string) => set((state) => {
    const updatedExperiences = [...state.experiences];
    updatedExperiences[index] = { ...updatedExperiences[index], title };
    return { experiences: updatedExperiences };
  }),
  updatePoint: (expIndex: number, pointIndex: number, point: string) => set((state) => {
    const updatedExperiences = [...state.experiences];
    const updatedPoints = [...updatedExperiences[expIndex].points];
    updatedPoints[pointIndex] = point;
    updatedExperiences[expIndex] = { ...updatedExperiences[expIndex], points: updatedPoints };
    return { experiences: updatedExperiences };
  }),
  setSingleExperience: (inputExperience: Experience) => set((state: ExperienceState) => ({ experiences: [...state.experiences, inputExperience] })),
  setExperiences: (inputExperiences: Experience[]) => set({ experiences: inputExperiences }),
}));

export default ExperienceStore;