import React, { useEffect, useState } from 'react';
import axios from 'axios';


function GetUser() {
  const [users, setUsers] = useState([]);

const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:9000/admin/getuser');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleBackButton = () => {
    window.location.href = "/admin/home#command-section";
  };

  useEffect(() => {
    getUsers();
  }, []);

   
  return (
    <div className="bg-[#CF9D95] min-h-screen flex flex-col items-center">
      <img src="../src/assets/userlist.png" alt="userlisttitle" className="mt-8 mb-8 items-end self-end" />
      <div className="flex-grow w-screen px-16">
        <table className="table-auto mb-12 w-full bg-[#F9F3E6] rounded-xl">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.user_id}>
              <td className="px-4 py-2 text-center">{user.user_id}</td>
              <td className="px-4 py-2 text-center">{user.username}</td>
              <td className="px-4 py-2 text-center">{user.email}</td>
            </tr>
            ))}
          </tbody>
        </table>

        <button onClick={handleBackButton}
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-8">
          BACK
        </button>


      </div>
    </div>
  );
  
  
}

export default GetUser;
