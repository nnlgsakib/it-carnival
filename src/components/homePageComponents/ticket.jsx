import html2canvas from 'html2canvas';
import { useRef } from 'react';
import image from '../../assets/about.png';

const Ticket = () => {
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

      <div ref={containerRef} className='hidden'>
        {/* Include the HTML content of the webpage you want to capture */}
        <div className='relative'>
          <img className='w-52' src={image} alt='' />

          <h1 className='absolute top-10 mx-1'>Your Web Page Content </h1>
          <p>This is a sample web page content.</p>
          <div className='bg-gray-500 w-[500px] py-5 my-5 text-white font-semibold'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            excepturi impedit ab eligendi atque maxime porro sequi est quis
            natus. Aliquam temporibus numquam, cumque enim alias officia ipsam
            nihil consectetur distinctio aperiam, velit consequuntur vel at
            accusantium nisi fugiat tempore!
          </div>
        </div>
      </div>
      <button onClick={captureWebPage}>Download as JPG</button>

    </div>
  );
};

export default Ticket;