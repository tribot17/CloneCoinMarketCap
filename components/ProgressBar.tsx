import React, { useState } from "react";

interface progressBar {
  min: number;
  max: number;
  currentValue: number;
}

const ProgressBar: React.FC<progressBar> = ({ min, max, currentValue }) => {
  const [progress, setProgress] = useState((currentValue - min) / (max - min));

  console.log(progress, currentValue);

  return (
    <div
      style={{
        backgroundColor: "grey",
        width: "100%",
        height: "10px",
        borderRadius: "15px",
      }}
    >
      <div
        style={{
          width: `${((currentValue - min) / (max - min)) * 100}%`,
          height: "10px",
          backgroundColor: "#adc3c7",
          borderRadius: "15px",
        }}
      />
    </div>
  );
};

export default ProgressBar;
