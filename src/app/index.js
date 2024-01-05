import React from "react";
import Main from "./main";
import { Route, Routes } from "react-router-dom";
import AddTask from "./add-task";
import Task from "./task";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/add-task"} element={<AddTask />} />
        <Route path={"/task/:id"} element={<Task />} />
      </Routes>
    </>
  );
}

export default App;
