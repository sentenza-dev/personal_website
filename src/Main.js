import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Markdown from './Markdown';

const useStyles = makeStyles((theme) => ({
  mainDivider: {
    backgroundColor: "#fff",
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const { posts, title } = props;

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider className={classes.mainDivider} />
      {posts.map((post, index) => (
        <Markdown filePath={post} key={post.substring(0, 40)} />
      ))}
    </Grid>
  );
}

Main.propTypes = {
  title: PropTypes.string,
  posts: PropTypes.array,
};
