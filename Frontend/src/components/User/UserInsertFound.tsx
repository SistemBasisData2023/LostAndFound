import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserInsertFound() {
    const navigate = useNavigate();
  const [item_name, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [location_found, setLocationFound] = useState('');
  const [date_found, setDateFound] = useState('');
  const [location_submitted, setLocationSubmitted] = useState('');

  const handleItemNameChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setItemName(e.target.value);
  };

  const handleDescriptionChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setDescription(e.target.value);
  };

  const handleLocationFoundChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setLocationFound(e.target.value);
  };

  const handleDateFoundChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setDateFound(e.target.value);
  };

  const handleLocationSubmittedChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setLocationSubmitted(e.target.value);
  };

  const handleBackButtonClick = () => {
    navigate('/user/home');
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Retrieve the user ID from local storage or state
    const user_id_temp = localStorage.getItem('user_id');
    const user_id = parseInt(user_id_temp!);

    const requestData = {
      item_name,
      description,
      location_found,
      date_found,
      location_submitted,
      user_id,
    };

    try {
      const response = await axios.post(
        'http://localhost:9000/user/insertfound',
        requestData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        // Handle successful response, e.g., show success message
        console.log('Found item inserted successfully!');
      } else {
        // Handle error response, e.g., show error message
        console.error('Failed to insert found item.');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('An error occurred:', error);
    }

    // Clear the input fields after submission
    setItemName('');
    setDescription('');
    setLocationFound('');
    setDateFound('');
    window.location.href = '/user/home';
  };

  return (
    <div>
      <h2>Insert Found Item</h2>
      <button onClick={handleBackButtonClick} style={{ position: 'absolute', top: 10, left: 10 }}>
        Back
      </button>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="item_name">Item Name:</label>
          <input
            type="text"
            id="item_name"
            value={item_name}
            onChange={handleItemNameChange}
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
            <label htmlFor="location_found">Location Found:</label>
            <input
                type="text"
                id="location_found"
                value={location_found}
                onChange={handleLocationFoundChange}
            />
            </div>
        <div>
          <label htmlFor="date_found">Date Found:</label>
          <input
            type="date"
            id="date_found"
            value={date_found}
            onChange={handleDateFoundChange}
          />
        </div>
        <div>
          <label htmlFor="location_submitted">Location Submitted:</label>
          <select
            id="location_submitted"
            value={location_submitted}
            onChange={handleLocationSubmittedChange}
          >
            <option value="">Select Location</option>
            <option value="FT">FT</option>
            <option value="FH">FH</option>
            <option value="FK">FK</option>
            <option value="FF">FF</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserInsertFound;
