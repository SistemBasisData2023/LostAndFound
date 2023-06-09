const Footer = () => {
    const teamMembers = [
      { name: "Bintang Marsyuma Rakhasunu", nickname: "Bintang", github: "marsyuma" },
      { name: "Fayza Nirwasita", nickname: "Fay", github: "fn95" },
      { name: "Azzah Angeli", nickname: "Azzah", github: "azzahangely" },
    ];
  
    return (
      <footer className="bg-[#D1CCC2] py-4 px-6 h-[180px]">
        <div className="container mx-auto flex items-center justify-center space-x-[20px]">
          <img src="../src/assets/title.png" alt="Logo" className="h-[35px] mr-2" />
          <ul className="flex space-x-[20px]">
            {teamMembers.map((member, index) => (
              <li key={index}>
                <a
                  href={`https://www.github.com/${member.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-500"
                >
                  {member.nickname}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  