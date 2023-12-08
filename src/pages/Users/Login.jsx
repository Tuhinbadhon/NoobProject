import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Add your authentication logic here (e.g., calling an API to authenticate the user)

    // For demo purposes, log the form data to the console
    console.log("Login Data:", { email, password });

    // Clear form fields after submission
    setEmail("");
    setPassword("");
  };
  return (
    <div
      className="bg-gray-50 flex rounded-2xl shadow-lg max-w-3xl max-[830px]:max-w-[39rem]
     max-[540px]:max-w-[30rem] items-center p-5 mx-auto"
    >
      {/* form */}
      <div className="md:w-1/2 px-8 my-28 mx-auto max-h-fit">
        <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
        <p className="text-xs mt-4 text-[#002D74]">
          If you are already a member, log in
        </p>

        <form
          action=""
          className="flex flex-col gap-4 max-[540px]:w-[18rem]
           max-[360px]:w-[17rem] max-[280px]:w-[12rem]"
          onSubmit={handleLogin}
        >
          <input
            className="p-2 mt-8 rounded-xl border"
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="relative">
            <input
              className="p-2 rounded-xl border w-full"
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaRegEyeSlash className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" />
          </div>
          <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
            Login
          </button>
        </form>

        <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
          <hr className="border-gray-400" />
          <p className="text-center text-sm">OR</p>
          <hr className="border-gray-400" />
        </div>

        <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center gap-2 text-sm hover:scale-105 duration-300 ">
          <FcGoogle /> <span className="text-[#002D74]">Login with Google</span>
        </button>

        <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
          <a href="#">Forgot your password?</a>
        </div>

        <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
          <p>Don`t have an account?</p>
          <Link
            to="/signup"
            className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
