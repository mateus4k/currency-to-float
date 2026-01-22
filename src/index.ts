const POW10 = [
  1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000,
];

/**
 * Parses a currency string and returns a floating-point number.
 *
 * This function extracts numeric values from a string, handling various currency formats.
 * It identifies the decimal separator based on the last valid separator found (either `.` or `,`).
 * Non-numeric characters are ignored, except for the minus sign `-` which indicates a negative value.
 *
 * @param input - The currency string to parse.
 * @returns The parsed floating-point number.
 *
 * @example
 * parse("$1,234.56")   // 1234.56
 * parse("R$ 1.234,56") // 1234.56
 * parse("-500.00")     // -500
 * parse("1.000,00")    // 1000
 */
export function parse(input: string): number {
  const len = input.length;

  let lastValidSepIdx = -1;
  let digitCount = 0;
  let hyphenAfterSep = false;
  let isNegative = false;
  let firstDigitSeen = false;
  let pendingSepIdx = -1;
  let result = 0;

  for (let i = 0; i < len; i++) {
    const code = input.charCodeAt(i);

    if (code >= 48 && code <= 57) {
      result = result * 10 + (code - 48);
      digitCount++;
      firstDigitSeen = true;
      hyphenAfterSep = false;
      if (pendingSepIdx >= 0) {
        lastValidSepIdx = pendingSepIdx;
        pendingSepIdx = -1;
      }
    } else if (code === 46 || code === 44) {
      if (firstDigitSeen) {
        pendingSepIdx = digitCount;
        hyphenAfterSep = false;
      }
    } else if (code === 45) {
      if (!firstDigitSeen) {
        isNegative = true;
      } else if (pendingSepIdx === digitCount && pendingSepIdx >= 0) {
        lastValidSepIdx = pendingSepIdx;
        hyphenAfterSep = true;
        pendingSepIdx = -1;
      }
    }
  }

  if (hyphenAfterSep) {
    digitCount += 2;
    result *= 100;
  }

  if (lastValidSepIdx >= 0 && lastValidSepIdx < digitCount) {
    const decimalDigits = digitCount - lastValidSepIdx;
    result /= POW10[decimalDigits] || 10 ** decimalDigits;
  }

  return isNegative ? -result : result;
}

export default parse;
export { parse as currencyToFloat };
