import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";

import React, { useEffect, useState } from "react";

import axios from "axios";

import "./App.css";

import Card from "./components/Card";
import Form from "./components/Form";
import Form2 from "./components/Form2";
import Parent from "./components/Parent";
import BasicTable from "./components/Table";

const useStyles = makeStyles(theme => ({
  button: {
    margin: "3rem 5rem",
  },
}));

function App() {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    website: "",
    company: "",
  });
  const [tableData, setTableData] = useState([]);
  const [showButton, setShowButton] = useState(true);
  const [apiSuccess, setApiSuccess] = useState(false);

  useEffect(() => {
    const apiCall = async () => {
      const { data } = await axios.get(`http://localhost:1337/contacts`);
      setTableData(data);
    };
    apiCall();
  }, [apiSuccess]);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(formData);
    // make post request API call
    try {
      const { data } = await axios.post(
        "http://localhost:1337/contacts",
        formData
      );
      setApiSuccess(!apiSuccess);
    } catch (error) {
      console.log(error.message);
    }

    //reset form
    setFormData({
      name: "",
      username: "",
      email: "",
      website: "",
      company: "",
    });
  };

  const toggle = () => {
    setShowButton(!showButton);
  };

  return (
    // <Parent />
    <Container maxWidth='lg'>
      <Grid container justify={"center"} item xs={12}>
        {!showButton && (
          <Button
            fullWidth
            className={classes.button}
            size='large'
            variant='contained'
            color='primary'
            onClick={handleSubmit}
          >
            Submit
          </Button>
        )}

        {showButton && (
          <Button
            fullWidth
            className={classes.button}
            size='large'
            variant='contained'
            color='secondary'
            onClick={handleSubmit}
          >
            Submit Form
          </Button>
        )}
      </Grid>
      <Form2 formData={formData} handleChange={handleChange} />
      <Card
        title='My Cool Table'
        headerComponent={
          <Form formData={formData} handleChange={handleChange} />
        }
      >
        <Button
          fullWidth
          className={classes.button}
          size='sm'
          variant='contained'
          color='secondary'
          onClick={toggle}
        >
          Toggle buttons
        </Button>
        <BasicTable tableData={tableData} />
      </Card>
    </Container>
  );
}

export default App;
