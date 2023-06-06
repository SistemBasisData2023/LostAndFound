import React, { useState } from 'react';
import axios from 'axios';

function UserInsertLost() {
  const [item_name, setitem_name] = useState('');
  const [description, setDescription] = useState('');
  const [location_lost, setlocation_lost] = useState('');
  const [date_lost, setdate_lost] = useState('');

  const handleitem_nameChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setitem_name(e.target.value);
  };

  const handleDescriptionChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setDescription(e.target.value);
  };

  const handlelocation_lostChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setlocation_lost(e.target.value);
  };

  const handledate_lostChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setdate_lost(e.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const user_id_temp = localStorage.getItem('user_id');
    const user_id = parseInt(user_id_temp!);

    const requestData = {
      item_name,
      description,
      location_lost,
      date_lost,
      user_id,
    };

    try {
      const response = await axios.post(
        'http://localhost:9000/user/insertlost',
        requestData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        // Handle successful response, e.g., show success message
        console.log('Lost item inserted successfully!');
      } else {
        // Handle error response, e.g., show error message
        console.error('Failed to insert lost item.');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('An error occurred:', error);
    }

    // Clear the input fields after submission
    setitem_name('');
    setDescription('');
    setlocation_lost('');
    setdate_lost('');
    window.location.href = '/user/home';
  };

  return (
    <div>
      <h2>Insert Lost Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="item_name">Item Name:</label>
          <input
            type="text"
            id="item_name"
            value={item_name}
            onChange={handleitem_nameChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="location_lost">Location Lost:</label>
          <input
            type="text"
            id="location_lost"
            value={location_lost}
            onChange={handlelocation_lostChange}
          />
        </div>
        <div>
          <label htmlFor="date_lost">Date Lost:</label>
          <input
            type="date"
            id="date_lost"
            value={date_lost}
            onChange={handledate_lostChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserInsertLost;
