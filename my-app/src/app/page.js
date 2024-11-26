"use client";
import Bars from "./components/Bars"
import Buttons from "./components/Buttons"
import { useMetricsContext } from "./contexts/MetricsContext";

export default function Home() {
  const {metrics} = useMetricsContext();
  console.log("page.js")
  console.log(metrics)
  return (
    <div>
      <Bars/>
      <Buttons/>
    </div>
  );
}
