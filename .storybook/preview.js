
import '../src/main.css';
import '../src/styles/fonts.css';
import '../src/styles/variables.css';
import '../src/styles/typography.css';
import '../src/styles/spacing.css';
import '../src/styles/radius.css';
import '../src/styles/component-doc.css';

export const parameters = {
    options: {
        storySort: {
            order: [
                'Design System MS',
                'Tokens',
                'Componentes',
            ],
        },
    },
    a11y: {
        element: '#storybook-root',
        config: {
            rules: [
                { id: 'color-contrast', enabled: true },
                { id: 'label', enabled: true },
                { id: 'button-name', enabled: true },
                { id: 'link-name', enabled: true },
                { id: 'aria-valid-attr', enabled: true },
                { id: 'landmark-unique', enabled: true },
            ],
        },
        options: {},
        manual: false,
    },
};

export const globalTypes = {
    a11y: {
        description: 'Nivel de checagem WCAG',
        defaultValue: 'wcag2aa',
        toolbar: {
            title: 'A11y',
            icon: 'accessibility',
            items: [
                { value: 'wcag2a', title: 'WCAG 2.0 A' },
                { value: 'wcag2aa', title: 'WCAG 2.1 AA (padrao SETDIG)' },
                { value: 'wcag2aaa', title: 'WCAG 2.0 AAA' },
            ],
            dynamicTitle: true,
        },
    },
};