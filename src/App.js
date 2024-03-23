import React from "react";
import styled from "styled-components";
import TaskList from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";

function App() {
  return (
    <Container>
      <TitleBar>
        <Title>Task Manager</Title>
      </TitleBar>
      <TaskForm />
      <TaskList />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 105vh;
  border: 1px solid #ccc;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 0 10px #ccc;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: white;
  font-family: sans-serif;
  font-weight: lighter;
`

const TitleBar = styled.div`
  background-image: linear-gradient( to right , rgb(95, 69, 134), rgb(82, 98, 149) );
  height: 20vh;
  width: 100%;
  border-radius: 1rem 1rem 0 0;
  box-shadow: 0 0 10px #ccc;
`

export default App;
