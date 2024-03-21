import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/tasksSlice";
import styled from "styled-components";

export const TaskForm = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim() === "") {
      return;
    }
    dispatch(addTask({ id: Date.now(), title: taskTitle, completed: false }));
    setTaskTitle("");
  };

  return (
    <form style={{ flex: "20%", marginTop: "2rem" }} onSubmit={handleSubmit}>
      <Form>
        <Input type="text" placeholder="What would you like to do?" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
        <Button type="submit">Add</Button>
      </Form>
    </form>
  );
};

const Input = styled.input`
  width: 30rem;
  height: 3rem;
  border: none;
  border-bottom: 4px solid #ccc;
  padding-left: 1rem;
  margin-bottom: 1rem;
  outline: none;
  font-size: 1rem;
`;

const Button = styled.button`
  height: 3rem;
  width: 15rem;
  font-size: 2rem;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 0 0 10px rgb(238, 105, 88);
  transition: all 0.3s ease;
  background-color: rgb(238, 105, 88);
  color: white;
`;

const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: -15vh;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 10px #ccc;
  height: 25vh;
  width: 90vh;
  border-radius: 1rem;
`