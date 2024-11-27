"use client";
import Bars from "./components/Bars"
import { PetName, PetAge, PetWeight } from "@/app/components/basicInfoText";
import Buttons from "./components/Buttons"

export default function Home() {
  return (
    <div>
      <Bars/>
      <Buttons/>
    </div>
  );
}
