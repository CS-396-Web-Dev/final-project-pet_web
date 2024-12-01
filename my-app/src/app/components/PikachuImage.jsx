import React from "react";
import { useMetricsContext} from '../contexts/MetricsContext';

export default function PikachuImage() {
    const {metrics} = useMetricsContext();
    console.log(metrics.health)
    var srcLink = "/assets/pikachu.gif"
    // Logic for choosing the image

    return (
        <img src={srcLink} alt="Pikachu" className="w-48 h-auto"></img>
    )
}