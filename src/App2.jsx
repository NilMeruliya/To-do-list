import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import ApiCards from "./ApiCards";

const App2 = () => {

  const [users, setUsers] = useState([]); // we take empty array as an initial value because we get json data in an Array.
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      setLoading(false);
      const response = await fetch("https://api.github.com/users");
      console.log(response); 
      setUsers(await response.json());     
    } catch (error) {
      setLoading(false);
      console.log("my error is:", error);
    }

    // const data = await response.json();
    // console.log(data);

  };

  useEffect(() => {
    getUsers();
  }, []); // bcz of auto rerender, page automatically gets refreshed and called again and again. in order to prevent it, use empty array.

  if(loading) {
    return <Loading />
  }

  return (
    <>
      <ApiCards users={users}/>
    </>
  );
};

export default App2;
