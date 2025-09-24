export function bboxLooksGlobal(bb?: number[]) {
  if (!bb || bb.length !== 4) return false;
  const [south, north, west, east] = bb;
  const lonSpan = Math.abs(east - west);
  const latSpan = Math.abs(north - south);
  return (west <= -179.5 && east >= 179.5) || lonSpan > 300 || latSpan > 120;
}
