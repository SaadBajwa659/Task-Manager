import React from "react";
import './styles/App.css'
import { applyMiddleware, configureStore } from 'redux'
import styled from "styled-components";
import { motion } from "framer-motion";
import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";

function App() {
  return (
    <div>
      <Form>
        <TaskList />
        <TaskForm />
      </Form>
    </div>
  );
}

const Form = styled(motion.div)`
  border: 2px solid grey;
  border-radius: 1rem;
  height: 50rem;
  width: 40rem;
  position: absolute;
  left: 30rem;
  top: 3rem;
  overflow: hidden;
  box-shadow: 5px 5px 1px rgba(0, 0, 0, 0.1);
`;

export default App;
