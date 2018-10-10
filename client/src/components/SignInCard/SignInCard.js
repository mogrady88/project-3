import React from "react";
import { Row, Col, Card, Tabs, Tab, Input, Button } from "react-materialize";
import "./SignInCard.css";

class SignInCard extends React.Component {
  render() {
    return (
      <div className="Container">
        <Row>
          <Col m={4} offset="m4">
            <Card className="signIn" title="Administrator Sign-In">
              <p>I will put a form here.</p>
              <h5>Username: lkhlkhlkh7</h5>
              <p>Password: *************</p>
              <br />
              <Button>Sign In</Button>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SignInCard;
