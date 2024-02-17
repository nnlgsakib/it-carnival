import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className=" py-5 pb-10 w-full">
      <h2 className="text-3xl text-center py-5 font-semibold ">Register</h2>
      <div className="bg-gray-900 rounded-lg w-6/12 mx-auto p-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-5">
            <div>
              <label className="block mb-2 text-[#FFFFFF]" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-4 py-2 rounded-lg border border-red-400 outline-blue-300 text-[#000]"
                type="text"
                id="name"
                {...register("name", { required: true })}
                placeholder="Type your name"
              />
            </div>
            <div>
              <label
                className="block mb-2 text-[#FFFFFF]"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                className="w-full px-4 py-2 rounded-lg border border-red-400 outline-blue-300 text-[#000]"
                type="number"
                id="number"
                {...register("number", { required: true })}
                placeholder="Your phone number"
              />
            </div>
            <div>
              <label className="block mb-2 text-[#FFFFFF]" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-4 py-2 rounded-lg border border-red-400 outline-blue-300 text-[#000]"
                type="email"
                id="email"
                {...register("email", { required: true })}
                placeholder="email"
              />
            </div>
            <div>
              <label className="block mb-2 text-[#FFFFFF]" htmlFor="trxid">
                Trx Id
              </label>
              <input
                className="w-full px-4 py-2 rounded-lg border border-red-400 outline-blue-300 text-[#000]"
                type="text"
                id="trxid"
                {...register("trxid", { required: true })}
                placeholder="Trx Id"
              />
            </div>
          
            <div>
              <NavLink
                to="/dashboard/login"
                className="text-blue-500 hover:text-blue-900 duration-150"
              >
                Alredy have an account?
              </NavLink>
            </div>
          </div>
          <button
            className="w-full bg-gradient-to-l from-[#19c3fc] to-slate-800 rounded-lg py-2 font-semibold mt-10"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
