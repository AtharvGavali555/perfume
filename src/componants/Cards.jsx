import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Cards = () => {
  return (
    <>
      <div className="mt-5">
        <Container>
          <Row>
            <Col>
              {/* <Card style={{ width: "18rem" }}> */}
              <Card.Img
                variant="top"
                src="https://splashfragranceweb.b-cdn.net/wp-content/uploads/2022/11/ic-1.png"
                style={{ height: "140px", width: "120px" }}
              />
              <div className="mt-3">
                <Card.Body>
                  <div className="mx-auto ms-4">
                    <Card.Title>SALE</Card.Title>
                  </div>
                </Card.Body>
              </div>

              {/* </Card> */}
            </Col>
            <Col>
              {/* <Card style={{ width: "18rem" }}> */}
              <Card.Img
                variant="top"
                src="https://splashfragranceweb.b-cdn.net/wp-content/uploads/2022/11/Mask-Group-71.png"
                style={{ height: "140px", width: "120px" }}
              />
              <div className="mt-3">
                <Card.Body>
                  <Card.Title>DESIGNER PERFUMES</Card.Title>
                </Card.Body>
              </div>
              {/* </Card> */}
            </Col>
            <Col>
              {/* <Card style={{ width: "18rem" }}> */}
              <Card.Img
                variant="top"
                src="https://splashfragranceweb.b-cdn.net/wp-content/uploads/2022/11/Mask-Group-72.png"
                style={{ height: "140px", width: "120px" }}
              />
              <div className="mt-3">
                <Card.Body>
                  <Card.Title>NICHE PERFUMES</Card.Title>
                </Card.Body>
              </div>
              {/* </Card> */}
            </Col>
            <Col>
              {/* <Card style={{ width: "18rem" }}> */}
              <Card.Img
                variant="top"
                src="https://splashfragranceweb.b-cdn.net/wp-content/uploads/2022/11/Mask-Group-73.png"
                style={{ height: "140px", width: "120px" }}
              />
              <div className="mt-3">
                <Card.Body>
                  <Card.Title>MINIATURES</Card.Title>
                </Card.Body>
              </div>
              {/* </Card> */}
            </Col>
            <Col>
              {/* <Card style={{ width: "18rem" }}> */}
              <Card.Img
                variant="top"
                src="https://splashfragranceweb.b-cdn.net/wp-content/uploads/2022/11/Mask-Group-74.png"
                style={{ height: "140px", width: "120px" }}
              />
              <div className="mt-3">
                <Card.Body>
                  <Card.Title>DECANTS & SPLITS</Card.Title>
                </Card.Body>
              </div>
              {/* </Card> */}
            </Col>
            <Col>
              {/* <Card style={{ width: "18rem" }}> */}
              <Card.Img
                variant="top"
                src="https://splashfragranceweb.b-cdn.net/wp-content/uploads/2022/11/Mask-Group-75.png"
                style={{ height: "140px", width: "120px" }}
              />
              <div className="mt-3">
                <Card.Body>
                  <Card.Title>BATH & BODY CARE</Card.Title>
                </Card.Body>
              </div>
              {/* </Card> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Cards;
