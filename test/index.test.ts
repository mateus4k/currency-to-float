import lib, { parse } from '../src';

const inputs = [
  { input: '$12.50 USD', output: 12.5 },
  { input: '$12 USD', output: 12 },
  { input: '$12.50 CAD', output: 12.5 },
  { input: '12,50 $ CAD', output: 12.5 },
  { input: '$12.50 AUD', output: 12.5 },
  { input: '12,50 € EUR', output: 12.5 },
  { input: '12.50 € EUR', output: 12.5 },
  { input: '12.50€', output: 12.5 },
  { input: '€12.50', output: 12.5 },
  { input: '12.500,- €', output: 12500 },
  { input: '12,- €', output: 12 },
  { input: '€12,50 EUR', output: 12.5 },
  { input: '€12.50 EUR', output: 12.5 },
  { input: '£12.50 GBP', output: 12.5 },
  { input: '£12,50 GBP', output: 12.5 },
  { input: '¥1250 JPY', output: 1250 },
  { input: '¥109,133 JPY', output: 109.133 },
  { input: '¥54.566,8 JPY', output: 54566.8 },
  { input: '$12.50 NZD', output: 12.5 },
  { input: '$12.50 HKD', output: 12.5 },
  { input: '$12.50 SGD', output: 12.5 },
  { input: '12,50 kr. DKK', output: 12.5 },
  { input: '14 £', output: 14 },
  { input: 'R$ 12,50', output: 12.5 },
  { input: 'R$ 12.50', output: 12.5 },
  { input: '$ 1.200,50', output: 1200.5 },
  { input: '$ 1,200.50', output: 1200.5 },
  { input: '$123,456,789,00', output: 123456789 },
];

describe('parse function', () => {
  it.each(inputs)('parse("%s") === %f', ({ input, output }) => {
    const parsed = parse(input);
    expect(parsed).toBe(output);
  });
});

describe('export default', () => {
  it('parse() is default exported', () => {
    expect(lib).toBe(parse);
  });
});
