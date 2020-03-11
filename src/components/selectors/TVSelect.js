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

export default function TVSelect(props) {
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
          <MenuItem value='airing_today'>Airing Today</MenuItem>
          <MenuItem value='on_the_air'>On the Air</MenuItem>
          <MenuItem value='popular'>Popular</MenuItem>
          <MenuItem value='top_rated'>Top Rated</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}