import React, { useEffect, useState } from "react";


fetch("https://api.avangardgold.ro/v1/currency-exchange/rates") 
                            .then((response) => response.json())
                            .then((user) => {

console.log(user)
                            })



const Api = () => {
  const [users, setUsers] = useState();


  const getApiData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/"
    ).then((response) => response.json());

    setUsers(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="app d-none">
      {users &&
        users.map((user) => (
          <div className="item-container">
            Id:{user.id} <div className="title">Title:{user.title}</div>
          </div>
        ))}
    </div>
  );
}



export default Api;
