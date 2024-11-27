import { useMetricsContext } from "@/app/contexts//MetricsContext";

const { metrics, setMetrics } = useMetricsContext();


export function updatePetAge(time) {
    const currentTime = new Date();
    const hours = Math.floor((currentTime - new Date(time)) / (1000 * 60 * 60)); // the age in hours
    return  hours;
}

export function updatePetWeight(weight, time)  {
    const hours = Math.floor((new Date() - new Date(time)) / (1000 * 60 * 60));
    const weightChange = metrics.health < 60
    ? -0.1 * hours // lose weight if it is unhealthy based on hours
    : 0.05 * hours; // gain weight if it is healthy
    return weight + weightChange;
};

export function updateMetricsFunction() {
    const updateMetrics = (time) => {
        const hours = Math.floor((new Date() - new Date(time)) / (1000 * 60 * 60));

        setMetrics((prev) => {
            const newHappiness = metrics.happiness - hours * 2;
            const newSatiation = metrics.satiation - hours * 3;
            const newCleanliness = metrics.cleanliness - hours * 1;
    
            const newHealth = Math.round(
            newHappiness * 0.4 + newSatiation * 0.4 + newCleanliness * 0.2
            );
            return {
                ...prev,
                health :  newHealth,
                happiness : newHappiness,
                satiation : newSatiation,
                cleanliness : newCleanliness
            };
        });
    };
    return {updateMetrics};

};
