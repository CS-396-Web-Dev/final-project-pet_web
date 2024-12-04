import React from "react";
import { useMetricsContext} from '../contexts/MetricsContext';
import { useInfoContext} from '../contexts/InfoContext'

export default function PikachuImage() {
    const {metrics} = useMetricsContext();
    const {info} = useInfoContext();
    console.log(metrics.health)
    var srcLink = "/assets/pikachu.gif"
    // Logic for choosing the image
    // not happy pikachu
    if (metrics.happiness <= 30) {
        srcLink = "/assets/sleep_pikachu.gif"
    }
    // death stage
    if (!info.isAlive){
        srcLink = "/assets/gravestone.jpg"
    } 
    return (
        <img src={srcLink} alt="Pikachu" className="w-48 h-auto"></img>
    )
}