# currency-to-float.js

[![CI](https://github.com/mateus4k/currency-to-float/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/mateus4k/currency-to-float/actions/workflows/ci.yml)

<!-- The main purpose of this repository is to show a working Node.js API Server + front-end project and workflow for writing Node code in TypeScript. -->

<!-- **Live Demo**: [https://typescript-node-starter.azurewebsites.net/](https://typescript-node-starter.azurewebsites.net/) -->

## Currency examples

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

## Getting started

- Clone the repository

```
git clone https://github.com/mateus4k/currency-to-float.git
```

- Install dependencies

```
cd currency-to-float
npm install
```

## License

Copyright (c) 2021 Mateus Sampaio. All rights reserved.
Licensed under the [MIT](LICENSE) License.
