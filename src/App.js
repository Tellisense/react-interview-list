import { Container } from "@material-ui/core";

import React, { useEffect, useState } from "react";

import axios from "axios";

import "./App.css";

import Form from "./components/Form";
import Parent from "./components/Parent";
import BasicTable from "./components/Table";

function App() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      const { data } = await axios.get(`http://localhost:1337/contacts`);
      setTableData(data);
    };

    apiCall();
  }, []);

  return (
    // <Parent />
    <Container maxWidth='md'>
      <Form />
      <BasicTable tableData={tableData} />
    </Container>
  );
}

export default App;
