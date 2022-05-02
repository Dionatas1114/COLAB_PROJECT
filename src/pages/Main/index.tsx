import { styled } from '@mui/material';

import Header from '@/components/header';
import { NavBar } from '../NavBar';

export const Main = () => {
  return (
    <Root>
      <Header />
      <NavBar />
    </Root>
  );
};

const Root = styled('div')`
  padding: 1% 2% 10vh 2%;
  width: 100%;
  min-height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & a {
    text-decoration: none;
    color: ${({ theme: { palette } }) => palette.primary.main};
  }
`;
