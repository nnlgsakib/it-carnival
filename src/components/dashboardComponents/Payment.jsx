import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Payment = () => {
  const [registration, setRegistration] = useState([]);
  useEffect(() => {
    fetch(
      "https://firstaidbox-server.vercel.app/api/v1/payment"
    )
      .then((res) => res.json())
      .then((data) => setRegistration(data.data));
  }, []);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className=" py-5 pb-10 w-full relative">
        <h2 className="text-3xl text-center py-5 font-semibold  ">Payment</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="absolute w-[30%] right-0"
        >
          <div className="relative ">
            <input
              className="w-full px-4 py-2 rounded-lg border outline-blue-300 text-black"
              type="text"
              id="method"
              {...register("method", { required: true })}
              placeholder="Search"
            />
          </div>
        </form>
        <div>
          <div className="flex justify-center align-middle mx-auto mt-20">
            <div className="border-[#0f0d0d] overflow-x-scroll  w-[400px] lg:w-[900px] border-[1px] rounded-md mt-5">
              <table className="  md:w-full lg:w-full  divide divide-[#BDBDBD]">
                <thead className=" border-b-[2px] text-[#FFFFFF] border-[#FFFFFF]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs leading-4 font-medium  uppercase tracking-wider">
                      Method
                    </th>
                    <th className="px-6 py-3  text-left text-xs leading-4 font-medium  uppercase tracking-wider">
                      Payment Numver
                    </th>
                    <th className="px-6 py-3  text-left text-xs leading-4 font-medium  uppercase tracking-wider">
                     Amount
                    </th>
                    <th className="px-6 py-3  text-left text-xs leading-4 font-medium  uppercase tracking-wider">
                      Trx Id
                    </th>
                  </tr>
                </thead>
                <tbody className=" divide-y divide-[#BDBDBD]">
                  {/* <!-- Table rows go here --> */}
                  {registration?.data?.map((pamentItem) => {
                    return (
                      <tr className=" " key={pamentItem._id}>
                        {/* {console.log(order, "oooo")} */}
                        <td className="pr-6 py-4 whitespace-no-wrap">
                          <div className="ml-4">
                            <div className="text-sm leading-5 font-medium text-[#FFFFF]">
                              {pamentItem?.method}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                          <div className="text-sm leading-5 text-[#FFFFFF]">
                            {pamentItem?.paymentNumber}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ">
                            {pamentItem?.amount}
                          </span>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ">
                            {pamentItem?.trxId}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                  {/* <!-- More table rows go here --> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
