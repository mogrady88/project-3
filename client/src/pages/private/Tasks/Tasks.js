import React from "react";
import Row from "../../../components/shared/grid/Row";
import Col from "../../../components/shared/grid/Col";
import Task from "../../../components/private/Task";
import Select from "react-select";
import "./Tasks.css";

const options = [
  { value: "all", label: "All" },
  { value: "complete", label: "Complete" },
  { value: "incomplete", label: "Incomplete" },
  { value: "assigned", label: "Assigned" },
  { value: "unassigned", label: "Unassigned" }
];

const Tasks = props => (
  <div>
    <Row>
      <Col size="4">
        <Select options={options} />
      </Col>
      <Col size="4">
        <a className="btn">Create Task</a>
      </Col>
    </Row>
    {props.tasks.map(task => (
      <Task
        title={task.title}
        summary={task.description}
        status={task.isComplete ? "Complete" : "Incomplete"}
        funds={task.funds}
      />
    ))}
  </div>
);

export default Tasks;
