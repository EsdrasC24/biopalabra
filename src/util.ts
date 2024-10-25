type Coords = {
  x: number; // Percent in axis X
  y: number; // Percent in axis Y
}

export function getRelativeCoords(pts: number): Array<Coords> {
  const coords: Array<Coords> = [];
  const angleIni = -Math.PI / 2;

  for (let i = 1; i <= pts; i++) {
    const angle = angleIni + (i - 1) * 2 * Math.PI / pts;
    const x = 43.7 + 50 * Math.cos(angle); // middle in 50% and fit for radio
    const y = 50 + 50 * Math.sin(angle);
    coords.push({ x, y });
  }

  return coords;
}
