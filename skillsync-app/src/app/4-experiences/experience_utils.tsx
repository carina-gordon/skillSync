// import { useState } from 'react';
// import { Experience, Experiences } from './types';

// export const updatePoint = (index, pointIndex, value) => {
//   ExperienceStore.setState(state => {
//     const updatedExperiences = state.experiences.map((exp, expIndex) => {
//       if (index === expIndex) {
//         const newPoints = [...exp.points];
//         newPoints[pointIndex] = value;
//         return { ...exp, points: newPoints };
//       }
//       return exp;
//     });
//     return { experiences: updatedExperiences };
//   });
// };

// export const updateTitle = (index, value) => {
//   ExperienceStore.setState(state => {
//     const updatedExperiences = state.experiences.map((exp, expIndex) => {
//       if (index === expIndex) {
//         return { ...exp, title: value };
//       }
//       return exp;
//     });
//     return { experiences: updatedExperiences };
//   });
// };
