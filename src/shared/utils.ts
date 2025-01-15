export const logError = (error: Error) => {
  const str = [error.name, error.message].filter((x) => x).join('::');
  console.warn(str, error);
};

export const awaitCondition = async (conditionCheck: Function, ms = 10) => {
  while (!conditionCheck()) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
};
