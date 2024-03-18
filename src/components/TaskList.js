import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, completeTask } from "../features/tasks/tasksSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleComplete = (taskId) => {
    console.info("complete clicked: ", taskId);
    dispatch(completeTask(taskId));
  };

  const handleDelete = (taskId) => {
    console.info("delete clicked: ", taskId);
    dispatch(deleteTask(taskId));
  };
  return (
    <div>
      <Title>Task List</Title>
      <TasksContainer>
        {tasks &&
          tasks.length > 0 &&
          tasks.map((task) => (
            <TaskListContainer key={task.id}>
              <TaskItem>
                <Divider />
                <TaskDetails style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                  {task.title}
                  <Button1 onClick={() => handleComplete(task.id)}>{task.completed ? "Undo" : "Complete"}</Button1>

                  <Button2 onClick={() => handleDelete(task.id)}>Delete</Button2>
                </TaskDetails>
              </TaskItem>
            </TaskListContainer>
          ))}
      </TasksContainer>
    </div>
  );
};

export default TaskList;

const Title = styled.h2`
  color: #fff;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  font-family: "Oswald", sans-serif;
  font-size: 4rem;
  margin-bottom: 2rem;
`;

const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 2rem;
  padding-right: 4rem;
  overflow-y: auto;
  height: 60vh;
  width: 100%;
  margin: 0 auto;
  border-radius: 1rem;
  border: 1px solid #ccc;
  margin-bottom: 2rem;
`;

const TaskListContainer = styled.div`
  margin-top: 2rem;
`;

const TaskItem = styled.li`
  padding: 10px;
  font-size: 3rem;
  font-family: Arial, Helvetica, sans-serif;
  list-style: none;
`;

const TaskDetails = styled.span`
  display: inline-block;
  height: auto;
  width: auto;
`;

const Button1 = styled.button`
  margin-right: 10px;
  height: 4rem;
  border: none;
  border-radius: 1rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Button2 = styled.button`
  height: 4rem;
  border: none;
  border-radius: 1rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  cursor: pointer;
`;
const Divider = styled.div`
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
  width: 100%;
`;
