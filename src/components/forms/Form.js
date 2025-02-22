import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import SearchSelect from '../selectors/SearchSelect'

const getStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width:'50%', 
    marginRight:'auto', 
    marginLeft:'auto'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}))

const Form = props => {
  const classes = getStyles()
  return (
    <form className={classes.form} onSubmit={props.onSubmit}>
      <TextField
        className={classes.textField}
        label='Search'
        margin='normal'
        name='query'
        onChange={e => props.onInputChange(e.target.value)}
        variant='outlined'
        fullWidth
      />
      <SearchSelect onCategoryChange={props.onCategoryChange} category={props.category}/>
      <Button variant='contained' className={classes.button} type='submit' color='primary'>
        Search
      </Button>
    </form>
  )
}

export default Form
