import { Col, Row } from "react-bootstrap";

export default function MiddleAbout() {
  return (
    <div className="container">
      <Row className="about-middle row-about">
        <Col className="text-col">
          <h1 className="title">Meet the face behind the posts</h1>
          <p style={{ fontSize: "1.3em" }}>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you. ​
          </p>
          <p style={{ fontSize: "1.3em" }}>
            This is a great space to write a long text about your company and
            your services. You can use this space to go into a little more
            detail about your company. Talk about your team and what services
            you provide. Tell your visitors the story of how you came up with
            the idea for your business and what makes you different from your
            competitors. Make your company stand out and show your visitors who
            you are.
          </p>
        </Col>
        <Col className="image-col">
          <img
            //   height="100%"
            //   width="100%"
            className="image"
            src="/images/profile.jpg"
            alt="profile"
            draggable={false}
          />
        </Col>
      </Row>
    </div>
  );
}
