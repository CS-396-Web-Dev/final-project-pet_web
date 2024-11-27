export function updatePetAge(time) {
    const currentTime = new Date();
    const hours  = (currentTime - new Date(time)) / (1000 * 60 * 60); // the age in half hours
    return  hours;
}

export function updatePetWeight(weight, time,health)  {
    const hours = (new Date() - new Date(time)) / (1000* 60 * 60);
    const weightChange = health < 60
    ? -0.1 * hours // lose weight if it is unhealthy based on hours
    : 0.05 * hours; // gain weight if it is healthy
    return Math.max(0,weight + weightChange);
};

export function updateMetricsFunction(setMetrics, time) {

    const hours = (new Date() - new Date(time)) / (1000* 60 * 60);

    setMetrics((prev) => {
        const newHappiness = Math.max(0,prev.happiness - hours * 2);
        const newSatiation = Math.max(0,prev.satiation - hours * 3);
        const newCleanliness = Math.max(0,prev.cleanliness - hours * 1);

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
