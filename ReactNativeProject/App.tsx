import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import AppRoutes from './src/routes/app.routes';
import theme from './src/themes/globalTheme/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
