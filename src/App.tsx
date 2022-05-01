import { BrowserRouter as Router } from 'react-router-dom';
import { ChosenThemeProvider, ThemeProvider } from '@/themes';

import AppRoutes from '@/routes';

export const App = () => {
  return (
    <Router>
      <ChosenThemeProvider>
        <ThemeProvider>
          <AppRoutes />
        </ThemeProvider>
      </ChosenThemeProvider>
    </Router>
  );
};
