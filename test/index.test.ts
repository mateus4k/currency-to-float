import {parse} from '../src';

test.each([
  ['$12.50 USD', 12.5],
  ['$12 USD', 12],
  ['$12.50 CAD', 12.5],
  ['12,50 $ CAD', 12.5],
  ['$12.50 AUD', 12.5],
  ['12,50 € EUR', 12.5],
  ['12.50 € EUR', 12.5],
  ['€12.50 EUR', 12.5],
  ['€12,50 EUR', 12.5],
  ['£12.50 GBP', 12.5],
  ['¥1250 JPY', 1250],
  ['¥109,133 JPY', 109.133],
  ['¥54.566,8 JPY', 54566.8],
  ['$12.50 NZD', 12.5],
  ['$12.50 HKD', 12.5],
  ['$12.50 SGD', 12.5],
  ['12,50 kr. DKK', 12.5],
  ['14 £', 14],
  ['29.99 €', 29.99],
  ['R$ 14,99', 14.99],
  ['R$ 14.99', 14.99],
  ['$ 1.444,99', 1444.99],
  ['$ 1,444.99', 1444.99],
  ['14,99 €', 14.99],
  ['14.99 €', 14.99],
  ['79,99 €', 79.99],
])('parse("%s") === %f', (input, expected) => {
  const parsed = parse(input);
  expect(parsed).toBe(expected);
});