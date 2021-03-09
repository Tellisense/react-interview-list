import React, { useEffect, useState } from "react";

import axios from "axios";

import "./App.css";

import Form from "./components/Form";
import BasicTable from "./components/Table";

function App() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      setTableData(data);
    };

    apiCall();
  }, []);

  return (
    <>
      <Form />
      <BasicTable tableData={tableData} />
    </>
  );
}

export default App;
