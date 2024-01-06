import React from "react";
import Main from "./main";
import { Route, Routes } from "react-router-dom";
import AddTask from "./add-task";
import Task from "./task";
import DoneTasks from "./done-tasks";
import Login from "./login";
import Protected from "../containers/protected";

function App() {
  return (
    <>
      <Routes>
        <Route
          path={"/"}
          element={
            <Protected redirect="/login">
              <Main />
            </Protected>
          }
        />
        <Route
          path={"/add-task"}
          element={
            <Protected redirect="/login">
              <AddTask />
            </Protected>
          }
        />
        <Route
          path={"/task/:id"}
          element={
            <Protected redirect="/login">
              <Task />
            </Protected>
          }
        />
        <Route
          path={"/done"}
          element={
            <Protected redirect="/login">
              <DoneTasks />
            </Protected>
          }
        />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
