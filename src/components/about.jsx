import img from '../assets/about.png';


const About = () => {
  return (
    <div className="mt-6">
      <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="mx-auto ">
          <img className='w-[550px] h-[300px]' src={img} alt="" />
          {/* <p className="text-[400px]  bg-gradient-to-r from-blue-600 via-green-500 to-indigo-100 inline-block font-extrabold text-transparent bg-clip-text"> C</p> */}
        </div>
        {/*  */}
        <div>
          <div>
            <h2 className="text-2xl pb-2 lg:pb-4 lg:text-4xl  text-white font-semibold    text-transparent bg-clip-text">ABOUT</h2>
            <div className="w-8 h-1 bg-gradient-to-r from-cyan-400  to-[#893eba] bg-white rounded-sm"></div>
          </div>
          <div className=" mt-5 text-gray-300 text-lg">
            <p className="mt-4 "> <strong className="text-cyan-400">HILL TRACTS IT CARNIVAL</strong> is a community conference for developers, admins, DevOps engineers, testers, documentation writers and other contributors to open source technologies.</p>
            <p className="mt-4 ">What’s next? Any topics that are discussed or actively researched yet their impact is still potential. Best practices and great examples of open source research collaborations are welcome. Trending topics from software development, metaverse, new trends in existing areas</p>
            <p className="mt-4 ">Artificial intelligence, large language models, data storing and processing, best practices for data lakes/data mesh, and parallelism and vector computing.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;