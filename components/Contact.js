import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export default function Contact() {
  var [firstName, setFirstName] = useState("");
  var [lastName, setLastName] = useState("");
  var [email, setEmail] = useState("");
  var [message, setMessage] = useState("");
  var [error, setError] = useState("");

  const changeHandle = (event) => {
    if (event.target.name == "email") {
      setEmail(event.target.value);
    }
    if (event.target.name == "firstname") {
      setFirstName(event.target.value);
    }
    if (event.target.name == "lastname") {
      setLastName(event.target.value);
    }
    if (event.target.name == "message") {
      setMessage(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch("http://localhost:8000/api/contact/", {
      method: "POST",
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify({
        email: email,
        firstName: firstName,
        lastName: lastName,
        message: message,
      }),
    }).then(function (response) {
      // console.log(response)
      return response.json();
    });
    console.log(res.status);
    if (res.status === true) {
      setError("Thank you for contacting");
      setFirstName('')
      setLastName('')
      setMessage('')
      setEmail('')
    } else {
      setError("Error in submitting");
    }
  };

  return (
    <div
      id="contact"
      className="container-fluid"
      style={{ padding: 0, backgroundColor: "#f3e0d8" }}
    >
      <div className="container" style={{ padding: "5em 0" }}>
        <Row className="contact-form-row">
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <h1 style={{ fontWeight: "bold" }}>Hello! Lets connect.</h1>
          </Col>
        </Row>
        <Form onSubmit={handleSubmit}>
          <Row className="contact-form-row">
            <Col>
              <Form.Group controlId="formGroupFirstName">
                <Form.Label className="contact-form-label">
                  First Name
                </Form.Label>
                <Form.Control
                  className="contact-form-field"
                  name="firstname"
                  value={firstName}
                  type="text"
                  onChange={(event) => changeHandle(event)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formGroupLastName">
                <Form.Label className="contact-form-label">
                  Last Name
                </Form.Label>
                <Form.Control
                  className="contact-form-field"
                  name="lastname"
                  value={lastName}
                  type="text"
                  onChange={(event) => changeHandle(event)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="contact-form-row" style={{ marginTop: "20px" }}>
            <Col>
              <Form.Group controlId="formGroupEmail">
                <Form.Label className="contact-form-label">Email *</Form.Label>
                <Form.Control
                  required
                  className="contact-form-field"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event) => changeHandle(event)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formGroupMessage">
                <Form.Label className="contact-form-label">
                  Leave us a Message
                </Form.Label>
                <Form.Control
                  className="contact-form-field"
                  name="message"
                  value={message}
                  type="text"
                  onChange={(event) => changeHandle(event)}
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
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "20px",
          }}
        >
          {error}
        </p>
      </div>
    </div>
  );
}
