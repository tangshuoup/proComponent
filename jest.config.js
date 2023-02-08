/*
 * @Descripttion:
 * @version:
 * @Author: tangshuo
 * @Date: 2023-02-07 15:10:21
 * @LastEditors: tangshuo
 * @LastEditTime: 2023-02-08 10:13:44
 */
const { readdirSync } = require('fs');
const { join } = require('path');

const pkgList = readdirSync(join(__dirname, './packages')).filter((pkg) => pkg.charAt(0) !== '.');

const moduleNameMapper = {
  '\\.(css|less|sass|scss)$': require.resolve('identity-obj-proxy'),
};

pkgList.forEach((shortName) => {
  const name = `@tangshuo/pro-${shortName}`;
  moduleNameMapper[name] = join(__dirname, `./packages/${shortName}/src`);
});

module.exports = {
  collectCoverageFrom: [
    'packages/**/src/**/*.{ts,tsx}',
    '!packages/**/src/**/*.d.ts',
    '!packages/**/src/**/typing.ts',
    '!packages/**/src/demos/**',
    '!packages/**/src/**/demos/**',
  ],
  testEnvironment: 'jsdom',
  moduleNameMapper,
  transform: {
    '^.+\\.(t|j)sx?$': ['esbuild-jest', { sourcemap: true }],
  },
  transformIgnorePatterns: [`/node_modules/(?!${[].join('|')})`],
  verbose: true,
  snapshotSerializers: [require.resolve('enzyme-to-json/serializer')],
  setupFiles: ['./tests/setupTest.js'],
};
