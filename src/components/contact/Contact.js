import Container from "react-bootstrap/Container";
import Heading from "../Heading";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Contact() {
  return (
    <Container>
      <div className="contact">
        <div className=" text-center ">
          <Heading title="Contact" />
        </div>
      </div>

      <div className="row contact-info">
        <div className="col-lg-6 col-s-12 adress">
          <div>
            <h2>Adress</h2>
            <p>Lorem ipsum dolor sit amet 11 1234</p>
          </div>

          <div>
            <h2>Calle Us</h2>
            <p>000000</p>
          </div>
        </div>
        <div className="col-lg-6 col-s-12">
          <h2>Contact Us</h2>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="email" placeholder="wal..." />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button className="button1">Submit</Button>{" "}
          </Form>
        </div>
      </div>
    </Container>
  );
}
