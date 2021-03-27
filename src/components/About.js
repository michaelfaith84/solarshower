import React from "react";
import { Modal, Button } from "react-bootstrap";

const About = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">About</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Returned Values</h4>
        <p>
          The idea was the work from an easy starting point: how much shower
          time do I need? To do this, we need to have a flow rate. The "Average"
          and "Eco" buttons set this to typical US values but you won't get
          these rates without pressurizing the tank which is typically done with
          air. I toyed with adding head pressure calculations based on vessel
          lengths (assuming it would be rotated to stand on end) but the tldr
          was that it had to be about 30' long to get something approaching
          normal water pressure which is pretty impractical not to mention that
          this would be the peak pressure--which would drop as the vessel
          emptied.
        </p>
        <p>
          Why do I include small sizes? No one said you have to design the thing
          as a a tube> A grid of smaller pipe, for example, would offer a
          greater surface area which would increase its thermal efficiency.
        </p>
        <p>
          I include surface area to make it easier to buy paint to increase the
          thermal efficiency of the unit.
        </p>
        <p>
          I also include pipe weight (based on schedule 40) to help you
          calculate the total system weight.
        </p>
        <h4>Why CPVC?</h4>
        <p>
          ABS is the goto choice as it's cheap and black already, however, ABS
          is meant for sewage. Not only is it not food-safe (not that most of
          you are drinking from it) it often contains BPA which is absorbed
          through the skin as well as other nasty potentially nasty things. The
          big issue is that research is not done on this material with regardes
          to human safety. PVC is another cheaper CPVC alternative, however,
          it's only rated to 140&#8457;. Feel fee to read about the extreme
          temps that build up in containers left in the sun (such as a car).
          CPVC is, so far as I can tell, the safest material for this role.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default About;
