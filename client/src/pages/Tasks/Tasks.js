import React from "react";
import Row from "../../components/grid/Row";
import Col from "../../components/grid/Col";
import Task from "../../components/privateComponents/Task";
import Select from "react-select";

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
        <button>Create Task</button>
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
