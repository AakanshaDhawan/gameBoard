import { Row, Col, Form, Button } from "react-bootstrap";

export default function MiddleCorporate() {
  return (
    <div className="container-fluid col-container">
      <Row style={{ paddingBottom: "2em" }}>
        <Col className="quote_corporate">
          <div> 
            <h2
              style={{
                fontWeight: "bold",
                textTransform: "uppercase",
                textShadow: "2px 2px grey",
                textAlign: "center",
                fontSize: "50px",
              }}
            >
              "Board Games can teach Business"{" "}
            </h2>
            <h4
              style={{
                float: "right",
                fontWeight: "bold",
                textTransform: "uppercase",
                textShadow: "2px 2px grey",
              }}
            >
              - Harvard Business Review
            </h4>
          </div>
          <div className="plain_text">
            <p style={{textAlign:"center"}}>
              Board Games are fun and Exciting! They are a great way to detox
              digitally and spend quality time with friends and family. Many
              people do not know this, but board games can teach us essential
              business and life skills - you should just know what the right
              games to pick! 
              <br />
              We, at Game Boards, are here to do just that for
              you!
            </p>
          </div>
          <div>
            <img src="/images/corporate_image1.jpg" alt="corporate photo" />
          </div>
        </Col>
        <Col
          className="corporate-form"
          style={{ marginTop: "2em", backgroundColor: "#d9b38c" }}
        >
          <div>
            <h2>Tell us your needs</h2>
          </div>
          <Form>
            <Row className="corporate-form-row">
              <Col>
                <Form.Group controlId="formGroupFirstName">
                  <Form.Label className="corporate-form-label">
                    First Name *
                  </Form.Label>
                  <Form.Control
                    required
                    className="corporate-form-field"
                    type="text"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formGroupLastName">
                  <Form.Label className="corporate-form-label">
                    Last Name *
                  </Form.Label>
                  <Form.Control
                    required
                    className="corporate-form-field"
                    type="text"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="corporate-form-row">
              <Col>
                <Form.Group controlId="formGroupCompany">
                  <Form.Label className="corporate-form-label">
                    Company *
                  </Form.Label>
                  <Form.Control
                    required
                    className="corporate-form-field"
                    type="text"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="corporate-form-row" style={{ marginTop: "20px" }}>
              <Col>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label className="corporate-form-label">
                    Email *
                  </Form.Label>
                  <Form.Control
                    required
                    className="corporate-form-field"
                    type="email"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="corporate-form-row" style={{ marginTop: "20px" }}>
              <Col>
                <Form.Group controlId="formGroupPhone">
                  <Form.Label className="corporate-form-label">
                    Phone *
                  </Form.Label>
                  <Form.Control
                    required
                    className="corporate-form-field"
                    type="text"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="corporate-form-row  " style={{ marginTop: "20px" }}>
              <Col>
                <Form.Group controlId="formGroupBudget">
                  <Form.Label className="corporate-form-label">
                    Budget *
                  </Form.Label>
                  <Form.Control
                    required
                    className="corporate-form-field"
                    type="text"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
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
        </Col>
      </Row>
    </div>
  );
}
