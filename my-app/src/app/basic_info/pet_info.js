export function updatePetAge(time, age) {
  const hours = (new Date() - new Date(time)) / (1000 * 60 * 60); // the age in hours
  const newAge = Number(age) + Number(hours);
  return newAge.toFixed(2);
}

export function updatePetWeight(weight, time, health) {
  const minutes = (new Date() - new Date(time)) / (1000 * 60);
  const weightChange =
    health < 60
      ? -0.1 * minutes // lose weight if it is unhealthy based on hours
      : 0.1 * minutes; // gain weight if it is healthy
  return Math.max(0, (weight + weightChange).toFixed(1));
}

export function updateMetricsFunction(setMetrics, time) {
  const minutes = (new Date() - new Date(time)) / (1000 * 60);
  setMetrics((prev) => {
    const newHappiness = Math.max(
      0,
      (prev.happiness - minutes * 0.5).toFixed(1)
    );
    const newSatiation = Math.max(
      0,
      (prev.satiation - minutes * 0.5).toFixed(1)
    );
    const newCleanliness = Math.max(
      0,
      (prev.cleanliness - minutes * 0.5).toFixed(1)
    );
    const newHealth = Math.max(
      0,
      Math.round(
        (prev.health - minutes * 1) * 0.99 +
          (newHappiness * 0.4 + newSatiation * 0.4 + newCleanliness * 0.2) *
            0.01
      )
    );
    return {
      ...prev,
      health: newHealth,
      happiness: newHappiness,
      satiation: newSatiation,
      cleanliness: newCleanliness,
    };
  });
}
