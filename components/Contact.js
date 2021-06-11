import { Button, Col, Form, Row } from "react-bootstrap";

export default function Contact() {
  return (
    <div id="contact" className="container-fluid" style={{padding:0, backgroundColor:"#f3e0d8"}}>
      <div className="container" style={{ padding: "5em 0" }}>
        <Row className="contact-form-row">
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <h1 style={{fontWeight:"bold"}}>Let me know what's on your mind</h1>
          </Col>
        </Row>
        <Form>
          <Row className="contact-form-row">
            <Col>
              <Form.Group controlId="formGroupFirstName">
                <Form.Label className="contact-form-label">
                  First Name
                </Form.Label>
                <Form.Control className="contact-form-field" type="text" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formGroupLastName">
                <Form.Label className="contact-form-label">
                  Last Name
                </Form.Label>
                <Form.Control className="contact-form-field" type="text" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="contact-form-row" style={{marginTop:"20px"}}>
            <Col>
              <Form.Group controlId="formGroupEmail">
                <Form.Label className="contact-form-label">Email *</Form.Label>
                <Form.Control
                  required
                  className="contact-form-field"
                  type="email"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formGroupMessage">
                <Form.Label className="contact-form-label">
                  Leave us a Message
                </Form.Label>
                <Form.Control className="contact-form-field" type="text" />
              </Form.Group>
            </Col>
          </Row>
          <Row >
            <Col style={{ display: "flex", justifyContent: "center" }}>
              <Button
                type="submit"
                style={{
                  borderRadius: 0,
                  fontWeight: "bold",
                  padding: "5px 4em",
                  marginTop: "2em",
                }}
              >
                Submit{" "}
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}
