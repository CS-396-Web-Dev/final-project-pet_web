export function updatePetAge(time) {
    const currentTime = new Date();
    const hours  = (currentTime - new Date(time)) / (1000 * 60 * 60); // the age in half hours
    return  hours.toFixed(2);
}

export function updatePetWeight(weight, time,health)  {
    const hours = (new Date() - new Date(time)) / (1000* 60 * 60);
    const weightChange = health < 60
    ? -0.1 * hours // lose weight if it is unhealthy based on hours
    : 0.01 * hours; // gain weight if it is healthy
    return Math.max(0,(weight + weightChange).toFixed(1));
};

export function updateMetricsFunction(setMetrics, time) {

    const hours = (new Date() - new Date(time)) / (1000* 60 * 60);

    setMetrics((prev) => {
        const newHappiness = Math.max(0,(prev.happiness - hours * 0.5).toFixed(1));
        const newSatiation = Math.max(0,(prev.satiation - hours * 0.5).toFixed(1));
        const newCleanliness = Math.max(0,(prev.cleanliness - hours * 0.5).toFixed(1));

        const newHealth = Math.max(0,Math.round((prev.health - hours * 1)*0.99 +
        (newHappiness * 0.4 + newSatiation * 0.4 + newCleanliness * 0.2) * 0.01
        ));
        return {
            ...prev,
            health :  newHealth,
            happiness : newHappiness,
            satiation : newSatiation,
            cleanliness : newCleanliness
        };
    });
};
