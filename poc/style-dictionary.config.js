/* ============================================================================
   DS-MS — Configuração do Style Dictionary (POC)
   Lê tokens/*.json (fonte única) e gera as saídas por plataforma:
   CSS, SCSS, JS/TS, PHP, Python, JSON.
   Roda via:  npm run tokens   (style-dictionary build --config style-dictionary.config.js)

   Os formatos PHP e Python não existem nativamente no Style Dictionary —
   registramos abaixo. Os 'transforms' name/cti/constant geram nomes em
   CONSTANTE_MAIÚSCULA (ex.: COLOR_PRIMARY_500).
   ============================================================================ */
const StyleDictionary = require('style-dictionary');

/* Formato PHP — classe final de constantes (DSMS\Tokens::COLOR_PRIMARY_500) */
StyleDictionary.registerFormat({
  name: 'php/class',
  formatter: function ({ dictionary }) {
    const consts = dictionary.allTokens
      .map((t) => `    const ${t.name} = ${JSON.stringify(t.value)};`)
      .join('\n');
    return (
      '<?php\n\n' +
      'namespace DSMS;\n\n' +
      '/**\n' +
      ' * DS-MS — design tokens.\n' +
      ' * GERADO automaticamente pelo Style Dictionary. NÃO edite à mão.\n' +
      ' */\n' +
      'final class Tokens\n{\n' +
      consts +
      '\n}\n'
    );
  },
});

/* Formato Python — módulo de constantes (from dsms.tokens import COLOR_PRIMARY_500) */
StyleDictionary.registerFormat({
  name: 'python/module',
  formatter: function ({ dictionary }) {
    const lines = dictionary.allTokens
      .map((t) => `${t.name} = ${JSON.stringify(t.value)}`)
      .join('\n');
    return (
      '"""DS-MS — design tokens.\n\n' +
      'GERADO automaticamente pelo Style Dictionary. NÃO edite à mão.\n' +
      '"""\n\n' +
      lines +
      '\n'
    );
  },
});

module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    /* Web — CSS custom properties (outputReferences mantém o grafo: var(--color-primary-500)) */
    css: {
      transformGroup: 'css',
      buildPath: 'dist/css/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: { outputReferences: true },
        },
      ],
    },
    /* Sass */
    scss: {
      transformGroup: 'scss',
      buildPath: 'dist/scss/',
      files: [{ destination: '_tokens.scss', format: 'scss/variables' }],
    },
    /* JS + tipos TS */
    js: {
      transformGroup: 'js',
      buildPath: 'dist/js/',
      files: [
        { destination: 'tokens.js', format: 'javascript/es6' },
        { destination: 'tokens.d.ts', format: 'typescript/es6-declarations' },
      ],
    },
    /* PHP */
    php: {
      transforms: ['attribute/cti', 'name/cti/constant', 'color/hex'],
      buildPath: 'dist/php/',
      files: [{ destination: 'Tokens.php', format: 'php/class' }],
    },
    /* Python */
    python: {
      transforms: ['attribute/cti', 'name/cti/constant', 'color/hex'],
      buildPath: 'dist/python/',
      files: [{ destination: 'tokens.py', format: 'python/module' }],
    },
    /* JSON achatado — para ferramentas/integrações */
    json: {
      transformGroup: 'js',
      buildPath: 'dist/json/',
      files: [{ destination: 'tokens.json', format: 'json/flat' }],
    },
  },
};
