import { BrowserRouter as Router } from 'react-router-dom';
import { ChosenThemeProvider, ThemeProvider } from '@/themes';

import { Main } from '@/pages/Main';

export const App = () => {
  return (
    <Router>
      <ChosenThemeProvider>
        <ThemeProvider>
          <Main />
        </ThemeProvider>
      </ChosenThemeProvider>
    </Router>
  );
};
