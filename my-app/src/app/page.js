"use client";

import Image from "next/image";
import { PetName, PetAge, PetWeight } from "@/app/components/basicInfoText";

export default function Home() {
  const age1 = 120; 
  const stage1 = "Adolescent"; 
  const weight1 = 10; 

  return (
    <div>
      <h1>Pet Dashboard</h1>
      <PetName />
      <PetAge ageInHour={age1} growthStage={stage1} />
      <PetWeight weight={weight1} />
    </div>
  );
}
