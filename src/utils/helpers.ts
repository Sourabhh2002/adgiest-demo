export function generateData(
  data: { x: string; y: number }[],
  maxX: number,
  yMin: number = 10,
  yMax: number = 100,
  reverse: boolean = false // Add reverse parameter with default value
) {
  const lastPoint = data[data.length - 1];
  const startX = parseInt(lastPoint.x) + 1;

  // Generate new points
  for (let x = startX; x <= maxX; x++) {
    const y = Math.floor(Math.random() * (yMax - yMin + 1)) + yMin;
    data.push({ x: x.toString(), y });
  }

  // Reverse the data if the reverse flag is true
  if (reverse) {
    data = data.reverse();
  }

  return data;
}
