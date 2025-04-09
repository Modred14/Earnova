import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <>
      <div
        style={{ minHeight: "100vh" }}
        className="grid grid-cols-1 md:grid-cols-2"
      >
        <div className=" min-h-full  overflow-y-hidden">
          <div className="md:md:p-16 sm:p-28 lg:p-28 p-16 form-size">
            <form action="">
              <div className="grid grid-cols-2 -ml-3 w-24">
                <img className="w-16" src="/EARNOVA.png" alt="" />
                <p className="text-2xl mt-4 font-extrabold "> Earnova</p>
              </div>
              <div className="pt-8">
                <p className="text-sm mb-3">Let's get started!</p>
                <p className="text-sm mt-3 w-12 p-1 ml-2">Email</p>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="px-3 py-2 w-full  border-gray-700 border-2  text-black rounded-lg"
                  id="email"
                />
                <p className="text-sm  mt-3 w-12 p-1 ml-2">Password</p>{" "}
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="px-3 border-gray-700 border-2  py-2 pr-10 w-full text-black rounded-lg"
                  id="password"
                />
                <p
                  onClick={() => setShowPass((prev) => !prev)}
                  className="flex justify-end -mt-7 mr-3 text-gray-600"
                >
                  {" "}
                  {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                </p>
                <p className="mt-5 w-full flex justify-end -ml-3">
                  <a href=""> Forgot password?</a>
                </p>
                <button
                  type="submit"
                  className="w-full bg-blue-500 py-3 text-sm rounded-xl mt-6 mb-3"
                >
                  Log in
                </button>
                <div className="flex justify-center">
                  <p>
                    Already have an account? <a href="/signup">Sign Up</a>
                  </p>
                </div>
                <div className="w-full flex mt-8  -mb-24 justify-center">
                  <img
                    src="/EARNOVA.png"
                    className="w-44  animate-bounce"
                    alt=""
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden md:block bg-gif"></div>
      </div>
    </>
  );
};
export default Login;
