import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    input: {
      backgroundColor: 'salmon'
    }
  },
}));

export default function Form() {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    company: ''
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    console.log(formData)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <Input type="text" className={classes.input} name="name" value={formData.name} onChange={handleChange} />
      <Input type="email" name="email" value={formData.email} onChange={handleChange} />
      <Input type="text" name="website" value={formData.website} onChange={handleChange} />
      <Input type="text" name="company" value={formData.company} onChange={handleChange} />
      <Input type="submit" value="submit" />
    </form>
  );
}