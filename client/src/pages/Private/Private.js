import React, { Component } from "react";
import Nav from "../../components/Nav";
import Row from "react-materialize/lib/Row";
import Col from "react-materialize/lib/Col";
import ProjectCard from "../../components/ProjectCard";
import ProjectContainer from "../../components/ProjectContainer";
import "./Private.css";

class Private extends Component {
  state = {
    projectLoaded: false,
    project: "Project Name",
    summary:
      "Project summary text. Cras felis mauris, cursus ac lorem iaculis, rutrum facilisis nisl. Quisque quis odio sem. Nulla vehicula lectus eu ullamcorper mattis. Nulla in quam erat. Duis et consequat sem. Sed quis dictum urna. Phasellus metus urna, congue at hendrerit nec, sagittis eget sapien.",
    totalFunds: 5000,
    usedFunds: 2000
  };

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
          <Col s={3}>
            <h5>Projects</h5>
            <ProjectCard
              name="Project Name"
              status="Complete"
              summary="Project Summary."
            />
            <ProjectCard
              name="Super Awesome Project"
              status="Incomplete"
              summary="Vivamus ultricies diam ullamcorper velit sagittis, et mollis nibh eleifend."
            />
            <ProjectCard
              name="Other Project"
              status="Incomplete"
              summary="Sed faucibus pretium eros, non fermentum dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
            />
            <ProjectCard
              name="Last Project"
              status="Incomplete"
              summary="Sed faucibus pretium eros, non fermentum dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus ultricies diam ullamcorper velit sagittis, et mollis nibh eleifend."
            />
          </Col>
          <Col s={9}>
            <h5>Current Project View</h5>
            <ProjectContainer
              project={this.state.project}
              summary={this.state.summary}
              totalFunds={this.state.totalFunds}
              usedFunds={this.state.usedFunds}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Private;
