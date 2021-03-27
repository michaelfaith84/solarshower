import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import { Container, Row, Col } from "react-bootstrap";
import Result from "./components/Result";
import React from "react";
import Context from "./context/Context";
import State from "./context/State";
import Handler from "./components/Handler";

function App() {
  return (
    <State>
      <div className="App">
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <Header />
              <Handler />
            </Col>
          </Row>
        </Container>
      </div>
    </State>
  );
}

export default App;
