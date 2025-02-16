import React from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

export const Taskcard = ({ task, setDeleteId, handleOpen }) => {
  const handleClick = (id) => {
    setDeleteId(id);
    handleOpen();
  };
  const navigate = useNavigate();

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          width: 250,
          height: 260,
          padding: 20,
          borderRadius: 12,
          border: "1px solid #E8E8EA",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          cursor: "pointer",
          margin: "30px",
        }}
        onClick={() => navigate(`/tasks/${task._id}`)}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>{task.title}</p>
        </div>
        <div>
          <p style={{ overflow: "hidden", height: "60px" }}>
            {task.description}
          </p>
        </div>
        <div>
          <p>{task.status}</p>
        </div>
      </div>
      <div style={{ position: "absolute", top: "20px", right: "40px" }}>
        <IconButton onClick={() => handleClick(task._id)} >
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};
