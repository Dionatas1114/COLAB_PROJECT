import { useContext } from 'react';
import { Brightness3 as DarkModeIcon, WbSunny as LightModeIcon } from '@mui/icons-material';

import { ChosenTheme } from '@/themes';
import { Checkbox, Ball, Label, Root, SunIcon, MoonIcon } from './styles';

const DarkModeToggle = () => {
  const { theme, setTheme } = useContext(ChosenTheme);
  return (
    <Root>
      <Checkbox
        type='checkbox'
        id='dark-mode-toggle'
        checked={theme === 'dark'}
        onChange={({ target: { checked } }) => {
          const themeToSet = checked ? 'dark' : 'light';
          setTheme(themeToSet);
        }}
      />
      <Label htmlFor='dark-mode-toggle'>
        <MoonIcon>
          <DarkModeIcon color='inherit' fontSize='small' />
        </MoonIcon>
        <SunIcon>
          <LightModeIcon color='inherit' fontSize='small' />
        </SunIcon>
        <Ball isChecked={theme === 'dark'} />
      </Label>
    </Root>
  );
};

export default DarkModeToggle;
