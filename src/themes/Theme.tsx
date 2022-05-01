import { useContext, useMemo } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';

import { ChosenTheme } from './ChosenTheme';
import { Colors } from '@/assets/colors';

const createThemeHelper = (theme: 'dark' | 'light') => {
  const { colab } = Colors;
  const isDark = theme === 'dark';

  return createTheme({
    palette: {
      mode: theme,
      background: {
        default: isDark ? colab.dark : '#f0f0f0',
        paper: isDark ? colab.softDark : '#ffffff',
      },
      primary: {
        main: colab.main,
      },
      error: {
        main: 'rgb(232, 51, 51)',
      },
      success: {
        main: 'rgb(76,175,80)',
      },
    },
  });
};

interface ThemeProps {
  children: JSX.Element;
}

export const ThemeProvider = (props: ThemeProps) => {
  const { children } = props;
  const { theme } = useContext(ChosenTheme);
  const muiTheme = useMemo(() => createThemeHelper(theme), [theme]);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
