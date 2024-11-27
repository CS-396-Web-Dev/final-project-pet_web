"use client";
import { useMetricsContext} from '../contexts/MetricsContext';
import {useInfoContext} from "../contexts/InfoContext";

export default function Reset() {
    const {setMetrics} = useMetricsContext();
    const {setInfo} = useInfoContext();
    return(

        <button
            id = {`reset-button`}
            className = "bg-purple-800 hover:bg-purple-950 text-white py-2 px-4 rounded-full mr-5"
            onClick={(e) => {
            e.preventDefault();

            setMetrics((prev) => {
              const dictCopy = {...prev};
              dictCopy.happiness = 0;
              dictCopy.health = 0;
              dictCopy.satiation = 0;
              dictCopy.cleanliness = 0;
              return dictCopy;
            })

            setInfo((prev) => {
                const dictCopy = {...prev};
                dictCopy.age = 0;
                dictCopy.stage = "Infant";
                dictCopy.weight = 0;
                dictCopy.time = Date.now();
                return dictCopy;
            })

        
          }}>
            Reset
            </button>

    )


}