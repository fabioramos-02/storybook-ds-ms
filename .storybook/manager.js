import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';

addons.setConfig({
    theme: create({
        base: 'light',

        brandTitle: 'Design System MS',
        brandUrl: 'https://www.ms.gov.br',
        brandTarget: '_blank',

        // Pode ser SVG, PNG ou imagem externa
        brandImage: '/favicon-ms.svg',
    }),
});