import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, TextField } from '@material-ui/core';
import axios from 'axios'


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
        <TextField label="Name: " variant="filled" type="text" className={classes.input} name="name" value={formData?.name} onChange={handleChange} />
        <TextField label="Email: " variant="filled" type="email" name="email" value={formData?.email} onChange={handleChange} />
        <TextField label="Website: " variant="filled" type="text" name="website" value={formData?.website} onChange={handleChange} />
        <TextField label="Company: " variant="filled" type="text" name="company" value={formData?.company} onChange={handleChange} />
      </Grid>
    </Grid>
  );
}