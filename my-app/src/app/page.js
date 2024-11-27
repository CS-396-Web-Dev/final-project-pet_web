"use client";

import { useEffect } from "react";
import Bars from "./components/Bars"
import { PetName, PetAge, PetWeight } from "@/app/components/basicInfoText";
import Buttons from "./components/Buttons"
import Reset from "./components/Reset"
import {useInfoContext} from "./contexts/InfoContext";
import { useMetricsContext } from "./contexts/MetricsContext";
import { updatePetAge, updatePetWeight, updateMetricsFunction } from "@/app/basic_info/pet_info"; 

export default function Home() {
  const {info, setInfo} = useInfoContext();
  const {metrics, setMetrics} = useMetricsContext();
  useEffect(() => {
    const interval = setInterval(() => {
      const age = updatePetAge(info.time);
      const updatedWeight = updatePetWeight(info.weight, info.time, metrics.health);
      updateMetricsFunction(setMetrics, info.time);

      // Update the age and the weight
      setInfo((prev) => ({
        ...prev,
        age : age,
        weight: updatedWeight,
        stage : age < 10
        ? "infant"
        : "mature"
      }));
    }, 1000); // update every 1 second

    return () => clearInterval(interval);
  }, [info.time, metrics, setMetrics, setInfo]);

  return (
    <div>
      <Reset />
      <PetName/>
      <PetAge ageInHour={info.age} growthStage={info.stage}/>
      <PetWeight weight={info.weight}/>
      <Bars/>
      <Buttons/>
    </div>
  );
}
