import logo1 from '../../assets/logo.png';
import logo2 from '../../assets/sponsor/alokito.png';
import logo3 from '../../assets/sponsor/fiveDaily.png';
import logo4 from '../../assets/sponsor/freeask.png';
import logo5 from '../../assets/sponsor/jadu.png';
import logo6 from '../../assets/sponsor/kids.png';
import logo7 from '../../assets/sponsor/pearleen.png';
import logo8 from '../../assets/sponsor/zealCaffe.png';


const Support = () => {
  const logos = [
    {
      id: '1',
      img: logo1
    },
    {
      id: '2',
      img: logo2
    },
    {
      id: '3',
      img: logo3
    },
    {
      id: '4',
      img: logo4
    },
    {
      id: '5',
      img: logo5
    },
    {
      id: '6',
      img: logo6
    },
    {
      id: '7',
      img: logo7
    },
    {
      id: '8',
      img: logo8
    },
  ];
  return (
    <div className='py-6'>
      <p className='text-[#45cefb] font-medium'>SPONSORS & PARTNERS</p>

      <div className='grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5'>
        {
          logos.map((data, i) => {
            return (
              <div key={i}>
                <div className='border-[1px] cursor-pointer border-[#19c3fc]    transation  duration-500  ease-in-out hover:scale-[1.07] shadowcolor w-fit p-3 rounded-md'>
                  <img className='w-[280px] md:w-[230px] h-[80px] md:h-[70px] px-3' src={data?.img} alt="sponsor" />
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Support;