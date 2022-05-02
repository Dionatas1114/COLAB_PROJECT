import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Fab,
  CssBaseline,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Avatar,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
} from '@mui/material';

import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import {
  ContactPage,
  Person,
  LocationSearching,
  Add,
  MoreVert,
  ExpandMore as ExpandMoreIcon,
  Share,
  Favorite,
} from '@mui/icons-material';

import { api } from '@/services/api';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const NavBar = () => {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [userData, setUserData] = React.useState<Array<UserData>>();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  interface UserData {
    phone: string;
    cell: string;
    email: string;
    gender: string;
    nat: string;
    name: {
      first: string;
      last: string;
      title: string;
    };
    dob: {
      age: number;
      date: string;
    };
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
    location: {
      country: string;
      city: string;
      state: string;
    };
    login: {
      uuid: string;
    };
  }

  const getUserData = async () => {
    await api
      .get('/')
      .then(({ data }) => {
        const { results } = data;
        setUserData(results);
      })
      .catch(err => console.log(err));
  };

  console.log(userData);

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 380,
        marginTop: '5%',
        bgcolor: 'background.paper',
      }}
      ref={ref}
    >
      <CssBaseline />
      {userData?.map(({ name, email, picture, location, dob, phone }, index) => (
        <Card>
          <CardHeader
            avatar={<Avatar alt={name.last} src={picture.medium} />}
            action={
              <IconButton aria-label='settings'>
                <MoreVert />
              </IconButton>
            }
            title={name.title + '. ' + name.first + ' ' + name.last}
            subheader={location.city + ', ' + location.country + ' - ' + dob.age}
          />
          <CardMedia component='img' height='194' image={picture.large} alt='Paella dish' />
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              Hi! I'm {name.first} and I'm a {dob.age} years old. I'm from {location.city} and I
              want to make new friends. If You Want to Know more about me, You can contact me at my
              phone number: {phone} or email: {email}.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label='add to favorites'>
              <Favorite />
            </IconButton>
            <IconButton aria-label='share'>
              <Share />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout='auto' unmountOnExit>
            <CardContent>
              <Typography paragraph>About me</Typography>
              <Typography paragraph>
                I'm born in the year {dob.date.split('-')[0]} in the state of {location.state}.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
      <Fab
        color='primary'
        aria-label='add'
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        onClick={getUserData}
      >
        <Add />
      </Fab>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label='Profile' icon={<ContactPage />} />
          <BottomNavigationAction label='Personal' icon={<Person />} />
          <BottomNavigationAction label='Localization' icon={<LocationSearching />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};
