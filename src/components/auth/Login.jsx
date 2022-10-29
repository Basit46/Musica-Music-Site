import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";

const Login = () => {
  const { logIn } = useAuthContext();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Enter Appropriate Values Hermano");
    } else {
      await logIn(email, password);
      navigate("/");
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className="border-2 border-white w-[90vw] md:w-[400px] h-full p-[10px] flex flex-col items-center justify-between">
      <form
        onSubmit={handleClick}
        className="w-full flex flex-col items-center"
      >
        <h1 className="text-[2rem] mt-[5px] mb-[30px] font-extrabold">LOGIN</h1>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=" mb-[20px] w-full px-[4px] py-[6px] text-black font-bold outline-none"
          type="email"
          placeholder="JohnDoe@gmail.com"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-[4px] py-[6px] text-black outline-none"
          type="password"
          placeholder="Your Password"
        />
        <button className="mt-[30px] bg-[#FACD66] text-black font-bold w-[80%] px-[4px] py-[8px]">
          LOGIN
        </button>
      </form>
      <p className="mt-[40px] w-full text-center mb-[50px] text-[1.2rem]">
        Need to create a new account?{" "}
        <span
          onClick={() => navigate("/profile/signup")}
          className="underline cursor-pointer text-[#FACD66]"
        >
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default Login;
