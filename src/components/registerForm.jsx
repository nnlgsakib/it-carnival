import { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const RegisterForm = () => {


  const [orderData, setOrderData] = useState({
    name: "",
    phone: "",
    email: "",
    trxId: "",

  });
  console.log(orderData, 'oeder');

  const addOrder = () => {

    const isAnyValueEmpty = Object.values(orderData).some(value => value === "");
    if (isAnyValueEmpty) {
      return Swal.fire({
        icon: "error",
        title: "All fild are required",
        text: ` All fild ar required`,
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
            title: "Success",
            text: `${responseData?.message}`,
          });
        }
        Swal.fire({
          icon: "success",
          title: "Success",
          text: `${responseData?.message}`,
        });

      })

      .catch((error) => {
        // Handle errors
        console.error('Error fetching data:', error);
      });
  };



  return (
    <div id="registerSection" >
      <div>

        <h2 className="text-2xl font-semibold">Register</h2>
        <div className="w-8 h-1 mt-1 bg-gradient-to-r from-cyan-400  to-[#893eba] bg-white rounded-sm"></div>
      </div>

      <div className="w-fit mx-auto">
        <div className="py-5 ">
          <div className=" flex gap-1 pb-1 place-items-center">
            <IoMdCheckmarkCircleOutline className="text-emerald-500 text-xl" />
            <p className="text-gray-300  font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, beatae.</p>
          </div>
          <div className=" flex gap-1 pb-1 place-items-center">
            <IoMdCheckmarkCircleOutline className="text-emerald-500 text-xl" />
            <p className="text-gray-300  font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, beatae.</p>
          </div>
          <div className=" flex gap-1 pb-1 place-items-center">
            <IoMdCheckmarkCircleOutline className="text-emerald-500 text-xl" />
            <p className="text-gray-300  font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, beatae.</p>
          </div>
          <div className=" flex gap-1 pb-1 place-items-center">
            <IoMdCheckmarkCircleOutline className="text-emerald-500 text-xl" />
            <p className="text-gray-300  font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, beatae.</p>
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
              <button
                onClick={() => addOrder()}
                className=" border-[2px] border-[#19c3fc] px-7 hover:bg-gradient-to-l from-[#19c3fc] to-slate-800 py-2 rounded-md mt-5 text-center font-medium ">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;