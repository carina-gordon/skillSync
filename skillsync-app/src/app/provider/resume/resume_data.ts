import { create } from "zustand";
import {ResumeStoreActions, ResumeStoreState, } from "./resume_data_types";
import { Experience } from "../experiences/experience_types";

type ResumeStore = ResumeStoreState & ResumeStoreActions;

const ResumeStore = create<ResumeStore>((set) => ({
    imports: '',
    header: '',
    education: '',
    experiences: '',
    skills: '',

    setImports: (imports: string) => set({ imports: imports }),
    setHeader: (header: string) => set({ header: header }),
    setEducation: (education: string) => set({ education: education }),
    setExperiences: (experiences: string) => set({ experiences: experiences }),
    setSkills: (skills: string) => set({ skills: skills }),
}));

export default ResumeStore;