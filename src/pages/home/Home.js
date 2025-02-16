import React from "react";
import { Button } from "../../components/button";
import { useUserContext } from "../../context";

export const Home = () => {
  const {setCurrentUser} = useUserContext();
  const handleSignOut = () => {
    setCurrentUser(null);
    localStorage.removeItem("user")
  }
  return <div style={{display:"flex"}}>Home
    <div>
      <Button onClick={handleSignOut}>Sign out</Button>
    </div>
  </div>;
};
