import Benchmark from 'benchmark';
import currencyJs from 'currency.js';
import currencyToFloat from '../src';

const inputs = [
  { input: '$12.50 USD', output: 12.5 },
  { input: '$12 USD', output: 12 },
  { input: '$12.50 CAD', output: 12.5 },
];

type Runner = (input: string) => number;

const runTest = (runner: Runner) => {
  for (const { input, output } of inputs) {
    const result = runner(input);
    if (result !== output) {
      console.error(`invalid: ${result} should be ${output}`);
    }
  }
};

const currencyToFloatRunner: Runner = (input: string) => currencyToFloat(input);
const currencyJsRunner: Runner = (input: string) => currencyJs(input).value;

const suite = new Benchmark.Suite();

suite
  .add('currencyToFloat', () => {
    runTest(currencyToFloatRunner);
  })
  .add('currency.js', () => {
    runTest(currencyJsRunner);
  })
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({ async: true, minTime: 60 });
