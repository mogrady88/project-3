import React from "react";
import { Row, Col, Tabs, Tab, Input, Button } from "react-materialize";
import Task from "../Task";
import ThreadCard from "../ThreadCard";
import PostCard from "../PostCard";
import "./ProjectContainer.css";

class ProjectContainer extends React.Component {
  render() {
    return (
      <div className="projectContainer blue-grey darken-1 white-text">
        <Row className="projectMeta">
          <Col s={8} className="projectMetaLeft">
            <h5>{this.props.project}</h5>
            <p>{this.props.summary}</p>
          </Col>
          <Col s={4} className="projectMetaRight">
            <p>Funds: ${this.props.totalFunds}</p>
            <p>Used Funds: ${this.props.usedFunds}</p>
            <p>
              Available Funds: ${this.props.totalFunds - this.props.usedFunds}
            </p>
          </Col>
        </Row>
        <Tabs className="tab-demo z-depth-1">
          <Tab title="Tasks" active>
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
          </Tab>
          <Tab title="Discussion">
            <Row>
              <Col s={12}>
                <ThreadCard
                  title="Who is bringing the salsa?"
                  author="Tyler Maxwell"
                  replies={17}
                  updatedBy="Matt O'Grady"
                  updatedAt="Sep 27, 2018"
                />
                <ThreadCard
                  title="Who is bringing the salsa?"
                  author="Tyler Maxwell"
                  replies={17}
                  updatedBy="Matt O'Grady"
                  updatedAt="Sep 27, 2018"
                />
                <ThreadCard
                  title="Who is bringing the salsa?"
                  author="Tyler Maxwell"
                  replies={17}
                  updatedBy="Matt O'Grady"
                  updatedAt="Sep 27, 2018"
                />
                <ThreadCard
                  title="Who is bringing the salsa?"
                  author="Tyler Maxwell"
                  replies={17}
                  updatedBy="Matt O'Grady"
                  updatedAt="Sep 27, 2018"
                />
              </Col>
            </Row>
          </Tab>
          <Tab title="Posts">
            <PostCard
              title="The Art of Exposure: Thinking Sculpture with Heidegger"
              tags={["Mike Ryan Lecture Series", "Heidegger", "Aesthetics"]}
              summary="A lecture by Andrew Mitchell of Emory University on October 1, 12:30 – 1:45 in the Student Center Leadership Room. Part of the Mike Ryan Lecture Series. "
              isPublic={false}
            />
            <PostCard
              title="Gendered Bodies: The Feminist Reception of Merleau-Ponty’s Embodiment Theory"
              tags={[
                "Mike Ryan Lecture Series",
                "Merleau-Ponty",
                "Phenomenology",
                "Feminism"
              ]}
              summary="A lecture by Talia Welsh of the University of Tennessee at Chattanooga on October 7, 12:30 – 1:45 in the Student Center Leadership Room. Part of the Mike Ryan Lecture Series. "
              isPublic={false}
            />
            <PostCard
              title="The AI Constellation: Cybernetics, Science Fiction, and Communication"
              tags={[
                "Mike Ryan Lecture Series",
                "Philosophy of Science",
                "Artificial Intelligence"
              ]}
              summary="A lecture by Bruce Clarke of Texas Tech on November 5, 12:30 – 1:45 in room HS1000. Part of the Mike Ryan Lecture Series. "
              isPublic={false}
            />
            <PostCard
              title="Only a Buddha Knows: Vasubandhu and External-World Skepticism"
              tags={["Mike Ryan Lecture Series", "Buddhism"]}
              summary="A lecture by Ethan Mills of the University of Tennessee at Chattanooga on October 22, 12:30 – 1:45 in room HS1000. Part of the Mike Ryan Lecture Series. "
              isPublic={false}
            />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default ProjectContainer;
