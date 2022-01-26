import {parse} from '../src';

test.each([
  ['$12.50 USD', 12.5],
  ['$12 USD', 12],
  ['$12.50 CAD', 12.5],
  ['12,50 $ CAD', 12.5],
  ['$12.50 AUD', 12.5],
  ['12,50 € EUR', 12.5],
  ['12.50 € EUR', 12.5],
  ['12.50€', 12.5],
  ['€12.50', 12.5],
  ['12.500,- €', 12500],
  ['12,- €', 12],
  ['€12,50 EUR', 12.5],
  ['€12.50 EUR', 12.5],
  ['£12.50 GBP', 12.5],
  ['£12,50 GBP', 12.5],
  ['¥1250 JPY', 1250],
  ['¥109,133 JPY', 109.133],
  ['¥54.566,8 JPY', 54566.8],
  ['$12.50 NZD', 12.5],
  ['$12.50 HKD', 12.5],
  ['$12.50 SGD', 12.5],
  ['12,50 kr. DKK', 12.5],
  ['14 £', 14],
  ['R$ 12,50', 12.5],
  ['R$ 12.50', 12.5],
  ['$ 1.200,50', 1200.5],
  ['$ 1,200.50', 1200.5],
  ['$123,456,789,00', 123456789],
])('parse("%s") === %f', (input, expected) => {
  const parsed = parse(input);
  expect(parsed).toBe(expected);
});
