import { AppBar, Toolbar } from '@mui/material';

import SwitchTheme from '@/components/switchTheme';

const Header = () => {
  return (
    <AppBar position='fixed'>
      <Toolbar variant='dense'>
        <SwitchTheme />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
