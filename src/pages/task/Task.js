import React from "react";
import { useTaskContext } from "../../context";
import { useParams } from "react-router-dom";
import { UpdateTaskModal } from "../../components/modal/UpdateTaskModal";
import { useState } from "react";
import { Button } from "../../components/button";

export const Task = () => {
  const { tasks } = useTaskContext();
  const { id } = useParams();
  const [openUpdate, setOpenUpdate] = useState(false);
    const handleCloseUpdate = () => setOpenUpdate(false);
    const handleOpenUpdate = () => setOpenUpdate(true);
  const task = tasks.find((task) => task._id === id);

  return (
    <div
      style={{
        margin: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderBlockColor: "black",
        borderWidth: "2px",
        borderStyle: "solid",
      }}
    >
        <Button  onClick={handleOpenUpdate}>Update</Button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{display:"flex", gap:"100px"}}>
          <div>
            <h1>{task.title}</h1>
          </div>
          <div>
            <h1 style={{ overflow: "hidden", height: "60px" }}>
              {task.description}
            </h1>
          </div>
          <div>
            <h1>{task.status}</h1>
          </div>
          <div>
            <h1>{task.createdAt}</h1>
          </div>
        </div>
        <UpdateTaskModal id={task._id} task={task} open={openUpdate} handleClose={handleCloseUpdate}/>
      </div>
    </div>
  );
};
