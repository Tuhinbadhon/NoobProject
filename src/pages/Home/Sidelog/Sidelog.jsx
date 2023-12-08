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
    <div className="bg-gray-50 flex rounded-2xl shadow-lg max-w-sm mx-auto items-center p-4">
      {/* form */}
      <div className="w-full p-2">
        <h2 className="font-bold text-xl text-[#002D74]">Login</h2>
        <br />
        <form action="" className="flex flex-col gap-2" onSubmit={handleLogin}>
          <input
            className="p-2 rounded border"
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
              className="p-2 rounded border w-full"
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
          <button className="bg-[#002D74] rounded text-white py-2 hover:scale-105 duration-300">
            Login
          </button>
        </form>

        <div className="mt-3 grid grid-cols-3 items-center text-gray-400">
          <hr className="border-gray-400" />
          <p className="text-center text-sm">OR</p>
          <hr className="border-gray-400" />
        </div>

        <button className="bg-white border py-2 w-full rounded mt-2 flex justify-center items-center gap-2 text-sm hover:scale-105 duration-300 ">
          <FcGoogle /> <span className="text-[#002D74]">Login with Google</span>
        </button>

        <div className="mt-2 text-xs border-b border-[#002D74] py-2 text-[#002D74]">
          <a href="#">Forgot your password?</a>
        </div>

        <div className="mt-2 text-xs flex justify-between items-center text-[#002D74]">
          <p>Don&apos;t have an account?</p>
          <Link
            to="/signup"
            className="py-1 px-3 bg-white border rounded hover:scale-110 duration-300"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

// *****form******

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useUser } from "../../../userContext";
// import "bootstrap/dist/css/bootstrap.min.css";

// export const Sidelog = () => {
//   const navigate = useNavigate();
//   const { setUserDataContext } = useUser();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//   });

//   const handleChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Form submitted!");
//     console.log("Name:", formData.name);
//     console.log("Email:", formData.email);

//     // Set user data in the context
//     setUserDataContext(formData);

//     // Navigate to the "About" page
//     navigate("/about");
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-2xl font-bold">Register Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             placeholder="Enter name..."
//             className="form-control"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Enter email..."
//             className="form-control"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };
