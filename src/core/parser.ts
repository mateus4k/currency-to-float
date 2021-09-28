'use strict';

/**
 * Parse currency
 *
 * @param {string} input
 * @return {Number}
 */
export function parse(input: string): number {
  let value: string;

  // replace all commas by dot
  value = input.replace(/,/g, '.');

  // remove all chars that is different to number or dot
  value = value.replace(/(\D)*([\d+[,.]*\d+]*)(\D*)/, '$2');

  // insert the float pattern if the value hasn't any dot
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
