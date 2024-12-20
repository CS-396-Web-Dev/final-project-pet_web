"use client";
import { useMetricsContext} from '../contexts/MetricsContext';
import Bar from './bar';
import React from "react";

export default function Bars() {
    const {metrics} = useMetricsContext();

    return (
        <div className = "bars">
        {Object.entries(metrics).map(([k, v]) => (
          <Bar key={k} value={v} label={k} />
        ))}
        </div>

    );
}