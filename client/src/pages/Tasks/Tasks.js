import React, { Component } from "react";
import Nav from "../../components/Nav";
import ProjectCard from "../../components/ProjectCard";
import ProjectContainer from "../../components/ProjectContainer";
import { Row, Col, Input, Button } from "react-materialize";
import Task from "../../components/Task";
import API from "../../utils/postsAPI";
import { Link } from "react-router-dom";

class Tasks extends Component {
  state = {
    post: {}
  };

  // When this component mounts, grab the Post with the _id of this.props.match.params.id
  // e.g. localhost:3000/posts/599dcb67f0f16317844583fc

  componentDidMount() {
    API.getPost(this.props.match.params.id)
      .then(res => this.setState({ post: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
       <Row>
              <Col s={8}>
                <Input s={12} type="select" defaultValue="1">
                  <option value="1">All</option>
                  <option value="2">Complete</option>
                  <option value="3">Incomplete</option>
                  <option value="4">Assigned</option>
                  <option value="5">Unassigned</option>
                </Input>
              </Col>
              <Col s={4}>
                <Button>Create Task</Button>
              </Col>
            </Row>
            <Row>
              <Col s={12}>
                <Task
                  title="Task1"
                  summary="Cras felis mauris, cursus ac lorem iaculis, rutrum facilisis nisl. Quisque quis odio sem. Nulla vehicula lectus eu ullamcorper mattis. Nulla in quam erat. Duis et consequat sem. Sed quis dictum urna. Phasellus metus urna, congue at hendrerit nec, sagittis eget sapien."
                  status="Incomplete"
                  funds={500}
                />
                <Task
                  title="Task2"
                  summary="Cras felis mauris, cursus ac lorem iaculis, rutrum facilisis nisl. Quisque quis odio sem. Nulla vehicula lectus eu ullamcorper mattis. Nulla in quam erat. Duis et consequat sem. Sed quis dictum urna. Phasellus metus urna, congue at hendrerit nec, sagittis eget sapien."
                  status="Incomplete"
                  funds={1250}
                />
                <Task
                  title="Task3"
                  summary="Cras felis mauris, cursus ac lorem iaculis, rutrum facilisis nisl. Quisque quis odio sem. Nulla vehicula lectus eu ullamcorper mattis. Nulla in quam erat. Duis et consequat sem. Sed quis dictum urna. Phasellus metus urna, congue at hendrerit nec, sagittis eget sapien."
                  status="Incomplete"
                  funds={750}
                />
              </Col>
            </Row>
      </div>
    );
  }
}

export default Tasks;
