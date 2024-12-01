import React from "react";
import { useMetricsContext} from '../contexts/MetricsContext';

export default function PikachuImage() {
    const {metrics} = useMetricsContext();
    console.log(metrics.health)
    var srcLink = "/assets/pikachu.gif"
    // Logic for choosing the image
    // not happy pikachu
    if (metrics.happiness <= 30) {
        srcLink = "/assets/sleep_pikachu.gif"
    }
    // death stage
    if (metrics.health <= 0 || metrics.happiness <= 0 || metrics.satiation <=0 || metrics.cleanliness <= 0 ){
        srcLink = "/assets/gravestone.jpg"
    } 
    return (
        <img src={srcLink} alt="Pikachu" className="w-48 h-auto"></img>
    )
}