import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className=" py-5 pb-10 w-full">
      <h2 className="text-3xl text-center py-5 font-semibold ">Login</h2>
      <div className="bg-gray-900 ring-2 ring-white rounded-lg w-6/12 mx-auto p-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-5">
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
              <label className="block mb-2 text-[#FFFFFF]" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-4 py-2 rounded-lg border border-red-400 outline-blue-300 text-[#000]"
                type="password"
                id="password"
                {...register("password", { required: true })}
                placeholder="Password"
              />
            </div>{" "}
            <div className="flex justify-between items-center">
              <div className="flex justify-start gap-3 items-center">
                <input
                  type="checkbox"
                  id="checkbox"
                  name="checkbox"
                  className="size-4 rounded"
                />
                <label className="block text-[#FFFFFF]" htmlFor="checkbox">
                  Remember password
                </label>
              </div>
              <a className="text-blue-500 hover:text-blue-900 duration-150" href="/">forgot password?</a>
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

export default Login;
