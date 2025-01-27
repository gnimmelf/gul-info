import stringifyObj from 'fast-json-stable-stringify';

export { default as deepEqual } from 'fast-deep-equal/es6';

export const logError = (error: Error) => {
  const str = [error.name, error.message].filter((x) => x).join('::');
  console.warn(str, error);
};

export const awaitCondition = async (conditionCheck: Function, ms = 10) => {
  while (!conditionCheck()) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
};

export const timeout = async (ms = 0, fn?: () => void) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(fn ? fn() : undefined), ms),
  );
};

export const simpleHash = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32-bit integer
  }
  return hash.toString();
};

export const stableStringify = (obj: Object) => {
  return stringifyObj(obj);
};

export const deepCopy = (obj: any) => JSON.parse(JSON.stringify(obj));
