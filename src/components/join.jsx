import img from '../assets/images/pic-01.jpg';

const Join = () => {
  return (
    <div>

      <h2 className=' bg-gradient-to-r from-[#7BEFFF] to-[#07C926] inline-block  bg-clip-text text-transparent text-2xl font-semibold' >why you</h2>

      <div className="body">
        <div className="box">
          <div className='content'>

            <img className='' src={img} alt="" />
            <div className='flex flex-col'>

              <h2>Lorem, ipsum dolor.</h2>
              <p className='w-[100px] cursor-pointer text-center mx-auto'>Connect</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Join;
// absolute top-0 left-0 w-full h-full object-cover p-[7px] z-30 rounded-full