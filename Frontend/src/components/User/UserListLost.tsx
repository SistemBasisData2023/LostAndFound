import React, { Fragment, useEffect, useState } from "react";

function ListLost() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:9000/getlost", {
        method: "POST", // Set the request method to POST
        headers: {
          "Content-Type": "application/json", // Set the request content type
        },
        body: JSON.stringify({}), // Pass the request payload if required
      });

      if (!response.ok) {
        throw new Error("Request failed with status " + response.status);
      }
      
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Id</th>
            <th>Item Name</th>
            <th>Description</th>
            <th>Location Lost</th>
            <th>Date Lost</th>
            <th>User Id</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.lost_table_id}>
              <td>{todo.lost_item_id}</td>
              <td>{todo.item_name}</td>
              <td>{todo.description}</td>
              <td>{todo.location_lost}</td>
              <td>{todo.date_lost}</td>
              <td>{todo.user_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}

export default ListLost;