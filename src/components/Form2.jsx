import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  formContainer: {
    marginTop: '3rem'
  },
  button: {
    margin: '0 5rem'
  }
}));

export default function Form({ formData, handleChange }) {
  const classes = useStyles();



  return (
    <Grid container spacing={3} className={classes.formContainer}>
      <Grid container justify="space-around" item xs={12}>
        <TextField label="username: " variant="filled" type="text" className={classes.input} name="username" value={formData?.username} onChange={handleChange} />

      </Grid>
    </Grid>
  );
}