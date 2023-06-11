
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useNavigate } from 'react-router-dom';


const developers = [
    {
      name: 'Azzah Angeli',
      role: 'Front-end Developer',
      image: '../src/assets/az.jpg',
    },
    {
      name: 'Bintang Maryuma',
      role: 'Back-end Developer',
      image: '../src/assets/bintang.jpg',
    },
    {
      name: 'Fayza Nirwasita',
      role: 'UI/UX Designer',
      image: '../src/assets/fay.jpg',
    },
  ];

const tools = [
  {
    name: 'React.js',
    icon: '../src/assets/react.png',
  },
  {
    name: 'VITE',
    icon: '../src/assets/vite.png',
  },
  {
    name: 'Neon',
    icon: '../src/assets/neon.png',
  },
  {
    name: 'Node.js',
    icon: '../src/assets/node.png',
  },
  {
    name: 'Figma',
    icon: '../src/assets/figma.png',
  },
  {
    name: 'Tailwind CSS',
    icon: '../src/assets/tailwind.png',
  },
];

function ExploreMore() {
 
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#F9F3E6]">
          <div className="container max-w-3xl px-8 py-24 bg-[#E8F1F2] my-8 rounded-3xl border-blue-900 border-[1px] shadow-xl shadow-gray-400">
            <img src="../src/assets/title.png" alt="background" className="w-[70%] items-center mx-auto"/>
            <h1 className="text-4xl font-bold mb-6 mt-12">About Lost And Found</h1>
            <p className="text-gray-500 mb-6">
              Lost and Found is a web application that aims to help people find their
              lost items. This application is made for the final project of the
              Database System Practicum held by Network Laboratory at Universitas Indonesia.
            </p>
              
            <h2 className="text-2xl font-bold mt-10 mb-4">Laboratory Assistant</h2>
            <div className="bg-white rounded-lg p-6 mx-auto shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row items-center">
              <div className="w-32 h-32 flex items-center justify-center rounded-lg mb-4 md:mb-0 md:mr-4">
                <img
                  src="../src/assets/bangfatin.jpg"
                  alt="Supervisor"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="mt-4 md:mt-0">
                <h3 className="text-lg font-bold mb-2">Fateen Indramustika</h3>
                <p className="text-gray-500">Coordinator Laboratory at Network Laboratory of Universitas Indonesia</p>
              </div>
            </div>
      
            <h2 className="text-2xl font-bold mt-10 mb-4">The Team</h2>
            <div className="flex flex-wrap gap-4">
              {developers.map((developer) => (
                <div
                  key={developer.name}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
                >
                  <div className="w-32 h-32 overflow-hidden rounded-lg mb-4">
                    <img
                      src={developer.image}
                      alt={developer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{developer.name}</h3>
                  <p className="text-gray-500">{developer.role}</p>
                </div>
              ))}
            </div>
      
            <h2 className="text-2xl font-bold mt-10 mb-4">Tools Used</h2>
            <AliceCarousel
              autoPlay
              autoPlayInterval={2000}
              animationDuration={1000}
              infinite
              disableButtonsControls
              disableDotsControls
              items={tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex flex-col items-center justify-center gap-2 hover:bg-gray-100 rounded-lg p-2 transition duration-300"
                >
                  <div className="w-12 h-12 mb-2">
                    <img src={tool.icon} alt={tool.name} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-center font-bold">{tool.name}</p>
                </div>
              ))}
              responsive={{
                0: {
                  items: 1,
                },
                768: {
                  items: 2,
                },
                1024: {
                  items: 3,
                },
              }}
            />
        
            </div>
            <button className="items-center mx-auto rounded-full py-4 px-12 m-24 text-gray-700 bg-gray-300 font-bold  hover:bg-gray-300 hover:text-gray-700" 
            onClick={() => window.history.back()}>Back</button>
    
        </div>
      );
      

      
      
}

export default ExploreMore;