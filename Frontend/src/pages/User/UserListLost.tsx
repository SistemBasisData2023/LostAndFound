import React from 'react';
import { useState, useEffect } from 'react';


function ListFound(){
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:9000/getlost",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });

      if (!response.ok) {
        throw new Error("Request failed with status " + response.status);
      }

      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (error) {
      console.error("An error occurred while getting the items:", error);
    }
  };
  
  const handleBackButton = () => {
    window.location.href = '/user/home';
  };

  useEffect(() => {
    getTodos();
  }, []);


  return (
    <div className="bg-[#CF9D95] min-h-screen">
      <img
        src="../src/assets/recentposts.png"
        alt="recentpost"
        className="pt-8 mx-28 items-center w-96"
      />
      <p className="mx-28 mt-8 h- bg-blue-200 text-gray-800 px-4 py-2 rounded-full inline-block relative">
        Have you seen these items...?
      <span className="absolute w-3 h-3 bg-blue-200 bottom-0 left-1/2 transform -translate-x-1/2 rotate-45"></span>
      </p>

      <div className="mx-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-8 pb-28">
        {todos.map((todo) => (
          <div
            key={todo.lost_item_id}
            className="border p-4 bg-[#E5E5E5] rounded-md shadow-md flex flex-col justify-between"
            style={{ aspectRatio: '1/1' }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{todo.item_name}</h3>
              <p className="text-gray-600">{todo.description}</p>
            </div>
            <div className="text-center mt-auto">
              <p>
                <span className="font-semibold">Location Lost:</span>{' '}
                {todo.location_lost}
              </p>
              <p>
                <span className="font-semibold">Date Found:</span>{' '}
                {todo.date_lost}
              </p>
              <p>
                <span className="font-semibold">User ID:</span> {todo.user_id}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button onClick={handleBackButton}
      className="py-4 mx-28 mb-12 items-center w-48 bg-gray-500 hover:bg-gray-700 rounded-full font-semibold">
        Back to Home
      </button>

    </div>
  );
  
  
};

export default ListFound;
