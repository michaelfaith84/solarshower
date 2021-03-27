import React, { useContext } from "react";
import Context from "../context/Context";
import Result from "./Result";
import Form from "./Form";

const Handler = () => {
  const context = useContext(Context);

  const { results } = context;
  return Object.keys(results).length > 0 ? <Result /> : <Form />;
};

export default Handler;
