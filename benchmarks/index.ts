import Benchmark from 'benchmark';
import currencyToFloat from '../src';
import { inputs } from '../test/inputs';

const suite = new Benchmark.Suite();

suite
  .add('currencyToFloat()', () => {
    for (const { input } of inputs) {
      currencyToFloat(input);
    }
  })
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({ async: true });
