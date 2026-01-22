import { build } from 'bun';
import { rm } from 'node:fs/promises';

console.log('Cleaning dist...');
await rm('./dist', { recursive: true, force: true });

console.log('Building...');
// Common config
const config = {
  entrypoints: ['./src/index.ts'],
  outdir: './dist',
  minify: true,
  sourcemap: 'external',
} as const;

// ESM Build
await build({
  ...config,
  format: 'esm',
  naming: '[name].mjs',
});

// CJS Build
await build({
  ...config,
  format: 'cjs',
  naming: '[name].js',
});

console.log('Generating types...');
// Generate d.ts
const proc = Bun.spawn(['bun', 'x', 'tsc', 'src/index.ts', '--declaration', '--emitDeclarationOnly', '--outDir', 'dist']);
await proc.exited;

if (proc.exitCode !== 0) {
  const stderr = await new Response(proc.stderr).text();
  console.error('Type generation failed:', stderr);
  process.exit(1);
}

// Copy d.ts to d.mts for ESM compatibility matching tsup output
try {
  const dts = Bun.file('./dist/index.d.ts');
  await Bun.write('./dist/index.d.mts', dts);
} catch (e) {
  console.warn('Could not create index.d.mts', e);
}

console.log('Build complete');
