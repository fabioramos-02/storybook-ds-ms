/** Storybook — preview global (POC DS-MS). */
export default {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // Painel de acessibilidade (axe) visível por padrão.
    a11y: { element: '#storybook-root' },
    options: {
      storySort: { order: ['Componentes', ['Button']] },
    },
  },
};
