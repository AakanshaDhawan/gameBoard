import { Col, Row } from "react-bootstrap";

export default function BlogHome() {
  return (
    <Row>
      <Col style={{ padding: 0, marginBottom: "5em" }}>
        <img
          src="/images/image1.jpg"
          alt="banner"
          style={{ width: "40%", height: "100%", float: "left" }}
        />
        {/* </Col> */}
        <div style={{ border: "1px solid grey" }}>
          <span>
            <p style={{}}>
              <span style={{ }}>3 days ago</span>{" "}
              <span>&nbsp;.&nbsp;</span>
              <span>2 min</span>
            </p>
            <div>
              <h3>
                <span style={{ }}>
                  Top Street markets in middle East
                </span>
              </h3>
              <p>
                {" "}
                <span style={{  }}>
                  Create a blog post subtitle that summarizes your post in a few
                  short, punchy sentences and entices your audience to continue
                  reading....
                </span>
              </p>
            </div>
          </span>
        </div>
      </Col>
    </Row>
  );
}
