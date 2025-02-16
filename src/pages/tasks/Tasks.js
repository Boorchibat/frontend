import React from "react";
import { useTaskContext } from "../../context/TaskContext";
import { Taskcard } from "../../card";
import { Button } from "../../components/button";
import { useState } from "react";
import { CreateTaskModal } from "../../components/modal";
import { DeleteTaskModal } from "../../components/modal/DeleteTaskModal";

export const Tasks = () => {
  const { tasks } = useTaskContext();
  const [openTask, setOpenTask] = useState(false);
  const handleCloseTask = () => setOpenTask(false);
  const handleOpenTask = () => setOpenTask(true);
  const [openDelete, setOpenDelete] = useState(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);
  const [deleteId, setDeleteId] = useState("");

  return (
    <div>
      <div style={{ marginTop: "50px", marginLeft: "30px" }}>
        <Button onClick={handleOpenTask}>Create Task</Button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {tasks.slice(1).map((task, index) => (
          <div
            key={index}
            style={{
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: 14,
            }}
          >
            <Taskcard setDeleteId={setDeleteId} handleOpen={handleOpenDelete} task={task} />
          </div>
        ))}
      </div>
      <DeleteTaskModal open={openDelete} id={deleteId} handleClose={handleCloseDelete} setDeleteId={setDeleteId} />
      <CreateTaskModal open={openTask} handleClose={handleCloseTask} />
    </div>
  );
};
