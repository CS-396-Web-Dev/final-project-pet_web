"use client";

import React, { useState } from "react";

export function PetName() {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter pet name"
      />
    </div>
  );
}

export function PetAge({ageInHour, growthStage}) {
    return (
    <div>
        <p>Age: {ageInHour} hr ({growthStage})</p>
    </div>
    );
}

export function PetWeight({weight}) {
    return (
    <div>
        <p>Weight: {weight} lb.</p>
    </div>
    );
}