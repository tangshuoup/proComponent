import { defineConfig } from 'father';
export default defineConfig({
  cjs: {
    output: './lib',
    transformer: 'babel',
  },
  esm: {
    output: './es',
    transformer: 'babel',
  },
  targets: {
    ie: 10,
  },
});
