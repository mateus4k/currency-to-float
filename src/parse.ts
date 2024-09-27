import { allCommas, differentChars, lastHyphen } from './regex';

/**
 * Parse currency string into float
 *
 * @param {string} input
 * @return {number}
 */
export function parse(input: string): number {
  let value: string;

  // replace last hyphen with 00
  value = input.replace(lastHyphen, ',00');

  // replace all commas by dot
  value = value.replace(allCommas, '.');

  // remove all characters other than number or dot
  value = value.replace(differentChars, '$1');

  // insert the float pattern if value has no dot
  if (!value.includes('.')) {
    value = `${value}.00`;
  }

  // split the value by dots
  const splittedValue = value.split('.');

  // remove all dots expect for the last
  value = `${splittedValue.slice(0, -1).join('')}.${splittedValue.slice(-1)}`;

  // transform the value in a number type
  return Number(value);
}
