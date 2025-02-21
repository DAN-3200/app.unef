import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <>
      <div className="home">
        <NavBar />
        <ToDoMold />
        <ToDoObject />
      </div>
    </>
  );
}

function NavBar() {
  return (
    <>
      <div className="navBar">
        <button className="btnChoose">ToDo</button>
        <button className="btnChoose">Users</button>
      </div>
    </>
  );
}

function ToDoMold() {
  const [title, setTitle] = useState("");

  const createToDo = async () => {
    console.log("FOI")
    await fetch("http://localhost:3000/create", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title : title
      }),
    });
  }

  return (
    <div className="toDoMold">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <button className="make" onClick={() => createToDo()}>Make</button>
    </div>
  );
}

function ToDoObject() {
  const title = "sdadsdsadasdsa";
  const id = 12;
  return (
    <div className="toDoObject">
      <span className="title">{title}</span>
      <span className="idToDo">id:{id}</span>
      <button className="delete">Delete</button>
    </div>
  );
}
