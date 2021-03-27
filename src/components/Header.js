import React from "react";
import { Button } from "react-bootstrap";
import About from "./About";

const Header = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const onClick = () => {
    modalShow === false ? setModalShow(true) : setModalShow(true);
  };
  return (
    <section id="header">
      <h1 className="mt-5 mb-4">
        CPVC Solar Shower <i className="far fa-calculator"></i>
      </h1>
      <p className="pb-3">
        <Button onClick={onClick} href="#">
          About
        </Button>
      </p>
      <About show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  );
};

export default Header;
