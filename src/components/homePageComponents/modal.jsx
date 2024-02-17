import html2canvas from 'html2canvas';
import { useRef } from 'react';
import image from '../../assets/about.png';

import PropTypes from 'prop-types';

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
    <div className=''>
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
                  className='text-end cursor-pointer p-3 bg-gray-900 w-10 h-10 ms-auto flex  justify-center place-items-center rounded-full'
                >
                  X
                </div>
                <div className='max-w-screen  w-[300px] font-semibold     '>
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
                          <img className='w-[300px]' src={image} alt='' />
                          <div>

                            <h1 className='absolute top-0 mx-1'>Your Web Page Content </h1>
                            <div className='absolute bottom-12'>
                              <h1 className='absolute bottom-12 mx-1'>NO: C-00001                           <p>01568242812</p>
                              </h1>
                              <h1 className='absolute bottom-7 mx-1'>Asaduzzaman1156@gmail.com</h1>
                            </div>
                          </div>
                          <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</p>
                        </div>
                      </div>
                      <button onClick={captureWebPage} className="bg-gradient-to-r from-[#19c3fc] to-[#19d349] text-white mt-5 lg:mt-8  px-8 py-2 rounded-md  hover:scale-[1.03] duration-200 font-medium text-md">
                        Download
                      </button>
                      <button className='' onClick={captureWebPage}></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal; 