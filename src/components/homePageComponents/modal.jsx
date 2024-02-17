import html2canvas from 'html2canvas';
import { useRef } from 'react';
import image from '../../assets/about.png';

const Modal = ({ isOpen, onClose }) => {
  const containerRef = useRef(null);

  const captureWebPage = async () => {
    try {
      const canvas = await html2canvas(containerRef.current);
      const image = canvas.toDataURL("image/jpeg");

      // Create a link element to trigger the download
      const link = document.createElement("a");
      link.href = image;
      link.download = "webpage.jpg";
      document.body.appendChild(link);

      // Trigger the download
      link.click();

      // Remove the link element
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error capturing web page:", error);
    }
  };
  return (
    <div>
      <>
        {/* Background Overlay */}
        {isOpen && (
          <div className='fixed inset-0 z-50 px-2 flex items-center justify-center bg-black bg-opacity-50'>
            {/* Modal Container */}
            <div className='bg-[#080921] py-6 min-h-[60%] px-5 rounded-lg shadow-md'>
              {/* Modal Content */}
              <div className=''>
                <div
                  onClick={onClose}
                  className='text-end cursor-pointer p-3 bg-gray-300 w-10 h-10 ms-auto flex  justify-center place-items-center rounded-full'
                >
                  X
                </div>
                <div className='max-w-screen  w-[300px] font-semibold  lg:w-[654px]  '>
                  <div>
                    <p className=' text-md mb-[30px] text-center lg:text-2xl'>
                      Select asset to send
                    </p>
                  </div>
                  <div>
                    <div className=''>

                      <div ref={containerRef} >
                        {/* Include the HTML content of the webpage you want to capture */}
                        <div className='relative'>
                          <img className='w-52' src={image} alt='' />

                          <h1 className='absolute top-10 mx-1'>Your Web Page Content </h1>
                          <p>This is a sample web page content.</p>

                        </div>
                      </div>
                      <button onClick={captureWebPage}>Download as JPG</button>

                    </div>
                  </div>
                </div>
                {/* <button
                  onClick={onClose}
                  className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none'
                >
                  Close
                </button> */}
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default Modal;
{
  /* <div className={` ${assets ? "hidden" : "block"} h-screen`}>
        <div className='h-52   top-0  w-40  bg-red-500'>
          <div>
            {" "}
            <div className='bg-white mt-4   mx-3 flex p-1 rounded-full w-fit gap-4'>
              <p
                onClick={() => setShow(1)}
                className={`${
                  show == 1 && "bg-[#FF971D] text-[#fff] "
                } px-3 py-1 rounded-full text-[#FF971D] cursor-pointer `}
              >
                Tokens
              </p>
              <p
                onClick={() => setShow(2)}
                className={`${
                  show == 2 && "bg-[#FF971D] text-[#fff]"
                } px-3 py-1 rounded-full text-[#FF971D] cursor-pointer `}
              >
                NFTs
              </p>
            </div>
          </div>
        </div>
      </div> */
}
