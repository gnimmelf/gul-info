export { default as deepEqual } from 'fast-deep-equal/es6';

export const timeout = async (ms = 200, fn?: () => void) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(fn ? fn() : undefined), ms),
  );
};

export const deepCopy = (obj: any) => JSON.parse(JSON.stringify(obj));

export const toDotPath = (...args: (string | number)[]): string => {
  return args
    .flatMap((x) => x)
    .map((p, i) => (typeof p === 'number' ? `[${p}]` : i === 0 ? p : `.${p}`))
    .join('');
};

export const fromDotPath = (path: string): (string | number)[] => {
  return path
    .split(/\.|\[(\d+)\]/)
    .filter(Boolean)
    .map((p) => (p.match(/^\d+$/) ? Number(p) : p));
};

export const isPrimitive = (value: unknown): boolean => {
  return (
    value === null || (typeof value !== 'object' && typeof value !== 'function')
  );
};
