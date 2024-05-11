import React, { useState } from "react";
import "./login.css";
import google from "../../assets/login/SVG.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import api, { login } from "../store/api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../store/constant";

export default function Login({ route, method }) {
   const [submit, setSubmit] = useState();
   const [loading, setLoading] = useState(false);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [passwordsMatch, setPasswordsMatch] = useState(true);
   const navigate = useNavigate();
   const handlePasswordChange = (e) => {
      setPassword(e.target.value);
      // Check if passwords match when the password field is changed
      setPasswordsMatch(e.target.value === confirmPassword);
   };

   const handleConfirmPasswordChange = (e) => {
      setConfirmPassword(e.target.value);
      // Check if passwords match when the confirm password field is changed
      setPasswordsMatch(e.target.value === password);
   };
   const handleEmail = (e) => {
      setEmail(e.target.value);
   };
   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      login(email, password);
      // try {
      //    const response = await api.post("/api/user/login", {
      //       username,
      //       password,
      //    });
      //    localStorage.setItem("token", response.data.accessToken);
      //    localStorage.setItem("refreshToken", response.data.refreshToken);
      //    navigate("/"); // Navigate to the home page on successful login
      //    console.log("suc");
      // } catch (error) {
      //    // console.error("Login failed:", error);
      //    alert("Login failed, please check your credentials and try again.");
      // }
   };
   const policy = (
      <p className="text-[1.19563rem] font-[Poppins]">
         By proceeding. you agree to the{" "}
         <button className="text-[#0685FA] underline">Terms of Service</button>{" "}
         and{" "}
         <button className="text-[#0685FA] underline">Privacy Policy</button>
      </p>
   );
   return (
      <section className="login">
         <div className="mx-28">
            <div className="pl-6 font-bold">
               <h3>
                  Board Pins<span className="blue">.</span>
               </h3>
            </div>
            <div className="text-center welcome mt-5">
               <h1>Welcome to board pins</h1>
               <p>Get started - it's free!</p>
            </div>
            <form
               onSubmit={handleSubmit}
               className="mt-12 xl:w-3/6 lg:w-4/6 md:w-5/6 m-auto xl:px-6 "
            >
               <button type="button" className="btn-g md:py-[1.3rem] py-1 ">
                  <LazyLoadImage
                     src={google}
                     alt="google"
                     effect="none"
                     className=""
                     placeholderSrc={google}
                     opasity="0.5"
                  />{" "}
                  <span className="inline-block ml-3">
                     Continue with Google
                  </span>
               </button>
               <div className="relative border-t-[#b0b0b0] border-t-2 mt-10 pt-3">
                  <p className="absolute w-10 bg-white bottom-0 text-center left-[48%] rounded text-[#b0b0b0]">
                     or
                  </p>
               </div>

               <div className="mt-[0.75rem]">
                  <p className="text-[1.4rem] text-[#1E1E1E] font-[Poppins]">
                     Email
                  </p>
                  <input
                     type="email"
                     name="email"
                     id=""
                     placeholder="name@host.com"
                     className="pl-[1.92rem] w-full py-[1.9rem]  bg-[#f5f5f5] focus:bg-white rounded-lg placeholder:text-[1.29rem] mt-3"
                     value={email}
                     onChange={handleEmail}
                  />
               </div>
               <div>
                  <p className="text-[1.4rem] text-[#1E1E1E] font-[Poppins] mt-[0.75rem]">
                     Password
                  </p>

                  <input
                     type="password"
                     value={password}
                     onChange={handlePasswordChange}
                     className="pr-[2rem] pl-[1.92rem] w-full py-[1.9rem]  bg-[#f5f5f5] focus:bg-white rounded-lg placeholder:text-[1.29rem] mt-3"
                     placeholder="Enter your password"
                  />
               </div>
               <div className="mt-2">
                  <FormGroup>
                     <FormControlLabel
                        required
                        control={<Checkbox />}
                        label={policy}
                     />
                  </FormGroup>
               </div>
               <div>
                  <button
                     type="submit"
                     className="btn-g md:py-[1.3rem] py-1 create-account  mt-3"
                  >
                     <span className="inline-block ml-3 text-white">
                        Log in
                     </span>
                  </button>
               </div>
               <p className="forgot text-center text-[1.3625rem] mt-[1.7rem] ">
                  <Link to="/login" className="">
                     Forgot password?
                  </Link>
               </p>
               <div className="text-center mt-10 text-[ 1.5705rem] font-[Poppins]">
                  <p>
                     Need an account ?
                     <Link to="/signup" className="blue">
                        Sign Up
                     </Link>
                  </p>
               </div>
            </form>
         </div>
      </section>
   );
}
