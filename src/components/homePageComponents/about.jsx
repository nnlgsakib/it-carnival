import img from '../../assets/about.png';


const About = () => {
  return (
    <div className="mt-6">
      <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="mx-auto ">
          <img className='w-[550px] h-[300px]' src={img} alt="" />
          {/* <p className="text-[400px]  bg-gradient-to-r from-blue-600 via-green-500 to-indigo-100 inline-block font-extrabold text-transparent bg-clip-text"> C</p> */}
        </div>
        {/*  */}
        <div className=' '>
          <div>
            <h2 className="text-2xl pb-2 lg:pb-4 lg:text-4xl  text-white font-semibold    text-transparent bg-clip-text">ABOUT</h2>
            <div className="w-10 h-1 bg-gradient-to-r from-cyan-400  to-[#19d449] bg-white rounded-sm"></div>
          </div>
          <div className=" mt-5 text-gray-300 text-lg">
            <p className="mt-4 "><strong className="text-cyan-400"> Hill Tracts IT Carnival 2024</strong> is a pioneering event aimed at fostering innovation, collaboration, and empowerment within the IT community of the Chittagong Hill Tracts region. This landmark gathering serves as a platform for IT entrepreneurs, freelancers, and online professionals to come together, share knowledge, and explore opportunities for growth and development.</p>
            <p className="mt-4 ">Our mission is to catalyze the growth and advancement of the IT ecosystem in the Chittagong Hill Tracts region by providing a dynamic platform for networking, learning, and collaboration. Our vision is to establish the Hill Tracts IT Carnival as the premier event for showcasing innovation, driving entrepreneurship, and empowering individuals to harness the transformative power of technology for positive change.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;