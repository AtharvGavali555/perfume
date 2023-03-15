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
              <div className="mx-auto">
                <Card.Img
                  variant="top"
                  src="https://splashfragranceweb.b-cdn.net/wp-content/uploads/2022/11/ic-1.png"
                  style={{ height: "140px", width: "120px" }}
                />
              </div>
              <div className="mt-3">
                <Card.Body>
                  <div className="mx-auto ms-4">
                    <Card.Title>Sale</Card.Title>
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
                  <Card.Title>Designer Perfume </Card.Title>
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
                  <Card.Title>Nice Perfume</Card.Title>
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
                  <Card.Title>Miniatures</Card.Title>
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
                  <Card.Title>Decants & Splits</Card.Title>
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
                  <Card.Title>Bath & Body Care</Card.Title>
                </Card.Body>
              </div>
              {/* </Card> */}
            </Col>
          </Row>
        </Container>
      </div>

      <div className="textc">
        <div className="mt-5">
          <p>
            <b>CLIENTS WHO SHOP THEIR </b>
            <p>
              <b>PERFUME FROM US</b>
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default Cards;
