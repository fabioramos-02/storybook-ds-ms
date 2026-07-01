export default {
    stories: [
        '../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: ['@storybook/addon-a11y'],
    framework: {
        name: '@storybook/html-vite',
        options: {}
    },
    async viteFinal(config) {
        config.base = process.env.STORYBOOK_BASE_PATH || config.base || '/';
        return config;
    }
};
