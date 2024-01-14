import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      firstName &&
      lastName &&
      email.indexOf("@") > -1 &&
      onValidated({
        MERGE0: email,
        MERGE1: firstName,
        MERGE2: lastName,
      });
  };

  const clearFields = () => {
    setEmail("");
    setFirstName("");
    setLastName("");
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <h3>Subscribe to our Newsletter & Never miss latest updates</h3>
          {status === "sending" && <Alert>Sending...</Alert>}
          {status === "error" && <Alert variant="danger">{message}</Alert>}
          {status === "success" && <Alert variant="success">{message}</Alert>}
        </Row>

        <Row>
          <Col>
            <form onSubmit={handleSubmit}>
              <div className="form-items">
                <Row>
                  <Col md={6} xl={7}>
                    <div className="new-email-bx">
                      <input
                        value={email}
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                      />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col md={6} xl={7}>
                    <div className="new-email-bx">
                      <input
                        value={firstName}
                        type="text"
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                      />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col md={6} xl={7}>
                    <div className="new-email-bx">
                      <input
                        value={lastName}
                        type="text"
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                      />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col md={6} xl={7}>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
