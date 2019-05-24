import React from "react";
import ReactDOM from "react-dom"
import TodoList from "./todolist"
import "./index.css";

let destination = document.getElementById("container");

ReactDOM.render(
    <TodoList/>, 
    destination);