import axios from "axios";
import React, { useState } from "react";
import '../AddTodo.css'
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
const AddTodo = () => {

  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.name === "status" ? e.target.value === "true" : e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form); // Check the value of form in the console
    axios
      .post('http://localhost:4000/todo/add', form)
      .then((res) => {
        alert('added');
        navigate('/');
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
   <>
   <Navbar/>
  
    <div className="container">
      
    <h1>Add Todo Here</h1>
    <div className="input-container">
      <input
        type="text"
        name="description"
        placeholder="Enter Todo Here"
        onChange={inputHandler}
      /> <select name="status" className="status-select" onChange={inputHandler}>
      <option value="false">Ongoing</option>
      <option value="true">Completed</option>
    </select>
      <button className="add-button" onClick={onSubmit}>
        Add 
      </button>
    </div>
  
  </div> </>
  )
}

export default AddTodo
