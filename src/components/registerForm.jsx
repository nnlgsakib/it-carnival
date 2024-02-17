import { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Swal from 'sweetalert2';
import ClipboardJS from 'clipboard';
import { useEffect, useRef } from 'react';
import { FaRegCopy } from 'react-icons/fa';
import Modal from "./modal";

const RegisterForm = () => {
  const copyButtonRef = useRef();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const [orderData, setOrderData] = useState({
    name: "",
    phone: "",
    email: "",
    trxId: "",
  });

  const handelSubmit = () => {

    const isAnyValueEmpty = Object.values(orderData).some(value => value === "");
    if (isAnyValueEmpty) {
      return Swal.fire({
        icon: "error",
        title: "All fild are required",
        text: ` All fild ar required`,
      }).then(() => {
        openModal();
      });
    }

    fetch("https://firstaidbox-server.vercel.app/api/v1/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if needed
      },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((responseData) => {
        console.log(responseData);
        if (responseData.statusCode === 404) {
          return Swal.fire({
            icon: "error",
            title: "Faield",
            text: `${responseData?.message}`,
          });
        }
        Swal.fire({
          icon: "success",
          title: "Success",
          text: `${responseData?.message}`,
        }).then(() => {
          openModal();
        });
      })

      .catch((error) => {
        // Handle errors

        console.error('Error fetching data:', error);
      });
  };


  const textToCopy = "01816575225";


  useEffect(() => {
    const clipboard = new ClipboardJS(copyButtonRef.current, {
      text: () => textToCopy,
    });

    clipboard.on('success', (e) => {
      alert('Text copied to clipboard:', e.text);
      e.clearSelection();
    });

    clipboard.on('error', (e) => {
      console.error('Failed to copy text to clipboard:', e.action);
    });

    return () => {
      clipboard.destroy();
    };
  }, [textToCopy]);



  return (
    <div id="registerSection" >
      <div className=""></div>
      <div className="lg:w-[65%] mx-auto">
        <h2 className="text-2xl font-semibold">Register</h2>
        <div className="w-10 h-1 mt-1 bg-gradient-to-r from-[#19c3fc]  to-[#19d449] bg-white rounded-sm"></div>
      </div>

      <div className="w-fit mx-auto">
        <div className="py-5 ">
          <div className=" flex gap-1 pb-1">
            <div className="">
              <IoMdCheckmarkCircleOutline className="text-green-400 pt-1  text-xl" />
            </div>
            <p className="text-gray-300  font-semibold">300 TK must be sent to confirm registration.</p>
          </div>

          <div className=" flex gap-1">
            <div className="">
              <IoMdCheckmarkCircleOutline className="text-green-400 pt-1  text-xl" />
            </div>
            <p className="text-gray-300 font-semibold">Money can be sent through Bkash or Nagad (only send money is available)</p>
          </div>

          <div className=" flex gap-1 pb">
            <div className="">
              <IoMdCheckmarkCircleOutline className="text-green-400 pt-1  text-xl" />
            </div>
            <div className="">
              <div className="text-gray-300 font-semibold ">
                <p>Send money to this No. <span ref={copyButtonRef} className="text-cyan-400">01816575225 <FaRegCopy className="inline-block cursor-pointer text-white mb-1" /></span> (only send money is available) </p>
                {/* <p className="text-cyan-400 h-fit inline-block cursor-pointer"> </p>
                <p className="h-fit"> </p>
                <p> (only send money is available) </p> */}
              </div>
            </div>
          </div>

          <div className=" flex gap-1 pb-1">
            <div className="">
              <IoMdCheckmarkCircleOutline className="text-green-400 pt-1  text-xl" />
            </div>
            <p className="text-gray-300  font-semibold">Fill up all details with the payment transaction ID and submit.</p>
          </div>
        </div>




        <div>
          <div className="flex flex-col justify-center items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <p className="text-xs pb-[3px] text-gray-300 font-medium">Name <span className="text-red-600">*</span>  </p>
                <input
                  onChange={(e) => setOrderData(prevData => ({ ...prevData, name: e?.target?.value }))}
                  className="formInput" type="text" placeholder="Your Name" />
              </div>

              <div className="">
                <p className="text-xs pb-[3px] text-gray-300 font-medium">Phone <span className="text-red-600">*</span>  </p>

                <input
                  onChange={(e) => setOrderData(prevData => ({ ...prevData, phone: e?.target?.value }))}
                  className="formInput" type="text" placeholder="Your Phone" />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <p className="text-xs pb-[3px] text-gray-300 font-medium">Email <span className="text-red-600">*</span>  </p>
                <input
                  onChange={(e) => setOrderData(prevData => ({ ...prevData, email: e?.target?.value }))}
                  className="formInput" type="email" placeholder="Email" />
              </div>

              <div>
                <p className="text-xs pb-[3px] text-gray-300 font-medium">Payment transaction id <span className="text-red-600">*</span>  </p>
                <input
                  onChange={(e) => setOrderData(prevData => ({ ...prevData, trxId: e?.target?.value }))}
                  className="formInput" type="text" placeholder="Transaction id" />
              </div>
            </div>
            <div className="text-center mt-8">

              <button onClick={() => handelSubmit()} className="bg-gradient-to-r from-[#19c3fc] to-[#19d349] text-white text-xl mt-4 lg:mt-8  px-10   py-3 rounded-md  hover:scale-[1.03] duration-200    font-medium lg:text-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
};

export default RegisterForm;

{/* <CopyToClipboardButton className='' textToCopy={textToCopy} /> */ }
