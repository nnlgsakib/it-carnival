import { useState } from "react";

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
      alert("There is at least one empty value in orderData");
      return;
    }

    fetch("http://localhost:5000/api/v1/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if needed
      },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((responseData) => {
        // Handle the response data as needed
        console.log(responseData?.data);
        alert("Successfuly order complete");
      })

      .catch((error) => {
        // Handle errors
        console.error('Error fetching data:', error);
      });
  };



  return (
    <div id="_register">
      <div>
        <h2 className="text-2xl font-semibold py-5">Register</h2>
      </div>

      <div>


        <div className="flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              onChange={(e) => setOrderData(prevData => ({ ...prevData, name: e?.target?.value }))}

              className="formInput" type="text" placeholder="Your Name" />
            <input
              onChange={(e) => setOrderData(prevData => ({ ...prevData, phone: e?.target?.value }))}

              className="formInput" type="text" placeholder="Your Phone" />
          </div>

          <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              onChange={(e) => setOrderData(prevData => ({ ...prevData, email: e?.target?.value }))}
              className="formInput" type="text" placeholder="Email" />
            <input
              onChange={(e) => setOrderData(prevData => ({ ...prevData, trxId: e?.target?.value }))}

              className="formInput" type="text" placeholder="Transaction" />
          </div>
          <div className="text-center">
            <button onClick={() => addOrder()} className="border-[2px] border-gray-100 px-5 py-1 rounded-md mt-5 text-center ">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;