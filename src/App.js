import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import TaskList from './components/TaskList';
import { TaskForm } from "./components/TaskForm";

function App() {
  return (
    <Container>
        <TaskForm />
        <TaskList/>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default App;
