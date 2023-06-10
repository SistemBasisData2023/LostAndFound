import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../component/FooterPage';


function Homepage() {
  const navigate = useNavigate();

  /*========= GET 5 LATEST DATA =========//

  useEffect(() => {
    const fetchLatestData = async () => {
      try {
        // Make an API request to fetch the latest data
        const response = await axios.get('http://localhost:9000/user/listlost');

        // Extract the latest 5 items from the response data
        const latestItems = response.data.slice(0, 5);

        // Set the latest data in the component state
        setLatestData(latestItems);
      } catch (error) {
        // Handle error if the API request fails
        console.error('Error fetching latest data:', error);
      }
    };

    // Call the fetchLatestData function
    fetchLatestData();
  }, []);
  */


  //========= HANDLING CONST =========//
  const handleUserListFound = () => {
    navigate('/user/listfound');
  };

  const handleUserListLost = () => {
    navigate('/user/listlost');
  };

  const handleUserInsertLost = () => {
    navigate('/user/insertlost');
  };

  const handleUserInsertFound = () => {

    navigate('/user/insertfound');
  };

  //========= FOOTER CONST =========//

  const MemberO15 = [
    { name: "Bintang Marsyuma Rakhasunu", nickname: "Bintang", github: "marsyuma" },
    { name: "Fayza Nirwasita", nickname: "Fay", github: "fn95" },
    { name: "Azzah Angeli", nickname: "Azzah", github: "azzahangely" },
  ];


  return (
    <div className="flex flex-col bg-[#F9F3E6] min-h-screen">
    <div id="top-section" className="grid grid-cols-1 md:grid-cols-2 flex-grow mt-4 md:-ml-[90px]">
      <div className="flex flex-col justify-center items-center">
        <img src="../src/assets/homepageLeft.png" alt="Image 1" className="ml-[20px] w-full max-w-[520px]" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src="../src/assets/title.png" alt="Image 2" className="mt-[40px] w-full max-w-[580px] h-[200px]" />
        <p className="text-gray-500 italic ml-[10px] mt-12 pl-4 pr-4 font-serif max-w-[600px]">
          "Lost and Found is your go-to platform for reporting lost or found items within the University of Indonesia campus.
          We understand how frustrating it can be to misplace something valuable
          or come across a lost item without knowing how to help.
          That motivates us to create a centralized hub where you can easily report your checkpoints and access vital information."
        </p>
      </div>
    </div>

    {/* User Activity Section */}
<div className="mt-12 md:col-span-2 bg-[#444C5C]">
  <p className="text-white font-bold text-4xl text-center mt-16 mb-10 font-serif">User Activity</p>
  <div className="flex justify-center items-center">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 pb-36 px-36"> 

      {/* Insert Lost Item */}
      <div className="flex flex-col justify-center items-center bg-white rounded-xl shadow-md cursor-pointer square-container hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
        <img src="../src/assets/ostroke.png" alt="Insert Lost Item" className="w-full h-full object-cover" />
        <p className="text-gray-700 font-semibold mt-4">Insert Lost Item</p>
        <button
          onClick={() => {
            // Handle redirect to '/user/insertlost'
            navigate('/user/insertlost');
          }}
          className="bg-gray-300 text-gray-800 font-bold py-2 px-8 rounded-t-full mt-4 transition-all duration-300 hover:bg-gray-400"
        >
          Go
        </button>
      </div>

      {/* Insert Found Item */}
      <div className="flex flex-col justify-center items-center bg-white rounded-xl shadow-md cursor-pointer square-container hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
        <img src="../src/assets/insertFoundItem.png" alt="Insert Found Item" className="w-full h-full object-cover" />
        <p className="text-gray-700 font-semibold mt-4">Insert Found Item</p>
        <button
          onClick={() => {
            // Handle redirect to '/user/found'
            navigate('/user/insertfound');
          }}
          className="bg-gray-300 text-gray-800 font-bold py-2 px-8 rounded-t-full mt-4 transition-all duration-300 hover:bg-gray-400"
        >
          Go
        </button>
      </div>

      {/* See Lost Items */}
      <div className="flex flex-col justify-center items-center bg-white rounded-xl shadow-md cursor-pointer square-container hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
        <img src="../src/assets/seeLostItems.png" alt="See Lost Items" className="w-full h-full object-cover" />
        <p className="text-gray-700 font-semibold mt-4">See Lost Items</p>
        <button
          onClick={() => {
            // Handle redirect to '/user/listlost'
            navigate('/user/listlost');
          }}
          className="bg-gray-300 text-gray-800 font-bold py-2 px-8 rounded-t-full mt-4 transition-all duration-300 hover:bg-gray-400"
        >
          Go
        </button>
      </div>

      {/* See Found Items */}
      <div className="flex flex-col justify-center items-center bg-white rounded-xl shadow-md cursor-pointer square-container hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
        <img src="../src/assets/seeFoundItems.png" alt="See Found Items" className="w-full h-full object-cover" />
        <p className="text-gray-700 font-semibold mt-4">See Found Items</p>
        <button
          onClick={() => {
            // Handle redirect to '/user/listfound'
            navigate('/user/listfound');
          }}
          className="bg-gray-300 text-gray-800 font-bold py-2 px-8 rounded-t-full mt-4 transition-all duration-300 hover:bg-gray-400"
        >
          Go
        </button>
      </div>
    </div>
  </div>
</div>




    
{/* Go to My Profile Page */}
<div className="md:col-span-2 bg-[#C2D4D8] flex flex-col items-center sm:flex-row sm:justify-between" style={{ minHeight: '65vh' }}>
  <div className="flex flex-col items-center">
    <img src="../src/assets/gotomyprofile.png" alt="GoToMyProfile" className="w-[90%] max-w-[1200px] sm:w-[80%] md:w-[70%] lg:w-[60%] h-auto sm:h-[70%] md:h-[80%] lg:h-[90%] mt-6 sm:mt-0" />
    <button className="flex bg-[#F9F3E6] p-4 w-[80%] sm:w-[60%] md:w-[40%] lg:w-[40%] rounded-full items-center justify-center text-gray-600 hover:bg-[#E2C4B9] font-serif mt-8 sm:mt-12 shadow-md shadow-gray-500">
      CLICK HERE
    </button>
  </div>
  <img src="../src/assets/biggericonuser.png" alt="UserIcon" className="w-[80%] max-w-[300px] sm:w-[60%] md:w-[40%] lg:w-[30%] h-auto sm:h-[70%] md:h-[80%] lg:h-[90%] mt-8 sm:mt-4 mx-32" />
</div>














  {/* Footer Section */}
  <div>
    <Footer />
  </div>

  </div>
);

}

export default Homepage;
