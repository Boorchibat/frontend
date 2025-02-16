import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { useUserContext } from "./UserContext";

const TaskContext = createContext();

export const TaskContextProvider = (props) => {
  const { children } = props;
  const [tasks, setTasks] = useState([]);
  const [tasksLoading, setTasksLoading] = useState(true);
  const { currentUser } = useUserContext();

  useEffect(() => {
    const getTasks = async () => {
      try {
        const response = await axios.get("http://localhost:9000/tasks", {
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
          },
        });

        const { data } = response;
        setTasks(data);
        setTasksLoading(false);
      } catch (error) {
        console.log(error);
        setTasksLoading(false);
      }
    };

    if(currentUser){
        getTasks();
    }
  }, [currentUser]);


  return (
    <TaskContext.Provider value={{ tasks, tasksLoading, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
export const useTaskContext = () => {
  return useContext(TaskContext);
};
