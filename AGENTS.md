# AGENTS.md - Coding Agent Guidelines

This file contains essential guidelines for AI coding agents working in the `currency-to-float` repository.

## Project Overview

A **dependency-free** TypeScript utility library for parsing currency strings to floats without specifying the source currency. Small, fast, and focused.

**Key characteristics:**
- Zero runtime dependencies
- Dual format: ESM + CommonJS
- Performance-focused (benchmarked against currency.js)
- Strict TypeScript
- **Bun Runtime** for development and testing

---

## Build/Lint/Test Commands

### Primary Commands

```bash
# Build (tsup - outputs to /dist)
bun run build

# Lint (TypeScript type checking + Biome)
bun run lint

# Auto-fix lint issues
bun run lint:fix

# Run all tests with coverage
bun test

# Run tests in watch mode
bun test --watch

# Run single test file
bun test test/index.test.ts

# Run specific test by name
bun test -t "parse function"

# Run benchmarks
bun benchmark
```

### CI Pipeline Order

The GitHub Actions workflow runs: `lint` → `test` → `build`

Always verify your changes pass all three before submitting.

---

## Project Structure

```
currency-to-float/
├── src/
│   ├── index.ts      # Entry point and main logic
├── test/
│   └── index.test.ts # Bun tests
├── benchmarks/
│   └── index.ts      # Performance benchmarks
├── dist/             # Build output (gitignored)
├── biome.json        # Linter/formatter config
├── tsconfig.json     # TypeScript config
├── tsup.config.ts    # Build config
└── bun.lockb         # Bun lockfile
```

---

## Code Style Guidelines

### Formatting (Biome)

- **Indentation**: 2 spaces (not tabs)
- **Quotes**: Single quotes for strings
- **Semicolons**: Required
- **Trailing commas**: As per Biome defaults

### TypeScript

- **Strict mode**: Enabled - do not bypass with `as any`, `@ts-ignore`, or `@ts-expect-error`
- **Target**: ES2015
- **Module**: ES2020
- **Type annotations**: Required for function parameters and return types

### Imports

- Use named imports where possible
- Organize imports (Biome handles this)
- Relative paths for internal modules
- No external runtime dependencies allowed

### Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| Functions | camelCase | `parse`, `runTest` |
| Variables | camelCase | `splittedValue`, `lastHyphen` |
| Types | PascalCase | `Runner` |
| Files | kebab-case | `index.ts`, `parse.ts` |

### Documentation

- Use JSDoc for public functions:
```typescript
/**
 * Parse currency string into float
 *
 * @param {string} input
 * @return {number}
 */
export function parse(input: string): number {
```

---

## Testing Guidelines

### Framework: Bun Test

Tests located in `/test/*.test.ts`

### Patterns

**Data-driven tests** using `it.each()`:
```typescript
const inputs = [
  { input: '$12.50 USD', output: 12.5 },
  { input: 'R$ 12,50', output: 12.5 },
];

describe('parse function', () => {
  it.each(inputs)('parse("%s") === %f', ({ input, output }) => {
    const parsed = parse(input);
    expect(parsed).toBe(output);
  });
});
```

### Running Single Tests

```bash
# Run specific test file
bun test test/index.test.ts

# Run tests matching a pattern
bun test -t "parse function"

# Watch single file
bun test --watch test/index.test.ts
```

---

## Error Handling

This library does not throw errors. Invalid inputs return `NaN` or unexpected values. The philosophy is to be permissive and attempt parsing any string.

---

## Export Pattern

Main entry (`src/index.ts`):
```typescript
export function parse(input: string): number { ... }
export default parse;
```

Both named and default exports are supported for consumer flexibility.

---

## Performance Considerations

- No external dependencies at runtime
- String operations are optimized for common currency formats
- Run `bun benchmark` to verify performance impact of changes

---

## Common Mistakes to Avoid

1. **Adding runtime dependencies** - This library must remain dependency-free
2. **Bypassing TypeScript strict mode** - Fix type errors properly
3. **Breaking the dual export** - Both ESM and CJS must work
4. **Ignoring edge cases** - Check existing test cases for supported formats

---

## Quick Reference

| Task | Command |
|------|---------|
| Build | `bun run build` |
| Lint | `bun run lint` |
| Fix lint | `bun run lint:fix` |
| Test all | `bun test` |
| Test single | `bun test -t "test name"` |
| Benchmark | `bun benchmark` |
