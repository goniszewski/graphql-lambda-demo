export function validatePlanet(planet: string) {
  if (planet === "") {
    throw new Error("Planet cannot be empty");
  }
}
