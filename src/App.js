import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home, Signin, Signup } from "./pages";
import { useUserContext } from "./context";
import { Tasks } from "./pages/tasks";
import { Task } from "./pages/task";

export const App = () => {
  const { currentUser, userContextLoading } = useUserContext();

  if (userContextLoading) {
    return <div>...Loading</div>;
  }
  console.log(currentUser);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={currentUser ? <Home /> : <Navigate to="/sign-in" />}
          />
          <Route
            path="/sign-in"
            element={currentUser ? <Navigate to="/" /> : <Signin />}
          />
          <Route
            path="/sign-up"
            element={currentUser ? <Navigate to="/" /> : <Signup />}
          />
          <Route
            path="/tasks/:id"
            element={currentUser ? <Task /> : <Navigate to="/sign-in" />}
          />
          <Route
            path="/tasks"
            element={currentUser ? <Tasks /> : <Navigate to="/sign-in" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
