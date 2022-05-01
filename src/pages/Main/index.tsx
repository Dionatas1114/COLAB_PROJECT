import { Link, Slider, styled } from '@mui/material';

import Header from '@/components/header';

export const Main = () => {
  return (
    <Root>
      <Header />
      <div>
        <h2>
          How much do you like{' '}
          <Link href='https://vitejs.dev/' target='_blank' rel='_'>
            Vite?
          </Link>
        </h2>
        <Slider />
      </div>
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