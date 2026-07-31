export const EPOCH = Date.UTC(2005, 4, 28, 16, 0, 0);

export function elapsedSeconds(now: number): number {
  return Math.floor((now - EPOCH) / 1000);
}
