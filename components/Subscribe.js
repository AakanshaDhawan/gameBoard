import { Row, Form, Col, Button } from "react-bootstrap";

export default function Subscribe() {
  return (
    <div className="middle-subscribe"
      
    >
      <h2 className="posts-let">Let the posts come to you</h2>
      <Form style={{ padding: "2em", paddingTop: 0, color: "white" }}>
        <Row>
          <Col>
            <Form.Group className="subcribe-form" controlId="formGroupEmail">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                required
                className="subcribe-form-field"
                type="email"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <Button
              className="subcribe-form-button"
              type="submit"
              style={{
                
              }}
            >
              Subscribe{" "}
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
