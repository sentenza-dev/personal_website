import React from 'react';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import post1 from './posts/certificates.md';

const useStyles = makeStyles((theme) => ({
  appGrid: {
    marginTop: theme.spacing(3),
  },
}));

const posts = [post1];

const sidebar = {
  title: 'Hi, my name is Andrey.',
  description:
    'I am interested in Python and GNU / Linux.',
  social: [
    { name: 'GitHub', href: 'https://github.com/sentenza-dev',  icon: GitHubIcon },
    { name: 'Telegram', href: 'https://t.me/spravaya',  icon: TelegramIcon },
  ],
};

export default function App() {
  const classes = useStyles();

  const darkTheme = createMuiTheme({
    palette: {
      background: {
        default: "#3c3f50"
      },
      primary: {
        main: "#fff"
      },
      text: {
        primary: "#fff"
      }
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
        <Header title="" />
          <main>
            <Grid container spacing={5} className={classes.appGrid}>
              <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                archives={sidebar.archives}
                social={sidebar.social}
              />
              <Main title="Something around" posts={posts} />
            </Grid>
          </main>
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}
