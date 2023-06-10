import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../component/Nvgbar';
import Footer from '../../component/FooterPage';


const locations = ['FT', 'FF', 'Fpsi', 'FEB', 'FIB', 'FK'];

function InsertLost() {


  const [item_name, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [location_found, setLocationFound] = useState('');
  const [date_found, setDateFound] = useState('');
  const currentDate = new Date().toISOString().split('T')[0];
  const [location_submitted, setLocationSubmitted] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBack = () => {
    window.location.href = '/user/home#user-activity-section';
  };

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

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitted(true);
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
      <Navbar />
    <div 
    id="top-section"
    className="min-h-screen flex items-center justify-center bg-[#444C5C] p-10">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
            <img src="../src/assets/lostitems.png" alt="undraw-Add-user-re-ipe3" className="mx-auto" />
            <img src="../src/assets/reportlosticonnobg.png"></img>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto my-10 md:w-1/2 md:mr-8 bg-white rounded-lg shadow-lg px-8 py-16">
            <div className="mb-4 -mt-8 items-center">
            <img src="../src/assets/topperdark.png" alt="Your Image" className="mx-auto h-8 w-100% mb-12" />
              <label htmlFor="item_name" className="block font-semibold mb-1">
                Item Name
              </label>
              <input
                type="text"
                id="item_name"
                value={item_name}
                onChange={handleItemNameChange}
                className="w-full px-4 py-2 rounded border"
              />
            </div>
  
             <div className="mb-4">
          <label htmlFor="description" className="block font-semibold mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
            className="w-full px-4 py-2 rounded border"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="locationFound" className="block font-semibold mb-1">
            Location Lost
          </label>
          <select
            id="location_found"
            name="location_found"
            onChange={handleLocationFoundChange}
            className="w-full px-4 py-2 rounded border"
          >
            <option value="">Select Location</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="dateFound" className="block font-semibold mb-1">
            Date Lost
          </label>
          <input
            type="date"
            id="date_found"
            name="date_found"
            value={date_found}
            onChange={handleDateFoundChange}
            className="w-full px-4 py-2 rounded border"
            max={currentDate}
          />
        </div>
            
            <div className="flex justify-between pt-8">
              <button 
              onClick={handleBack}
              type="button" 
              className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500">
                Back
              </button>
              <button 
              type="submit" 
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Submit
              </button>
            </div>
          </form>
          
        </div>
        {isSubmitted && (
          <p className="text-green-500 mt-4">Form submitted successfully!</p>
        )}
      </div>
    </div>

{/* Footer Section */}
<div>
    <Footer />
  </div>

    </div>
  );
  
  
}

export default InsertLost;
