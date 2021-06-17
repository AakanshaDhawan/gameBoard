import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

export default function MiddleCatan() {
  var [firstName, setFirstName] = useState("");
  var [lastName, setLastName] = useState("");
  var [email, setEmail] = useState("");
  var [insta, setInsta] = useState("");
  var [phone, setPhone] = useState("");
  var [referal, setReferal] = useState("");
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
    if (event.target.name == "insta") {
      setInsta(event.target.value);
    }
    if (event.target.name == "phone") {
      setPhone(event.target.value);
    }
    if (event.target.name == "referal") {
        setReferal(event.target.value);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch("http://localhost:8000/api/catan/", {
      method: "POST",
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify({
        email: email,
        firstName: firstName,
        lastName: lastName,
        insta: insta,
        phone: phone,
        referal: referal,
      }),
    }).then(function (response) {
      return response.json();
    });
    console.log(res.status);
    if (res.status === true) {
      setError("Thank you for enquiring");
      setFirstName("");
      setLastName("");
      setCompany("");
      setEmail("");
      setInsta("");
      setReferal("");
    } else {
      setError("Error in submitting");
    }
  };

  return (
    <div className="container-fluid col-container">
      <Row style={{ paddingBottom: "2em" }}>
        <Col className="">
          <img
            className="catan-image"
            src="/images/image3.jpg"
            alt="catan photo"
            style={{ width: "100%", height: "100%", minWidth: "100px" }}
          />
        </Col>
        <Col
          className="corporate-form"
          style={{ marginTop: "2em", backgroundColor: "#fcd8d1" }}
        >
          <div>
            <h2 style={{ margin: "1em 0"}}>Let the games begin!</h2>
          </div>
          <Form onSubmit={handleSubmit}>
            <Row className="catan-form-row">
              <Col>
                <Form.Group controlId="formGroupFirstName">
                  <Form.Label className="corporate-form-label">
                    First Name *
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="firstname"
                    value={firstName}
                    onChange={(event) => changeHandle(event)}
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
                    type="text"
                    name="lastname"
                    value={lastName}
                    onChange={(event) => changeHandle(event)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="catan-form-row">
              <Col>
                <Form.Group controlId="formGroupInsta">
                  <Form.Label className="corporate-form-label">
                    Instagram Handle *
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="insta"
                    value={insta}
                    onChange={(event) => changeHandle(event)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="catan-form-row" style={{ marginTop: "20px" }}>
              <Col>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label className="corporate-form-label">
                    Email *
                  </Form.Label>
                  <Form.Control
                    required
                    type="email"
                    name="email"
                    value={email}
                    onChange={(event) => changeHandle(event)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="catan-form-row" style={{ marginTop: "20px" }}>
              <Col>
                <Form.Group controlId="formGroupPhone">
                  <Form.Label className="corporate-form-label">
                    Phone *
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={(event) => changeHandle(event)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="catan-form-row  " style={{ marginTop: "20px" }}>
              <Col>
                <Form.Group controlId="formGroupReffral">
                  <Form.Label className="corporate-form-label">
                    Reffral Code *
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="referal"
                    value={referal}
                    onChange={(event) => changeHandle(event)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  className="corporate-button"
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
        </Col>
      </Row>
    </div>
  );
}
