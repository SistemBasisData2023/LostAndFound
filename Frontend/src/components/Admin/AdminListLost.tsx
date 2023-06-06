import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

function AdminListLost() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:9000/getlost", {
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
  

  const handleDelete = async (lost_item_id) => {
    try {
      await axios.delete("http://localhost:9000/admin/deletelost", {
        data: { lost_item_id },
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
            <th>Location Lost</th>
            <th>Date Lost</th>
            <th>User Id</th>
            <th>Actions</th> {/* Added column for actions */}
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
              <td>
                <button onClick={() => handleDelete(todo.lost_item_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}

export default AdminListLost;
