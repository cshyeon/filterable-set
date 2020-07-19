module.exports = {
  out: './docs/',
  module: 'es2015',
  includes: './src/**',
  exclude: ['./test/**/*', '**/*.types.ts'],
  mode: 'file',
  excludeExternals: true,
  excludeNotExported: true,
  excludePrivate: true,
  excludeProtected: true,
  target: 'ES6',
  tsconfig: './tsconfig.json',
  ignoreCompilerErrors: true,
};
