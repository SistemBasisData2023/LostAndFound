import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate();

  const handleUserListFound = () => {
    navigate('/user/listfound');
  };

  const handleUserListLost = () => {
    navigate('/user/listlost');
  };

  const MemberO15 = [
    { name: "Bintang Marsyuma Rakhasunu", nickname: "Bintang", github: "marsyuma" },
    { name: "Fayza Nirwasita", nickname: "Fay", github: "fn95" },
    { name: "Azzah Angeli", nickname: "Azzah", github: "azzahangely" },
  ];


  return (
    <div className="flex bg-[#F9F3E6] min-h-screen">
      <div id="top-section" className="grid grid-cols-1 md:grid-cols-2 flex-grow mt-4 md:-ml-[90px]">
        <div className="flex flex-col justify-center items-center">
          <img src="../src/assets/homepageLeft.png" alt="Image 1" className="ml-[20px] w-[520px]" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src="../src/assets/title.png" alt="Image 2" className="-mt-[40px] -ml-[100px] w-[580px] h-[200px]" />
          <p className="text-gray-500 italic -ml-[120px] align-middle mt-12 pl-4 pr-4 font-serif max-w-[600px]">
            "Lost and Found is your go-to platform for reporting lost or found items within the University of Indonesia campus.
            We understand how frustrating it can be to misplace something valuable
            or come across a lost item without knowing how to help.
            That motivates us to create a centralized hub where you can easily report your checkpoints and access vital information."
          </p>
        </div>

        {/* THIS IS THE LOST ITEM FORM PAGE */}
        <div className="mt-12 md:col-span-2 bg-[#444C5C] min-h-screen">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center w-[420px] h-[450px] md:w-[460px] bg-[#3E4A58] rounded-xl mt-[60px] md:-ml-[600px] shadow-md shadow-gray-900 border-[#CF9D95] border-[1px]">
              <div className="flex flex-col items-center gap-7">
                <img src="../src/assets/topper.png" alt="Image 3" className="w-1/2" />
                <input type="text" placeholder="Item Lost" className="mt-6 px-4 py-3 border border-gray-300 rounded-full w-full bg-[#F9F3E6] hover:bg-gray-400" />
                <input type="password" placeholder="Place" className="mt-6 mb-4 px-4 py-3 border border-gray-300 rounded-full w-full bg-[#F9F3E6] hover:bg-gray-400" />
                <div>
                  <button className="flex bg-[#CF9D95] p-4 w-[300px] rounded-full items-center justify-center border border-black hover:bg-[#E2C4B9] font-serif">
                    I lost an Item
                  </button>
                </div>
              </div>
            </div>
            <img src="../src/assets/itemLosttitle.png" alt="reportLostItem" className="ml-[600px] w-[600px] -mt-[300px]" />
            <p className="text-[#DDBBA7] italic ml-[572px] align-middle mt-12 pl-4 pr-4 font-serif max-w-[600px]">
              Welcome to our Lost Item Page,
              where you can find information and assistance regarding lost items.
              We understand how distressing it can be to lose something valuable or sentimental,
              and our page is here to help you navigate the process of recovering your lost item.
            </p>
            <button onClick={handleUserListLost}
            className="px-2 py-2 bg-[#F9F3E6] hover:bg-gray-400 text-gray-900 rounded-full mt-12 -mr-[300px] w-[300px] h-[50px]"> 
            SEE FOR ITEM LOST LIST
            </button>
          </div>
        </div>

        {/* THIS IS THE FOUND ITEM FORM PAGE */}
        <div className="mt-12 md:col-span-2 bg-[#F9F3E6] min-h-screen">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center w-[420px] h-[450px] md:w-[460px] bg-[#DDBBA7] rounded-xl mt-[60px] md:-ml-[600px] shadow-md shadow-gray-900 border-[#444C5C] border-[1px]">
              <div className="flex flex-col items-center gap-7">
                <img src="../src/assets/topper.png" alt="Image 3" className="w-1/2" />
                <input type="text" placeholder="Item Lost" className="mt-6 px-4 py-3 border border-gray-300 rounded-full w-full bg-[#F9F3E6] hover:bg-[#AC8873]" />
                <input type="password" placeholder="Place" className="mt-6 mb-4 px-4 py-3 border border-gray-300 rounded-full w-full bg-[#F9F3E6] hover:bg-[#AC8873]" />
                <div>
                  <button className="flex bg-[#444C5C] p-4 w-[300px] rounded-full items-center justify-center text-white border border-black hover:bg-[#E2C4B9] font-serif">
                    I Found an Item
                  </button>
                </div>
              </div>
            </div>
            <img src="../src/assets/itemFoundtitle.png" alt="reportLostItem" className="ml-[600px] w-[600px] -mt-[300px]" />
            <p className="text-gray-700 italic ml-[572px] align-middle mt-12 pl-4 pr-4 font-serif max-w-[600px]">
              Welcome to our Found Item Page,
              where you can provide information about items you have found and help reunite them with their owners.
              We appreciate your honesty and willingness to assist in the recovery process.
            </p>
            <button onClick={handleUserListFound}
            className="px-2 py-2 bg-[#525968] hover:bg-gray-400 text-white rounded-full mt-12 -mr-[300px] w-[300px] h-[50px]"> 
            SEE FOR ITEM FOUND LIST
            </button>
          </div>
        </div>

        {/* THIS IS THE GO TO MY PROFILE PAGE */}
        <div className="mt-12 md:col-span-2 bg-[#C2D4D8] h-[500px]">
          <div>
            <img src="../src/assets/gotomyprofile.png" alt="GoToMyProfile" className="w-[500px] ml-[250px] mt-[180px] mr-6" />
            <button className="flex bg-[#F9F3E6] p-4 w-[300px] rounded-full items-center justify-center text-gray-600  hover:bg-[#E2C4B9] font-serif ml-[340px] mt-[80px] shadow-md shadow-gray-500">
              CLICK HERE
            </button>
            <img src="../src/assets/biggericonuser.png" alt="UserIcon" className="ml-[900px] -mt-[280px]" />
          </div>
        </div>

       {/* THIS IS THE BACK TO THE TOP FOOTER */}
       <div className="mt-0 md:col-span-2 bg-[#525968] h-[220px]">
       <div className="flex justify-between items-center px-4 md:px-8">
      <div>
              <img src="../src/assets/webbyo15.png" alt="WebBy" className="ml-[160px] mt-[50px] mr-6" />
            </div>
            <div>
              <a href="#top-section">
                <img src="../src/assets/arrowup.png" alt="Image B" className="mt-[26px] mr-[250px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
