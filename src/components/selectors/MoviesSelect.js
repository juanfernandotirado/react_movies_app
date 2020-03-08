import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function MoviesSelect(props) {
  const classes = useStyles();
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.category}
          onChange={e => props.onChange(e.target.value)}
        >
          <MenuItem value='now_playing'>Now Playing</MenuItem>
          <MenuItem value='popular'>Popular</MenuItem>
          <MenuItem value='top_rated'>Top Rated</MenuItem>
          <MenuItem value='upcoming'>Upcoming</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}