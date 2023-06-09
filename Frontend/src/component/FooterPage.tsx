const Footer = () => {
    const MemberO15 = [
      { name: "Bintang Marsyuma Rakhasunu", nickname: "Bintang", github: "marsyuma" },
      { name: "Fayza Nirwasita", nickname: "Fay", github: "fn95" },
      { name: "Azzah Angeli", nickname: "Azzah", github: "azzahangely" },
    ];
  
    return (
      <footer className="w-screen">
        {/* THIS IS THE BACK TO THE TOP FOOTER */}
        <div className="mt-0 md:col-span-2 bg-[#525968] pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
            <div className="mb-4 md:mb-0">
              <div className="max-w-full">
                <img src="../src/assets/webbyo15.png" alt="WebBy" className="ml-4 md:ml-8 mt-[30px] md:mt-2 mr-6 md:mr-0 w-auto h-auto sm:max-w-xs md:max-w-full" />
              </div>
              <div className="flex flex-col md:ml-10 md:mt-6 sm:mt-4 sm:ml-7">
                <ul className="flex flex-wrap gap-4">
                  {MemberO15.map((member, index) => (
                    <li key={index}>
                      <a
                        href={`https://www.github.com/${member.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-gray-500 text-lg md:text-2xl font-semibold"
                      >
                        {member.nickname}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <a href="#top-section">
                <div className="max-w-full">
                  <img src="../src/assets/arrowup.png" alt="Image B" className="mt-4 md:mt-10 md:mr-16 w-auto h-auto sm:max-w-xs md:max-w-full" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
    
    
    
    
    
  };
  
  export default Footer;
  