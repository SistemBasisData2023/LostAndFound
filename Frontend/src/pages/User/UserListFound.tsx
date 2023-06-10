import React from 'react';
import { useState, useEffect } from 'react';


function ListFound(){
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:9000/getfound",{
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
  
  useEffect(() => {
    getTodos();
  }, []);

  const handleBackButton = () => {
    window.location.href = '/user/home';
  };

  const handleRequestReturn = (item_name) => {
    const adminEmail = 'admin@mail.com';
    const subject = `Return Request for ${item_name}`;
    const body = 
    `Dear Lost and Found Admin,
    \nI would like to request the return of the item "${item_name}". Please let me know the process and any further information required. \n\nThank you.\n\nSincerely, [Your Name]`;
    const mailtoLink = `mailto:${adminEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-[#CF9D95] min-h-screen">
      <img
        src="../src/assets/recentposts.png"
        alt="recentpost"
        className="pt-8 mx-28 items-center w-96"
      />

      <p className="mx-28 mt-8 h- bg-[#E5E5E5] text-gray-800 px-4 py-2 rounded-full inline-block relative">
        Maybe one of these is yours...
      <span className="absolute w-5 h-5 bg-[#E5E5E5] bottom-0 left-1/2 transform -translate-x-[90px] translate-y-[8px] rotate-45"></span>
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
                <span className="font-semibold">Location Found:</span>{' '}
                {todo.location_found}
              </p>
              <p>
                <span className="font-semibold">Date Found:</span>{' '}
                {todo.date_found}
              </p>
              <p>
                <span className="font-semibold">Location Submitted:</span>{' '}
                {todo.location_submitted}
              </p>
              <p>
                <span className="font-semibold">User ID:</span> {todo.user_id}
              </p>
              <button
                onClick={() => handleRequestReturn(todo.item_name)}
                className="mt-4 bg-blue-300 text-white py-2 px-4 rounded hover:bg-[#C5C6C7] mx-auto"
              >
                Request for Return
              </button>
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
