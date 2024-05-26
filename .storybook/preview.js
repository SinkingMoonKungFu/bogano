/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: (a, b) => {
        const numSlashesA = a.title.split("/").length - 1;
        const numSlashesB = b.title.split("/").length - 1;

        if (numSlashesA === numSlashesB) {
          return a.id === b.id
            ? 0
            : a.id.localeCompare(b.id, undefined, { numeric: true });
        } else {
          return numSlashesB - numSlashesA;
        }
      },
    },
  },
};

export default preview;
