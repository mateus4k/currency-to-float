# currency-to-float.js

[![CI](https://github.com/mateus4k/currency-to-float/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/mateus4k/currency-to-float/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/mateus4k/currency-to-float/branch/main/graph/badge.svg?token=KQUaHGJkaV)](https://codecov.io/gh/mateus4k/currency-to-float)
[![npm version](https://badge.fury.io/js/currency-to-float.svg)](https://badge.fury.io/js/currency-to-float)

The main purpose of this package is to turn any currency into a number, **without having to specify the currency source.**

## Usage

- Install the package

```sh
npm install currency-to-float
# or
yarn add currency-to-float
```

- Import the package

```ts
const { parse } = require('currency-to-float');
// or
import { parse } from 'currency-to-float';
```

- Transform any currency in number

```ts
const value = parse('R$ 1.000,00'); // 1000
```

## Supported Currencies

| Currency                    |    Locale    | Input (string) | Output (Number) |
| --------------------------- | :----------: | :------------: | :-------------: |
| US Dollar ($, USD)          |    en-US     |   $12.50 USD   |      12.5       |
| US Dollar ($, USD)          |    en-US     |    $12 USD     |       12        |
| Brasilian Real (R$, BRL)    |    pt-BR     |    R$ 12,50    |      12.5       |
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

## License

Copyright (c) 2021 Mateus Sampaio. All rights reserved.
Licensed under the [MIT](LICENSE) License.
