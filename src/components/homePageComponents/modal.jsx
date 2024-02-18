import html2canvas from 'html2canvas';
import { useRef } from 'react';
// import image from '../../assets/about.png';
import image from '../../assets/registrationTiket.jpg';

import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose }) => {
  const containerRef = useRef(null);

  const captureWebPage = async () => {
    try {
      const canvas = await html2canvas(containerRef.current);
      const image = canvas.toDataURL("image/jpg");

      // Create a link element to trigger the download
      const link = document.createElement("a");
      link.href = image;
      link.download = "titket.jpg";
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
                  className='text-end cursor-pointer p-3 mb-2 bg-gray-900 w-10 h-10 ms-auto flex  justify-center place-items-center rounded-full'
                >
                  X
                </div>
                <div className='max-w-screen  w-[400px]     font-semibold     '>

                  <div>
                    <div className=''>

                      <div ref={containerRef} >
                        {/* Include the HTML content of the webpage you want to capture */}
                        <div className='relative w-[400px] '>
                          <img className='w-[500px]' src={image} alt='' />
                          <div className='absolute left-[138px] bottom-44 text-[#8c40bf]'>
                            <h1 className='text-end text-[#3a0f57]'>C-00001</h1>
                            <p>Md. Asaduzzaman Asad</p>
                            <h1 className=''>Asaduzzaman1156@gmail.com</h1>
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-end mt-4'>
                        <button onClick={captureWebPage} className="bg-gradient-to-r from-[#19c3fc] to-[#19d349] text-white mt-5 lg:mt-8  px-8 py-2 rounded-md hover:scale-[1.03] duration-200 font-medium">
                          Download
                        </button>
                        <button className='' onClick={captureWebPage}></button>
                      </div>
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