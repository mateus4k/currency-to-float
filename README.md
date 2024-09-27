# CurrencyToFloat

[![CI](https://github.com/mateus4k/currency-to-float/actions/workflows/tests.yml/badge.svg?branch=main)](https://github.com/mateus4k/currency-to-float/actions/workflows/tests.yml)
[![code coverage](https://codecov.io/gh/mateus4k/currency-to-float/branch/main/graph/badge.svg?token=KQUaHGJkaV)](https://codecov.io/gh/mateus4k/currency-to-float)
[![bundle size](https://img.shields.io/bundlephobia/min/currency-to-float?label=bundle%20size)](https://bundlephobia.com/result?p=currency-to-float)

The `currency-to-float` package is a **dependency-free** utility designed to convert currency values into numerical representations **without** the need to specify the source currency.

## Installation

You can install `currency-to-float` using npm or any other package manager:

```sh
npm install currency-to-float
```

## Usage

```ts
import currencyToFloat from 'currency-to-float';
// Or use CommonJs:
// const { parse } = require('currency-to-float');

const value = currencyToFloat('$12.50 USD');

console.log(value); // 12.5
```

## Supported Currencies

| Currency                    |    Locale    | Input (string) | Output (Number) |
| --------------------------- | :----------: | :------------: | :-------------: |
| US Dollar ($, USD)          |    en-US     |   $12.50 USD   |      12.5       |
| Brazilian Real (R$, BRL)    |    pt-BR     |    R$ 12,50    |      12.5       |
| Canadian Dollar ($, CAD)    |    en-CA     |   $12.50 CAD   |      12.5       |
| Canadian Dollar ($, CAD)    |    fr-CA     |  12,50 $ CAD   |      12.5       |
| Australian Dollar ($, AUD)  |    en-AU     |   $12.50 AUD   |      12.5       |
| Euro (€, EUR)               | de-DE, fr-FR |  12,50 € EUR   |      12.5       |
| Euro (€, EUR)               |    en-IE     |   €12.50 EUR   |      12.5       |
| Euro (€, EUR)               |    nl-NL     |   €12,50 EUR   |      12.5       |
| British Pounds (£, GBP)     |    en-GB     |   £12.50 GBP   |      12.5       |
| Japanese Yen (¥, JPY)       |    ja-JP     |   ¥1250 JPY    |      1250       |
| New Zealand Dollar ($, NZD) |    en-NZ     |   $12.50 NZD   |      12.5       |
| Hong Kong Dollar ($, HKD)   |    zh-HK     |   $12.50 HKD   |      12.5       |
| Singapore Dollar ($, SGD)   |    zh-SG     |   $12.50 SGD   |      12.5       |
| Danish Krone (Kr, DKK)      |    da-DK     | 12,50 kr. DKK  |      12.5       |

## Benchmark

Run locally with `npm run benchmark`

```sh
currencyToFloat x 235,939 ops/sec ±1.10% (92 runs sampled)
currency.js x 204,132 ops/sec ±2.87% (89 runs sampled)
Fastest is currencyToFloat
```

## License

This package is open-source and available under the [MIT](LICENSE) License.
