

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const developers = [
  {
    name: 'John Doe',
    role: 'Front-end Developer',
    image: '../src/assets/developer1.png',
  },
  {
    name: 'Jane Smith',
    role: 'Back-end Developer',
    image: '../src/assets/developer2.png',
  },
  {
    name: 'Mike Johnson',
    role: 'UI/UX Designer',
    image: '../src/assets/developer3.png',
  },
];

function ExploreMore() {

return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-[#F9F3E6]">
    <div className="container max-w-3xl px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About Lost And Found</h1>

      <h2 className="text-2xl font-bold mt-10 mb-4">Supervisor</h2>
      <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
        <img
          src="../src/assets/supervisor.png"
          alt="Supervisor"
          className="w-full rounded-lg mb-4"
        />
        <h3 className="text-lg font-bold mb-2">Dr. Jane Doe</h3>
        <p className="text-gray-500">Assistant Laboratory Supervisor</p>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Developers</h2>
      <AliceCarousel
        autoPlay
        autoPlayInterval={3000}
        animationDuration={1000}
        infinite
        items={developers.map((developer) => (
          <div key={developer.name} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src={developer.image}
              alt={developer.name}
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold mb-2">{developer.name}</h3>
            <p className="text-gray-500">{developer.role}</p>
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

      <h2 className="text-2xl font-bold mt-10 mb-4">Tools Used</h2>
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-2 hover:bg-gray-100 rounded-lg p-2 transition duration-300">
          <img src="../src/assets/react-icon.png" alt="React.js" className="w-6 h-6" />
          <p>React.js</p>
        </div>
        <div className="flex items-center gap-2 hover:bg-gray-100 rounded-lg p-2 transition duration-300">
          <img src="../src/assets/node-icon.png" alt="Node.js" className="w-6 h-6" />
          <p>Node.js</p>
        </div>
        <div className="flex items-center gap-2 hover:bg-gray-100 rounded-lg p-2 transition duration-300">
          <img src="../src/assets/mongodb-icon.png" alt="MongoDB" className="w-6 h-6" />
          <p>MongoDB</p>
        </div>
        <div className="flex items-center gap-2 hover:bg-gray-100 rounded-lg p-2 transition duration-300">
          <img src="../src/assets/tailwind-icon.png" alt="Tailwind CSS" className="w-6 h-6" />
          <p>Tailwind CSS</p>
        </div>
      </div>
    </div>
  </div>
);

}

export default ExploreMore;



{/* THIS PAGE IS SOLELY USED FOR TESTING THE CODE SAMBIL NANGIS DIKIT*/}
{/* THIS PAGE IS SOLELY USED FOR TESTING THE CODE SAMBIL NANGIS DIKIT*/}
{/* THIS PAGE IS SOLELY USED FOR TESTING THE CODE SAMBIL NANGIS DIKIT*/}
{/* THIS PAGE IS SOLELY USED FOR TESTING THE CODE SAMBIL NANGIS DIKIT*/}
{/* THIS PAGE IS SOLELY USED FOR TESTING THE CODE SAMBIL NANGIS DIKIT*/}




