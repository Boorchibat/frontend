import React from "react";
import axios from "axios";
import { Modal } from "./Modal";
import { Button } from "../button";
import { useTaskContext, useUserContext } from "../../context";

export const DeleteTaskModal = ({ open, handleClose, id, setDeleteId }) => {
  const { currentUser } = useUserContext();
  const {setTasks} = useTaskContext();
  const handleButtonClick = () => {
    if (handleClose) {
      handleClose(); 
      setDeleteId("");
      
      
    }
  };
  


  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `https://node-6oe4.onrender.com/tasks/${id}`,

        {
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
          },
        }
      );
      const { data } = response;
      console.log({data})
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id))
      handleClose()
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  return (
    <Modal open={open} handleClose={handleClose}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h3>Do you want to delete this task?</h3>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "80px" }}>
          <Button onClick={handleButtonClick}>Cancel</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </div>
      </div>
    </Modal>
  );
};
