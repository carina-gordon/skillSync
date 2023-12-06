import React from 'react';
// import { updatePoint, updateTitle } from './experience_utils';
import { Experience , Experiences} from '../provider/experiences/experience_types';
import ExperienceStore from '../provider/experiences/experiences';

interface ExperienceInputProps {
  experience: Experience;
  index: number;
}

const ExperienceInput: React.FC<ExperienceInputProps> = ({experience, index }) => {
  const { updateTitle, updatePoint } = ExperienceStore();

  return (
    <div className="mb-4">
      <input
        type="text"
        value={experience.title}
        onChange={(e) => updateTitle(index, e.target.value)}
        className="text-lg font-bold p-2 border rounded w-full"
      />
      {experience.points.map((point, pointIndex) => (
        <input
          key={pointIndex}
          type="text"
          value={point}
          onChange={(e) => updatePoint(index, pointIndex, e.target.value)}
          placeholder="Input bullet point"
          className="mt-2 p-2 border rounded w-full"
        />
      ))}
    </div>
  );
};

export default ExperienceInput;