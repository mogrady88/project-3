import React, { Component } from "react";
import Nav from "../../components/Nav";
import Row from "react-materialize/lib/Row";
import Col from "react-materialize/lib/Col";

class Private extends Component {
  state = {};

  componentDidMount() {}

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <Nav isPublic={false} />
        <Row>
          <Col s={3} className="grid1">
            Projects
          </Col>
          <Col s={9} className="grid2">
            Current Project View
          </Col>
        </Row>
      </div>
    );
  }
}

export default Private;
