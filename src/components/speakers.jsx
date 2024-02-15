import speakers5 from '../assets/images/pic-01.jpg';
import speakers2 from '../assets/images/pic-02.jpg';
import speakers1 from '../assets/images/pic-03.jpg';
import speakers3 from '../assets/images/pic-04.jpg';


const Speakers = () => {
  return (
    <div className=" mt-5 lg:mt-8 ">
      <div className='my-5'>
        <h2 className="text-2xl pb-2 lg:pb-4 lg:text-4xl  text-white font-semibold  ">Speakers</h2>
        <h2 className='font-medium'>Join us at  <span className="text-gradient-to-r from-[#071448] to-[#1f068c]">HillTracts it cernival</span> to learn from the best and brightest minds in programming,</h2>

      </div>


      <div className='mx-auto grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-5 lg:gap-8'>
        <div className='w-[250px] text-center'>
          <div className='  speakersIamgeContainer borderColor'>
            <img className='speakersIamge' src={speakers5} alt="" />
          </div>
          <div className=''>
            <h2 className='text-[#19c3fc] cursor-pointer text-3xl font-bold py-2 '>Rabbil hasan</h2>
            <p className='text-[#d8d8d8] font-medium'>Founder & Educator, Learn with Rabbil Hasan</p>
          </div>
        </div>
        <div className='w-[250px] text-center'>
          <div className='speakersIamgeContainer borderColor'>
            <img className='speakersIamge' src={speakers2} alt="" />
          </div>
          <div className=''>
            <h2 className='text-[#19c3fc] cursor-pointer text-3xl font-bold py-2 '>Rabbil hasan</h2>
            <p className='text-[#d8d8d8] font-medium'>Founder & Educator, Learn with Rabbil Hasan</p>
          </div>
        </div>
        <div className='w-[250px] text-center'>
          <div className='speakersIamgeContainer borderColor'>
            <img className='rounded-full w-full h-full hover:scale-105 duration-300' src={speakers3} alt="" />
          </div>
          <div className=''>
            <h2 className='text-[#19c3fc] cursor-pointer text-3xl font-bold py-2 '>Rabbil hasan</h2>
            <p className='text-[#d8d8d8] font-medium'>Founder & Educator, Learn with Rabbil Hasan</p>
          </div>
        </div>

        <div className='w-[250px] text-center'>
          <div className='speakersIamgeContainer borderColor'>
            <img className='rounded-full hover:scale-105 duration-300' src={speakers1} alt="" />
          </div>
          <div className=''>
            <h2 className='text-[#19c3fc] cursor-pointer text-3xl font-bold py-2 '>Rabbil hasan</h2>
            <p className='text-[#d8d8d8] font-medium'>Founder & Educator, Learn with Rabbil Hasan</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Speakers;
