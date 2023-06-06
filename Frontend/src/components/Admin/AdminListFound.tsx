import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
function AdminListFound() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:9000/getfound", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
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

  const handleDelete = async (found_item_id: any) => {
    try {
      await axios.delete("http://localhost:9000/admin/deletefound", {
        data: { found_item_id },
      });
  
      // Refresh the page after deletion
      getTodos();
    } catch (error) {
      console.error("An error occurred while deleting the item:", error);
    }
  };

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
            <th>Delete</th>
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
              <td>
                <button onClick={() => handleDelete(todo.found_item_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}

export default AdminListFound;
