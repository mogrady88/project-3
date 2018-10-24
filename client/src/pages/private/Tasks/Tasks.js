import React from "react";
import Row from "../../../components/shared/grid/Row";
import Col from "../../../components/shared/grid/Col";
import Task from "../../../components/private/Task";
import CreateTaskForm from "../../../components/private/CreateTaskForm";
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
      <CreateTaskForm
        newTask={props.newTask}
        handleCreateTaskInputChange={props.handleCreateTaskInputChange}
        handleCreateTaskFormSubmit={props.handleCreateTaskFormSubmit}
      />
    ) : (
      <div>
        {props.tasks
          .slice(0)
          .reverse()
          .map(task => (
            <Task
              title={task.title}
              description={task.description}
              status={task.isComplete ? "Complete" : "Incomplete"}
              funds={task.funds}
            />
          ))}
      </div>
    )}
  </div>
);

export default Tasks;
