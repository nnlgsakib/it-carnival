import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const Registration = () => {
  const [registration, setRegistration] = useState([]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  useEffect(() => {
    fetch(
      "https://firstaidbox-server.vercel.app/api/v1/payment"
    )
      .then((res) => res.json())
      .then((data) => setRegistration(data.data));
  }, []);
  console.log(registration);
  return (
    <>
      <div className=" py-5 pb-10 w-full relative">
        <h2 className="text-3xl text-center py-5 font-semibold">
          Registration
        </h2>
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
                      Name
                    </th>
                    <th className="px-6 py-3  text-left text-xs leading-4 font-medium  uppercase tracking-wider">
                      Phone
                    </th>
                    <th className="px-6 py-3  text-left text-xs leading-4 font-medium  uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3  text-left text-xs leading-4 font-medium  uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3  text-left text-xs leading-4 font-medium  uppercase tracking-wider">
                      quantity
                    </th>
                    <th className="px-6 py-3  text-left text-xs leading-4 font-medium  uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3  text-left text-xs leading-4 font-medium  uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className=" divide-y divide-[#BDBDBD]">
                  {/* <!-- Table rows go here --> */}
                  {registration?.data?.map((data) => {
                    return (
                      <tr className=" " key={data._id}>
                        {/* {console.log(order, "oooo")} */}
                        <td className="pr-6 py-4 whitespace-no-wrap">
                          <div className="ml-4">
                            <div className="text-sm leading-5 font-medium text-[#FFFFFF]">
                              {data?.name}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                          <div className="text-sm leading-5 text-[#FFFFFF]">
                            {data?.phone}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ">
                            {data?.email}
                          </span>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ">
                            {data?.price}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ">
                            {data?.quantity}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ">
                            {!data?.status ? "Pending" : "Success"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap flex items-center gap-3">
                        <MdDelete className="text-red-500 hover:text-red-800 text-[28px] cursor-pointer"/>
                        <FaRegEdit  className="text-[#FFFFFF] hover:text-slate-500 text-[24px] cursor-pointer"/>
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

export default Registration;
