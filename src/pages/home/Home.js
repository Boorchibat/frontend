import React from "react";
import { Button } from "../../components/button";
import { useUserContext } from "../../context";

export const Home = () => {
  const {setCurrentUser} = useUserContext();
  const handleSignOut = () => {
    setCurrentUser(null);
    localStorage.removeItem("user")
  }
  return <div style={{display:"flex", justifyContent:"center"}}>
  <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignContent:"center", marginTop:"100px"}}>
  <div style={{display:"flex", gap:"100px"}}>
      <h1>Welcome</h1>
      <Button onClick={handleSignOut}>Sign out</Button>
    </div>
    <div style={{display:"flex", gap:"100px"}}>
      <h1>Click to see your tasks</h1>
      <a  href="/tasks"><Button>Tasks</Button></a>
    </div>
  </div>
   
  </div>;
};
