import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const NewAriv = () => {
  return (
    <>
      <Container>
        <h3 className="mt-5">
          <span>New Arrivals</span>
        </h3>
      </Container>

      <Container>
        <Row className="mt-3 mx-auto">
          <Col className="new">
            <video
              src="newarri 1.mp4 "
              autoPlay
              muted
              loop
              width={[600]}
              height={[]}
            ></video>
          </Col>
          <Col className="mt-4 ">
            <video
              src="newarri 2.mp4"
              autoPlay
              muted
              loop
              width={[600]}
              height={[]}
            ></video>
          </Col>
        </Row>
        <Row>
          <Col className="mx-auto">𝓓𝓮𝓷𝓿𝓮𝓻</Col>
          <Col>𝓛𝔂𝓰𝓸</Col>
        </Row>
      </Container>

      <Container>
        <h3 className="mt-5">
          <span>Featured Products</span>
        </h3>
      </Container>
    </>
  );
};

export default NewAriv;
