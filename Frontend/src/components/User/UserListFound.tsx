import React, { Fragment, useEffect, useState } from "react";

function ListFound() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:9000/getfound", {
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
            <th>Location Found</th>
            <th>Date Found</th>
            <th>Location Submitted</th>
            <th>User Id</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.found_table_id}>
              <td>{todo.found_item_id}</td>
              <td>{todo.item_name}</td>
              <td>{todo.description}</td>
              <td>{todo.location_found}</td>
              <td>{todo.date_found}</td>
              <td>{todo.location_submitted}</td>
              <td>{todo.user_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}

export default ListFound;