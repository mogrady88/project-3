import React from "react";
import Row from "../../../components/shared/grid/Row";
import Col from "../../../components/shared/grid/Col";
import Task from "../../../components/private/Task";
import "./Tasks.css";

const Tasks = props => (
  <div>
    <Row>
      <Col size="4">
        <a className="btn" name="task" onClick={props.handleCreate}>
          Create Task
        </a>
      </Col>
    </Row>
    {props.createTask ? (
      "yolo"
    ) : (
      <div>
        {props.tasks.map(task => (
          <Task
            title={task.title}
            summary={task.description}
            status={task.isComplete ? "Complete" : "Incomplete"}
            funds={task.funds}
          />
        ))}
      </div>
    )}
  </div>
);

export default Tasks;
