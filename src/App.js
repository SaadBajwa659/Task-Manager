import React from "react";
import styled from "styled-components";
import TaskList from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";

function App() {
  return (
    <Container>
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
  height: 100vh;
`;

export default App;
