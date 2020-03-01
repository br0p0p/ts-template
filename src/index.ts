export const add = (...args: number[]): number =>
  args.reduce((result, val) => result + val, 0)
