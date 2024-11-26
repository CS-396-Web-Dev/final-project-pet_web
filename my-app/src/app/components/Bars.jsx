"use client";
import { useMetricsContext} from '../contexts/MetricsContext';
import Bar from './Bar';
import React from "react";

export default function Bars() {
    const {metrics} = useMetricsContext();
    console.log('bars component')
    console.log(metrics)

    return (
        <div className = "bars">
        {Object.entries(metrics).map(([k, v]) => (
          <Bar key={k} value={v} label={k} />
        ))}
        </div>

    );
}