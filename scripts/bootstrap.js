/*
 * @Descripttion:
 * @version:
 * @Author: tangshuo
 * @Date: 2023-02-01 09:48:21
 * @LastEditors: tangshuo
 * @LastEditTime: 2023-02-08 16:53:23
 */
const { existsSync, writeFileSync, readdirSync, readFileSync } = require('fs');
const { join, resolve } = require('path');
const { yParser } = require('@umijs/utils');

(async () => {
  const args = yParser(process.argv);
  const version = '1.0.0-beta.1';

  const pkgs = readdirSync(join(__dirname, '../packages')).filter((pkg) => pkg.charAt(0) !== '.');

  pkgs.forEach((shortName) => {
    const name = `@tangshuo/pro-${shortName}`;

    const pkgJSONPath = join(__dirname, '..', 'packages', shortName, 'package.json');
    const pkgFATHERPath = join(__dirname, '..', 'packages', shortName, '.fatherrc.ts');
    const pkgJSONExists = existsSync(pkgJSONPath);
    const pkgFATHERExists = existsSync(pkgFATHERPath);
    let json;
    if (args.force || !pkgJSONExists) {
      json = {
        name,
        version,
        description: name,
        module: 'es/index.js',
        main: 'lib/index.js',
        types: 'lib/index.d.ts',
        scripts: {
          build: 'father build',
        },
        files: ['lib', 'dist', 'es'],
        browserslist: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 10'],
        license: 'MIT',
        peerDependencies: {
          react: '>=16.9.0',
          'react-dom': '>16.9.0',
        },
        publishConfig: {
          access: 'public',
        },
      };
      if (pkgJSONExists) {
        const pkg = require(pkgJSONPath);
        [
          'dependencies',
          'devDependencies',
          'peerDependencies',
          'bin',
          'version',
          'files',
          'authors',
          'types',
          'sideEffects',
          'main',
          'module',
          'description',
        ].forEach((key) => {
          if (pkg[key]) json[key] = pkg[key];
        });
      }

      writeFileSync(pkgJSONPath, `${JSON.stringify(json, null, 2)}\n`);
    }

    if (!pkgFATHERExists) {
      const templateFather = readFileSync(resolve(__dirname, '.', 'fatherTemplate.js'));
      writeFileSync(pkgFATHERPath, templateFather);
    }
    const readmePath = join(__dirname, '..', 'packages', shortName, 'README.md');
    if (args.force || !existsSync(readmePath)) {
      writeFileSync(
        readmePath,
        `# ${name}

> ${json?.description}.

## Install

Using npm:

\`\`\`bash
$ npm install --save ${name}
\`\`\`

or using yarn:

\`\`\`bash
$ yarn add ${name}
\`\`\`

or using pnpm:

\`\`\`bash
$ pnpm add ${name}
\`\`\`

`,
      );
    }
  });
})();
