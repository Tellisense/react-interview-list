import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, TextField } from '@material-ui/core';

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

export default function Form({ addDataToTable }) {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    company: {
      name: ''
    }
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(formData)
    addDataToTable(formData)
    setFormData({
      name: '',
      email: '',
      website: '',
      company: {
        name: ''
      }
    })

  }

  return (
    <Grid container spacing={3} className={classes.formContainer}>
      <Grid container justify="space-around" item xs={12}>
        <TextField label="Name: " variant="filled" type="text" className={classes.input} name="name" value={formData.name} onChange={handleChange} />
        <TextField label="Email: " variant="filled" type="email" name="email" value={formData.email} onChange={handleChange} />
        <TextField label="Website: " variant="filled" type="text" name="website" value={formData.website} onChange={handleChange} />
        <TextField label="Company: " variant="filled" type="text" name="company" value={formData.company.name} onChange={handleChange} />
      </Grid>
      <Grid container justify={'center'} item xs={12}>
        <Button fullWidth className={classes.button} size="large" variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}