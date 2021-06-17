import { useState } from "react";
import { Row, Form, Col, Button } from "react-bootstrap";

export default function Subscribe() {
  var [email, setEmail] = useState("");
  var [message, setMessage] = useState("");
  const changeHandle = (event) => {
    if(event.target.name=="email"){
      setEmail(event.target.value)
    }
  };
  const handleSubmit=async(event)=>{
    event.preventDefault()
    const res= await fetch('http://localhost:8000/api/subscriber/', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify({
          email : email
        })
      }).then(function(response) {
        // console.log(response)
        return response.json();
      });
      console.log(res.status)
    if(res.status=== true){
      setMessage("Thank you for subscribing")
      setEmail('')
    }else{
      setMessage("Error in submitting")
    }
    alert(message)
  }
  console.log("email",email)
  return (
    <div className="middle-subscribe">
      <h2 className="posts-let">Let the posts come to you</h2>
      <Form onSubmit={handleSubmit} style={{ padding: "2em", paddingTop: 0, color: "white" }}>
        <Row>
          <Col>
            <Form.Group className="subcribe-form" controlId="formGroupEmail">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                required
                className="subcribe-form-field"
                name="email"
                type="email"
                value={email}
                onChange={(event)=>changeHandle(event)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <Button className="subcribe-form-button" type="submit" style={{}}>
              Subscribe{" "}
            </Button>
          </Col>
        </Row>
      </Form>
      {/* <p style={{color:"white",display:"flex",justifyContent:"center",paddingBottom:"20px"}}>{message}</p> */}
    </div>
  );
}
