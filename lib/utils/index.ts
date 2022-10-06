export const capitalizeFirstLetter = (str: string) =>
  str && str.length ? str.charAt(0).toUpperCase() + str.slice(1) : str;

export const capitalizeAllStartingWords = (
  str: string,
  lower: boolean = false,
) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|[''({])+\S/g, (match) =>
    match.toUpperCase(),
  );

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const generateRandomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const diffArrays = (arr1: any[], arr2: any[]): any[] =>
  arr1 &&
  arr2 &&
  arr1.filter(
    (obj1) => !arr2.find((obj2) => obj1.id === obj2.id && obj2.isChecked),
  );

export const diffArraysWithId = (arr1: any[], arr2: any[]): any[] =>
  arr1 &&
  arr2 &&
  arr1.filter((obj1) => !arr2.find((obj2) => obj1.id === obj2.id && obj2.id));

export const diffDates = (date: number, date2: number) =>
  Math.floor(Math.abs(date - date2) / 86400000);

export const isBlankString = (str: string) =>
  !str || str.length === 0 || /^\s*$/.test(str);

export const randomBoolean = () => Math.random() >= 0.5;
export const coinflip = () => Math.random() >= 0.5;

export const isEven = (val: number) => val % 2 === 0;

export const removeAllDuplicateValuesInArray = (arr: any[]) => [
  ...new Set(arr),
];

export const isArray = (arr: any[]) => Array.isArray(arr);

export const generateRandomString = () => Math.random().toString(36).slice(2);

export const mergeArrays = (a: any[], b: any[]) => [...a, ...b];

export const mergeArraysAndRemoveDuplicates = (a: any[], b: any[]) => [
  ...new Set([...a, ...b]),
];

export const getTrueType = (obj: any) =>
  Object.prototype.toString.call(obj).slice(8, -1).toLocaleLowerCase();

export const isNotEmptyArray = (arr: any[]) =>
  Array.isArray(arr) && arr.length > 0;

export const safelyParseJson = (string?: string | null) => {
  try {
    return JSON.parse(string as string);
  } catch {
    return string;
  }
};

export const isEmptyObj = (obj: any) =>
  Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;

export const shuffleArray = (arr: any[]) => arr.sort(() => 0.5 - Math.random());

export const convertSnakeToCamelCase = (str: string) => {
  return str.replace(/([-_][a-z])/g, (group) =>
    group.toUpperCase().replace("-", "").replace("_", ""),
  );
};

export const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0")}`;

export const convertRGBToHexColor = (r: number, g: number, b: number) =>
  "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

export const getMinMaxOfArray = (arr: any[]) => [
  Math.min(...arr),
  Math.max(...arr),
];

export const sleep = (delay: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

/**
 * Create an object from the pairs of key and value
 * @param arr
 * @returns
 */
export const toObj = (arr: any[]) => Object.fromEntries(arr);

/**
 * Get union of arrays
 * @param arr
 * @returns
 */
export const getUnion = (...arr) => [...new Set(arr.flat())];

/**
 * Partition an array based on the criteria/condition
 * @param arr
 * @param criteria
 * @returns
 */
export const partition = (arr: any[], criteria: any) =>
  arr.reduce((acc, i) => (acc[criteria(i) ? 0 : 1].push(i), acc), [[], []]);
