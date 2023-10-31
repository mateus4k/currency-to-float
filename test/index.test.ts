import lib, { parse } from '../src';
import { inputs } from './inputs';

describe('custom export', () => {
  it.each(inputs)('parse("%s") === %f', ({ input, output }) => {
    const parsed = parse(input);
    expect(parsed).toBe(output);
  });
});

describe('export default', () => {
  it.each(inputs)('parse("%s") === %f', ({ input, output }) => {
    const parsed = lib(input);
    expect(parsed).toBe(output);
  });
});
