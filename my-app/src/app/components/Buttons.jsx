"use client";
import { useMetricsContext} from '../contexts/MetricsContext';
import Button from './Button';

export default function Buttons() {
    const {metrics} = useMetricsContext();
    console.log(metrics)

    return (
        <div className = "buttons">
        {Object.entries(metrics).map(([k, v]) => (
          <Button key={k} buttonType={k} />
        ))}
        </div>

    );
}