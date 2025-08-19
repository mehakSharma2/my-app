/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../src/**/*.stories.@(js|jsx|ts|tsx)"  // 👈 just look for stories
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"  // includes docs, controls, actions etc.
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  staticDirs: ["../public"], // 👈 fixed path
};
export default config;
