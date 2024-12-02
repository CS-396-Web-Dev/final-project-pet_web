"use client";

import React, { useState } from "react";

export function PetName({info, setInfo}) {
  const handleNameChange = (e) => {
    const newName = e.target.value;
    setInfo((prev) => ({...prev,name:newName}));
  };

  return (
    <div>
      <input
        type="text"
        value={info.name || ""}
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