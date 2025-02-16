import React from "react";
import { Modal } from "./Modal";
import { TextField } from "../textfield";
import { useFormik } from "formik";
import axios from "axios";
import { Button } from "../button";
import { useTaskContext, useUserContext } from "../../context";
import * as yup from "yup";
import { Select, MenuItem } from "@mui/material";



export const CreateTaskModal = (props) => {
  const { currentUser } = useUserContext();
  const { open, handleClose } = props;
  const {setTasks} = useTaskContext();
  const validationSchema = yup.object({
    title: yup
      .string()
      .min(6, "Title must be at least 6 characters")
      .required(),
    description: yup
      .string()
      .min(6, "Description Must be at least 6 characters")
      .required(),
    status: yup.string().required(),
  });
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      status: "TO DO",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values);
      resetForm();
      handleClose();
    },
  });
  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        "https://node-6oe4.onrender.com/tasks",
        {
          title: values.title,
          description: values.description,
          status: values.status,
        },
        {
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
          },
        }
      );
      const { data } = response;
      setTasks((prevTasks) => [...prevTasks, data])

    } catch (error) {
        console.log(error)
      return error;
    }
  };
  return (
    <Modal open={open} handleClose={handleClose}>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <h1>Create Task</h1>
            <p>Please enter your details</p>
            <div style={{ marginTop: "20px"}}>
              <TextField
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                placeholder="Title"
                type="text"
                style={{
                  borderColor: formik.errors.title && "red",
                }}
              />
              {formik.errors.title && (
                <p style={{ color: "red", margin: 0, fontSize: 12 }}>
                  {formik.errors.title}
                </p>
              )}
              <TextField
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                placeholder="Description"
                type="text"
                style={{
                  borderColor: formik.errors.description && "red",
                }}
              />
              {formik.errors.description && (
                <p style={{ color: "red", margin: 0, fontSize: 12 }}>
                  {formik.errors.description}
                </p>
              )}
              <Select
                name="status"
                defaultValue="TO DO"
                value={formik.values.status}
                onChange={formik.handleChange}
                style={{
                  borderColor: formik.errors.status && "red",
                  width: "400px",
                }}
              >
                <MenuItem value="TO DO" key="todo">
                  TO DO
                </MenuItem>
                <MenuItem value="IN PROGRESS" key="in-progress">
                  IN PROGRESS
                </MenuItem>
                <MenuItem value="DONE" key="done">
                  DONE
                </MenuItem>
              </Select>

              {formik.errors.status && (
                <p style={{ color: "red", margin: 0, fontSize: 12 }}>
                  {formik.errors.status}
                </p>
              )}
              <Button type="submit" onSubmit={formik.handleSubmit}>
                Finalize Task
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};
