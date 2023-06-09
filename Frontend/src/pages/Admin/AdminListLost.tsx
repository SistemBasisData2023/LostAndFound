import React, { useEffect, useState } from 'react';
import axios from 'axios';


function AdminListLost() {
  const [todos, setTodos] = useState([]);

const getTodos= async () => {
    try {
        const response = await fetch("http://localhost:9000/getfound", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        });

        if(response.ok){
            const data = await response.json();
            setTodos(data);
        }
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
    };

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

  const handleBackButton = () => {
      window.location.href = "/admin/home#command-section";
    };

  useEffect(() => {
    getTodos();
  }, []);

   
  return (
    <div className="bg-[#C2D4D8] min-h-screen flex flex-col items-center">
      <img src="../src/assets/founditemlist.png" alt="userlisttitle" className="mt-8 mb-8 items-end self-end" />
      <div className="flex-grow w-screen px-16">
        <table className="table-auto mb-12 w-full bg-[#F9F3E6] rounded-xl">
          <thead>
          <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Location Lost</th>
              <th className="px-4 py-2">Date Lost</th>
              <th className="px-4 py-2">Location Submitted</th>
              <th className="px-4 py-2">User ID</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map(todo => (
              <tr key={todo.found_table_id}>
                <td className="px-4 py-2 text-center">{todo.lost_item_id}</td>
                <td className="px-4 py-2 text-center">{todo.item_name}</td>
                <td className="px-4 py-2 text-center">{todo.description}</td>
                <td className="px-4 py-2 text-center">{todo.location_lost}</td>
                <td className="px-4 py-2 text-center">{todo.date_lost}</td>
                <td className="px-4 py-2 text-center">{todo.location_submitted}</td>
                <td className="px-4 py-2 text-center">{todo.user_id}</td>
                <td className="px-4 py-2">
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" 
                    onClick={() => handleDelete(todo.lost_item_id)}>
                    Delete
                  </button>
                </td>
            </tr>
            ))}
          </tbody>
        </table>

        <button onClick={handleBackButton}
        className="bg-gray-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          BACK
        </button>
        
      </div>
    </div>
  );
  
  
}

export default AdminListLost;
