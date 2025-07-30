import type { Preview } from '@storybook/nextjs-vite'
import '../src/app/globals.css';

import { withThemeByDataAttribute } from '@storybook/addon-themes';

 

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [withThemeByDataAttribute({
    attributeName: 'data-mode',  
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }), withThemeByDataAttribute({
      themes: {
          // nameOfTheme: 'dataAttributeForTheme',
          light: '',
          dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-mode',
  })],
};

export default preview;
