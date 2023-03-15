import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Cards2 = () => {
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
                  src="https://splashfragranceweb.b-cdn.net/wp-content/uploads/2022/11/kapoor.png"
                  style={{ height: "120px", width: "120px " }}
                />
              </div>
              <div className="mt-3">
                <Card.Body>
                  <div className="mx-auto">
                    <Card.Title>Arjun Kapoor</Card.Title>
                  </div>
                </Card.Body>
              </div>

              {/* </Card> */}
            </Col>
            <Col>
              {/* <Card style={{ width: "18rem" }}> */}
              <Card.Img
                variant="top"
                src=" https://wallpapercave.com/wp/wp4248280.jpg"
                style={{
                  height: "120px",
                  width: "120px",
                  borderRadius: "60px",
                }}
              />
              <div className="mt-3 mx-auto">
                <Card.Body>
                  <div className="ms-0">
                    <Card.Title>Shreya Ghoshal</Card.Title>
                  </div>
                </Card.Body>
              </div>
              {/* </Card> */}
            </Col>
            <Col>
              {/* <Card style={{ width: "18rem" }}> */}
              <Card.Img
                variant="top"
                src="https://splashfragranceweb.b-cdn.net/wp-content/uploads/2022/11/gaba.png"
                style={{ height: "120px", width: "120px" }}
              />
              <div className="mt-3">
                <Card.Body>
                  <Card.Title>Millind Gaba</Card.Title>
                </Card.Body>
              </div>
              {/* </Card> */}
            </Col>
            <Col>
              {/* <Card style={{ width: "18rem" }}> */}
              <Card.Img
                variant="top"
                src="https://splashfragranceweb.b-cdn.net/wp-content/uploads/2022/11/emiway.jpg"
                style={{
                  height: "125px",
                  width: "125px",
                  borderRadius: "70px",
                }}
              />
              <div className="mt-3">
                <Card.Body>
                  <Card.Title>Emiway Bantai</Card.Title>
                </Card.Body>
              </div>
              {/* </Card> */}
            </Col>
            <Col>
              {/* <Card style={{ width: "18rem" }}> */}
              <Card.Img
                variant="top"
                src="https://splashfragranceweb.b-cdn.net/wp-content/uploads/2022/11/Pavitra.jpg"
                style={{
                  height: "125px",
                  width: "125px",
                  borderRadius: "60px",
                }}
              />
              <div className="mt-3">
                <Card.Body>
                  <div className="ms-2">
                    <Card.Title>Pavitra Punia</Card.Title>
                  </div>
                </Card.Body>
              </div>
              {/* </Card> */}
            </Col>
            <Col>
              {/* <Card style={{ width: "18rem" }}> */}
              <Card.Img
                variant="top"
                src="https://splashfragranceweb.b-cdn.net/wp-content/uploads/2022/11/puri.png"
                style={{
                  height: "125px",
                  width: "125px",
                  borderRadius: "70px",
                }}
              />
              <div className="mt-3">
                <Card.Body>
                  <div className="ms-0">
                    <Card.Title>Sanam Puri</Card.Title>
                  </div>
                </Card.Body>
              </div>
              {/* </Card> */}
            </Col>
          </Row>
        </Container>
      </div>

      <div className="textcc">
        <div className="mt-5">
          <p>& 30,000+ Satisfied Customers</p>
        </div>
      </div>

      <Container>
        <h3 className="mt-5">
          <span>Latest Products</span>
        </h3>
      </Container>
    </>
  );
};

export default Cards2;
