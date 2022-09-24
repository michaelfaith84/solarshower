import React, { Fragment, useContext } from "react";
import { Nav, Card, Col, Row, Button } from "react-bootstrap";
import Context from "../context/Context";

const Result = () => {
  const context = useContext(Context);

  const { gallons, weight, result, reset, setLength } = context;

  const onClick = (e) => {
    setLength(e.target.id.substr(1));
  };

  return (
    <Fragment>
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#s2">
            <Nav.Item>
              <Nav.Link eventKey="#s2" id="s2" onClick={onClick}>
                2"
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="#s2.5" id="s2.5" onClick={onClick}>
                2.5"
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="#s3" id="s3" onClick={onClick}>
                3"
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="#s3.5" id="s3.5" onClick={onClick}>
                3.5"
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="#s4" id="s4" onClick={onClick}>
                4"
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="#s5" id="s5" onClick={onClick}>
                5"
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="#s6" id="s6" onClick={onClick}>
                6"
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="#s8" id="s8" onClick={onClick}>
                8"
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="#s10" id="s10" onClick={onClick}>
                10"
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <Row>
              <Col className="text-center">
                <h4>Length</h4>
              </Col>
            </Row>
            <Row>
              <Col className="text-center pb-3">{result.length} feet</Col>
            </Row>
            <Row>
              <Col className="text-center">
                <h4>Weight</h4>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">{result.PW} lbs</Col>
            </Row>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Col className="text-center">
            <h4>Water</h4>
          </Col>
          <Row>
            <Col className="text-center">{gallons} gallons</Col>
          </Row>
          <Row>
            <Col className="text-center">{weight} lbs</Col>
          </Row>
        </Card.Footer>
      </Card>
      <Button className="mt-4" block="true" onClick={reset}>
        Reset
      </Button>
    </Fragment>
  );
};

export default Result;
