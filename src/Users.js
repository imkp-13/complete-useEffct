import axios from "axios";
import React, { useEffect } from "react";

const Users = () => {
  useEffect(() => {
    let fetched = true;
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users`
        );
        if (fetched) {
          console.log(res);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
    return () => {
      fetched = false;
    };
  }, []);
  return <div>Users</div>;
};

export default Users;
