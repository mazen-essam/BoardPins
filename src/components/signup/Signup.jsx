import React, { useState } from "react";
import "./Signup.css";
import google from "../../assets/login/SVG.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import api from "../store/api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../store/constant";
export default function Signup({ route, method }) {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

   const name = method === "login" ? "Login" : "Register";

   const handleSubmit = async (e) => {
      setLoading(true);
      e.preventDefault();

      try {
         const response = await api.post(
            "http://ec2-184-73-109-159.compute-1.amazonaws.com:8000/api/users/",
            {
               username,
               password,
               email,
            }
         );
         localStorage.setItem("token", response.data.accessToken);
         localStorage.setItem("refreshToken", response.data.refreshToken);
         return response.data;
      } catch (error) {
         console.error("Signup failed:", error);
         return null;
      }
   };
   const [confirmPassword, setConfirmPassword] = useState("");
   const [passwordsMatch, setPasswordsMatch] = useState(true);
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const handleFirstNameChange = (e) => {
      setFirstName(e.target.value);
   };

   const handleLastNameChange = (e) => {
      setLastName(e.target.value);
   };

   const handleEmailChange = (e) => {
      setEmail(e.target.value);
   };

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
                  <span className="inline-block ml-3">Google</span>
               </button>
               <div className="relative border-t-[#b0b0b0] border-t-2 mt-10 pt-3">
                  <p className="absolute w-10 bg-white bottom-0 text-center left-[48%] rounded text-[#b0b0b0]">
                     or
                  </p>
               </div>
               <div className="md:flex md:flex-row block text-[#1E1E1E] justify-between">
                  <div className="flex-1 md:mr-5 mr-0 ">
                     <p className="text-[1.4rem] text-[#1E1E1E] font-[Poppins]">
                        First Name
                     </p>
                     <input
                        type="text"
                        value={firstName}
                        onChange={handleFirstNameChange}
                        name="firstName"
                        id=""
                        placeholder="first name"
                        className="pl-[1.92rem] w-full py-[1.9rem]  bg-[#f5f5f5] focus:bg-white rounded-lg placeholder:text-[1.29rem] mt-3"
                     />
                  </div>
                  <div className="flex-1 md:pl-5 pl-0">
                     <p className="text-[1.4rem] text-[#1E1E1E] font-[Poppins]">
                        Last Name
                     </p>
                     <input
                        type="text"
                        value={lastName}
                        onChange={handleLastNameChange}
                        name="lastName"
                        id=""
                        placeholder="last name"
                        className="pl-[1.92rem] w-full py-[1.9rem]  bg-[#f5f5f5] focus:bg-white rounded-lg placeholder:text-[1.29rem] mt-3"
                     />
                  </div>
               </div>
               <div className="mt-[0.75rem]">
                  <p className="text-[1.4rem] text-[#1E1E1E] font-[Poppins]">
                     Email
                  </p>
                  <input
                     type="email"
                     name="email"
                     value={email}
                     onChange={handleEmailChange}
                     id=""
                     placeholder="name@host.com"
                     className="pl-[1.92rem] w-full py-[1.9rem]  bg-[#f5f5f5] focus:bg-white rounded-lg placeholder:text-[1.29rem] mt-3"
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
                  <p className="text-[1.4rem] text-[#1E1E1E] font-[Poppins] mt-[0.75rem]">
                     Confirm password
                  </p>

                  <input
                     type="password"
                     value={confirmPassword}
                     onChange={handleConfirmPasswordChange}
                     className="pr-[2rem] pl-[1.92rem] w-full py-[1.9rem]  bg-[#f5f5f5] focus:bg-white rounded-lg placeholder:text-[1.29rem] mt-3"
                     placeholder="Confirm password"
                  />
                  {!passwordsMatch && (
                     <p style={{ color: "red" }}>Passwords do not match</p>
                  )}
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
                        Create Account
                     </span>
                  </button>
               </div>
               <div className="text-center mt-10 text-[ 1.5705rem] font-[Poppins]">
                  <p>
                     Already have an account ?{" "}
                     <Link to="/login" className="blue">
                        {" "}
                        Login
                     </Link>
                  </p>
               </div>
            </form>
         </div>
      </section>
   );
}
