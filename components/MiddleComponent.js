import { Col, Row } from "react-bootstrap";
import BlogHome from "./BlogHome";
import InstagramFeeds from "./InstagramFeeds";
import Subscribe from "./Subscribe";

export default function MiddleComponent() {
  return (
    <div className="middle-component col1-container" style={{ }}>
      <Row>
        <Col>
          <BlogHome />
          <BlogHome />
          <BlogHome />
        </Col>
        <Col className="middle-col">
          <Subscribe />
          <InstagramFeeds />
        </Col>
      </Row>
    </div>
  );
}
