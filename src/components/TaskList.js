import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, completeTask } from "../features/tasks/tasksSlice";
import { Trash2 } from 'react-feather';

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
    <Container>
      <Title>Task List</Title>
        <ListContainer>
          <div>List</div>
          <div>Status</div>
          <div>Close</div>
        </ListContainer>
      <TasksContainer>
        {tasks &&
          tasks.length > 0 &&
          tasks.map((task) => (
            <TaskListContainer key={task.id}>
              <TaskItem>
                <Divider />
                <TaskDetails style={{ textDecoration: task.completed ? "none" : "none" }}>
                  {task.title}
                  <Buttons>
                    <Button1 onClick={() => handleComplete(task.id)}>{task.completed ? "Completed" : "Pending"}</ Button1>
                    <Button2 onClick={() => handleDelete(task.id)}><Trash2 /></Button2>
                  </Buttons>
                </TaskDetails>
              </TaskItem>
            </TaskListContainer>
          ))}
      </TasksContainer>
    </Container>
  );
};

export default TaskList;

const Container = styled.div`
  margin-top: 4vh;
  border: none;
  border-radius: 1rem;
  box-shadow: 0 0 5px #ccc;
`

const Title = styled.h2`
  color: #fff;
  background-color: rgb(255, 255, 255);
  font-family: "Oswald", sans-serif;
  font-size: 5vh;
  color: #000;
  margin-bottom: 2rem;
  padding-left: 4vh;
`;

const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 2rem;
  height: 60vh;
  width: 90vh;
  margin: 0 auto;
  border-radius: 1rem;
  margin-bottom: 2rem;
  overflow-y: auto;
  scrollbar-width: none;
`;

const TaskListContainer = styled.div`
  margin-top: 2rem;
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: auto;
  width: 85.7vh;
  color: rgb(174, 174, 174);
  background-color: rgb(249, 249, 249);
  font-size: 3vh;
  padding: 3vh;
`

const TaskItem = styled.li`
  padding: 10px;
  font-size: 3rem;
  font-family: Arial, Helvetica, sans-serif;
  list-style: none;
`;

const TaskDetails = styled.span`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  height: auto;
  width: 80vh;
  font-size: 1.5rem;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  width: 54vh;
`

const Button1 = styled.button`
  margin-right: 10px;
  margin-top: 2vh;
  height: 3rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  font-family: Arial,Helvetica,sans-serif;
  font-size: 1.5rem;
  cursor: pointer;
  background-color: rgb(152, 196, 191);
  color: white;
  transition: 0.3s;
  margin-left: 9.5vh;
  &:hover {
    background-color: white;
    color: rgb(152, 196, 191);
  };
`;

const Button2 = styled.button`
  height: 2rem;
  border: none;
  margin-top: 1.5vh;
  background-color: white;
  color: rgb(237, 148, 144);
  border-radius: 1rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  font-size: 1.5rem;
  cursor: pointer;
  transition: 0.3s;
  margin-left: 15vh;
  &:hover {
    background-color: rgb(237, 148, 144);
    color: white;
  };
`;

const Divider = styled.div`
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
  width: 100%;
`;
