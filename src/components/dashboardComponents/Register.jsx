import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Register = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const onSubmit = (data) => {

    console.log(data);

    fetch("http://localhost:5000/api/v1/admin/create", {
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
            title: "Register success",
            text: `${responseData?.message}`,
          });
        }
      })
      .catch((error) => {
        // Handle errors
        console.error('Error fetching data:', error);
      });

  };
  return (
    <div className=" py-5 pb-10 w-full">
      <h2 className="text-3xl text-center py-5 font-semibold ">Create Admin</h2>
      <div className="bg-gray-900 rounded-lg lg:w-6/12 lg:mx-auto mx-2 p-8">
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
                placeholder="Name"
              />
              {errors.name && (
                <span className="text-red-500 text-xs">Name is required</span>
              )}
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
                type="string"
                id="number"
                {...register("phone", { required: true })}
                placeholder="Phone"
              />
              {errors.number && (
                <span className="text-red-500 text-xs">Phone is required</span>
              )}
            </div>
            <div>
              <label
                className="block mb-2 text-[#FFFFFF]"
                htmlFor="password"
              >
                Password
              </label>

              <input
                className="w-full px-4 py-2 rounded-lg border border-red-400 outline-blue-300 text-[#000]"
                type="string"
                id="password"
                {...register("password", { required: true })}
                placeholder="Password"
              />
              {errors.password && (
                <span className="text-red-500 text-xs">Password is required</span>
              )}
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
