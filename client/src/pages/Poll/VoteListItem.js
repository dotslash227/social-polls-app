import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
  makeStyles,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '10px 0',
  },
  image: {
    height: '8vh',
    width: '8vh',
    objectFit: 'cover',
  },
  [theme.breakpoints.down('sm')]: {
    root: {
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
  },
}));

export default function VoteListItem(props) {
  const classes = useStyles();
  const poll = props.poll;
  const vote = props.vote;
  const author = vote.userId;
  const timeElapsed = moment(new Date(vote.updatedAt)).fromNow();

  return (
    <ListItem className={classes.root}>
      <ListItemAvatar>
        <Avatar alt={`${author.name}'s avatar`} src={author.picture} />
      </ListItemAvatar>
      <ListItemText
        primaryTypographyProps={{
          variant: 'h6',
        }}
        primary={`${author.name} voted`}
        secondary={timeElapsed}
      />
      <img className={classes.image} src={poll.images[vote.pollImageIdx].url} />
    </ListItem>
  );
}

VoteListItem.propTypes = {
  vote: PropTypes.object.isRequired,
  poll: PropTypes.object.isRequired,
};
