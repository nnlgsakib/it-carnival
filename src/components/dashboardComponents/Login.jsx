import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);


    fetch("https://firstaidbox-server.vercel.app/api/v1/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if needed
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((responseData) => {
        console.log(responseData);
        // console.log(responseData?.errorMessages[0]?.message);
        if (responseData?.success == false) {
          return Swal.fire({
            icon: "error",
            title: "Faield",
            text: `${responseData?.errorMessages[0]?.message}`,
          });
        }
        if (responseData?.success == true) {
          return Swal.fire({
            icon: "success",
            title: "Logdin success",
            text: `${responseData?.message}`,
          }).then(() => {
            window.location.href = '/dashboard';

          });
        }
      })
      .catch((error) => {
        // Handle errors
        console.error('Error fetching data:', error);
      });
  };




  // http://localhost:5000/api/v1/auth/login



  return (
    <div className=" py-5 pb-10 w-full p-3">
      <h2 className="text-3xl text-center py-5 font-semibold ">Login</h2>
      <div className="bg-gray-900 rounded-lg lg:w-6/12 mx-auto p-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-5">
            <div>
              <label className="block mb-2 text-[#FFFFFF]" htmlFor="id">
                Admin Id
              </label>
              <input
                className="w-full px-4 py-2 rounded-lg border border-red-400 outline-blue-300 text-[#000]"
                type="id"
                id="id"
                {...register("id", { required: true })}
                placeholder="id"
              />{" "}
              {errors.id && (
                <span className="text-red-500 text-xs">id is required</span>
              )}
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
              />{" "}
              {errors.password && (
                <span className="text-red-500 text-xs">
                  Password is required
                </span>
              )}
            </div>{" "}
            <div className="flex flex-col justify-between items-center">
              <div className="flex justify-start gap-1 place-items-center items-center">
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
              <a
                className="text-blue-500 hover:text-blue-900 duration-150"
                href="/"
              >
                forgot password?
              </a>
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
