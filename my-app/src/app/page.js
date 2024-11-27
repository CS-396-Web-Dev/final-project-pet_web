"use client";
import Bars from "./components/Bars"
import { PetName, PetAge, PetWeight } from "@/app/components/basicInfoText";
import Buttons from "./components/Buttons"
import Reset from "./components/Reset"
import {useInfoContext} from "./contexts/InfoContext";

export default function Home() {
  const {info} = useInfoContext();

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
