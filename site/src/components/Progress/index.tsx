import React from 'react';

interface ProgressProps {
  value: number;
  max: number;
  dataLabel: string;
}

const Progress: React.FC<ProgressProps> = ({ value, dataLabel, max }: ProgressProps) => {

  return (
    <progress value={value} max={max} data-label={`${value}% ${dataLabel}`} />
  )
}

export default Progress;
