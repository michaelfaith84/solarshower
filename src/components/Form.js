import React, { Fragment, useState, useRef, useContext } from "react";
import Context from "../context/Context";
import {
  Row,
  Col,
  InputGroup,
  FormControl,
  Overlay,
  Tooltip,
  Button,
  ButtonGroup,
} from "react-bootstrap";

const Form = () => {
  const context = useContext(Context);

  const { showResults } = context;

  const [show, setShow] = useState(false);
  const target = useRef(null);

  const [values, setValues] = useState({
    time: "",
    rate: "",
  });

  const { time, rate } = values;

  const onChange = (e) => {
    // const re = new RegExp("[-+]?[0-9]*\\.?[0-9]+");
    // Not ideal
    const re = new RegExp(/^\d*\.?\d*/);
    const res = e.target.value.match(re) ? e.target.value.match(re)[0] : 0;
    setValues({ ...values, [e.target.name]: res });
  };

  const averageRate = (e) => {
    setValues({ ...values, rate: 2.5 });
  };

  const ecoRate = (e) => {
    setValues({ ...values, rate: 1.6 });
  };

  const onClick = (e) => {
    if (time > 0 && rate > 0) {
      showResults(time, rate);
    }
  };

  return (
    <Fragment>
      <Row>
        <Col>
          <InputGroup className="mb-3" size="lg">
            <InputGroup.Prepend>
              <InputGroup.Text id="shower-time">
                <i className="fal fa-shower"></i>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Time (Minutes)"
              aria-label="time"
              aria-describedby="shower-time"
              name="time"
              value={time}
              onChange={onChange}
            />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <ButtonGroup
            aria-label="Common Rates"
            className="pb-3 w-100"
            size="lg"
          >
            <Button
              variant="warning"
              className="text-white"
              onClick={averageRate}
            >
              Average
            </Button>
            <Button variant="success" onClick={ecoRate}>
              Eco
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <InputGroup className="mb-3" size="lg">
            <InputGroup.Prepend>
              <InputGroup.Text id="flow-rate">
                <i className="fal fa-water-lower"></i>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Flow (Gallons Per Minute)"
              aria-label="rate"
              aria-describedby="flow-rate"
              name="rate"
              value={rate}
              onChange={onChange}
            />
          </InputGroup>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button size="lg" block="true" onClick={onClick}>
            MATH!
          </Button>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Form;
