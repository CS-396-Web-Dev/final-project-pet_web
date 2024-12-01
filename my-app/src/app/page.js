"use client";

import { useEffect } from "react";
import Bars from "./components/Bars";
import { PetName, PetAge, PetWeight } from "@/app/components/basicInfoText";
import Buttons from "./components/Buttons";
import Reset from "./components/Reset";
import PikachuImage from "./components/PikachuImage";

import { useInfoContext } from "./contexts/InfoContext";
import { useMetricsContext } from "./contexts/MetricsContext";

import {
  updatePetAge,
  updatePetWeight,
  updateMetricsFunction,
} from "@/app/basic_info/pet_info";

export default function Home() {
  const { info, setInfo } = useInfoContext();
  const { metrics, setMetrics } = useMetricsContext();
  useEffect(() => {
    const interval = setInterval(() => {
      const age = info.isAlive ? updatePetAge(info.time, info.age) : info.age;
      const updatedWeight = info.isAlive
        ? updatePetWeight(info.weight, info.time, metrics.health)
        : info.weight;
      updateMetricsFunction(setMetrics, info.time);
      const isAlive =
        metrics.health <= 0 ||
        metrics.happiness <= 0 ||
        metrics.satiation <= 0 ||
        metrics.cleanliness <= 0
          ? false
          : info.isAlive;

      setInfo((prev) => ({
        ...prev,
        age: age,
        weight: updatedWeight,
        stage: !isAlive
          ? "Death"
          : age < 1
          ? "Infant"
          : age < 3
          ? "Child"
          : age < 5
          ? "Teenager"
          : age < 10
          ? "Adult"
          : "Senior",
        time: Date.now(),
        isAlive: isAlive,
      }));
    }, 30000); // update every 1 second

    return () => clearInterval(interval);
  }, [info, metrics, setMetrics, setInfo]);

  return (
    <div className="container flex flex-col items-center bg-gray-100 min-h-screen py-6">
      <Reset />

      <div className="info text-center mb-6">
        <div className="flex items-center justify-center space-x-2">
          <PetName />
          <img
            src="/assets/edit_btn.png"
            alt="Edit Button"
            className="w-6 h-6 cursor-pointer"
          />
        </div>
        <PetAge ageInHour={info.age} growthStage={info.stage} />
        <PetWeight weight={info.weight} />
      </div>

      <div className="content flex flex-col sm:flex-row justify-center items-center gap-6 mb-6">
        <div className="image">
          <PikachuImage></PikachuImage>
        </div>

        <div className="status-bar flex flex-col gap-4">
          <Bars />
        </div>
      </div>

      <div className="buttons flex justify-around w-full max-w-xl">
        <Buttons />
      </div>
    </div>
  );
}
