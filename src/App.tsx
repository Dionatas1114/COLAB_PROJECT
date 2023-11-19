import { BrowserRouter as Router } from 'react-router-dom';
import { AppThemeProvider } from '@/assets/themes';

import AppRoutes from '@/routes';

export const App = () => (
  <Router>
    <AppThemeProvider>
      <AppRoutes />
    </AppThemeProvider>
  </Router>
);
