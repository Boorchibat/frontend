import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext();

const isTokenExpired = (token) => {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const currentTime = Date.now() / 1000;

    return payload.exp < currentTime;
  } catch (error) {
    console.log(error);
  }
};
export const UserContextProvider = (props) => {
  const { children } = props;
  const [currentUser, setCurrentUser] = useState(null);
  const [userContextLoading, setUserContextLoading] = useState(true);

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        setUserContextLoading(false);
        return;
      }

      if (user.token && !isTokenExpired(user.token)) {
        setCurrentUser(user);
        setUserContextLoading(false);
      } else {
        setCurrentUser(null);
        localStorage.removeItem("user");
      }

      setCurrentUser(user);
      setUserContextLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ currentUser, userContextLoading, setCurrentUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => {
  return useContext(UserContext);
};
