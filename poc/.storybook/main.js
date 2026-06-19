/** Storybook — config principal (POC DS-MS). */
export default {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.js'],
  addons: [
    '@storybook/addon-essentials', // docs, controls, actions, viewport...
    '@storybook/addon-a11y',       // axe-core: checa acessibilidade (eMAG/WCAG)
  ],
  framework: {
    name: '@storybook/web-components-vite', // renderiza HTML cru e Web Components (Lit)
    options: {},
  },
  docs: { autodocs: 'tag' },
};
