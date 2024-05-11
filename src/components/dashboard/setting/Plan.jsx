import React, { useState } from "react";
import Star15 from "../../../assets/dashboard/Star15.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Plan() {
   const [cssState, setCssState] = useState(true);
   const handleClass = () => {
      if (cssState) {
         setCssState(false);
      } else {
         setCssState(true);
      }
   };
   let classBlue =
      "rounded-[1.75rem] bg-blue-600 py-2 px-6 text-white font-inter text-lg font-[400] leading-[136%] me-8";
   let classGray =
      "rounded-[1.75rem] bg-[#E8E8E8] py-2 px-6 text-black font-inter text-lg font-[400] leading-[136%]  me-8";

   return (
      <div>
         {" "}
         <div className="flex md:justify-end justify-center md:pe-12">
            {cssState ? (
               <>
                  <button onClick={handleClass} className={classBlue}>
                     Monthly
                  </button>
                  <button onClick={handleClass} className={classGray}>
                     Annual
                  </button>
               </>
            ) : (
               <>
                  <button onClick={handleClass} className={classGray}>
                     Monthly
                  </button>
                  <button onClick={handleClass} className={classBlue}>
                     Annual
                  </button>
               </>
            )}
         </div>
         <div className="grid grid-cols-12  justify-center items-stretch mt-10">
            <div className="md:col-span-4 col-span-12  lg:px-4 md:px-1 lg:py-4 md:py-2 ms-6 lg:me-6 me-3 rounded-[2.03756rem] border-[0.815px] border-gray-900 text-center mt-20">
               <h2 className="text-gray-900 font-poppins xl:text-[2.32181rem] lg:text-[2rem] md:text-2xl text-xl font-semibold leading-[184.523%] tracking-[0.04644rem]">
                  Free
               </h2>

               <p className="text-gray-700 font-inter xl:text-[1.88781rem] lg:text-xl md:text-lg text-[1rem]  font-bold leading-[170%]">
                  EGP 0
                  <span className="text-gray-500 font-inter xl:text-[1.30694rem] lg:text-[1.1rem] md:text-[1rem] text-xs font-medium leading-[170%]">
                     \ month
                  </span>
               </p>
               <button className="lg:mt-6 md:mt-4 mt-2 rounded-[1.75rem] bg-blue-600 py-2 px-6 text-white font-inter text-md font-[400] leading-[136%]">
                  Subscribe Now
               </button>
               <ul className="text-start mt-4 lg:text-md md:text-xs">
                  <li className=" flex justify-start items-start mt-2">
                     <div>
                        <LazyLoadImage src={Star15} className="" />
                     </div>
                     <p className="ps-2">
                        Limited access to service provider directory
                     </p>
                  </li>

                  <li className=" flex justify-start items-start mt-2">
                     <div>
                        <LazyLoadImage src={Star15} className="" />
                     </div>
                     <p className="ps-2">
                        Search on the service providers is limited to 3 timers
                        only per day
                     </p>
                  </li>
                  <li className=" flex justify-start items-start mt-2">
                     <div>
                        <LazyLoadImage src={Star15} className="" />
                     </div>
                     <p className="ps-2">One Category in Board</p>
                  </li>
                  <li className=" flex justify-start items-start mt-2">
                     <div>
                        <LazyLoadImage src={Star15} className="" />
                     </div>
                     <p className="ps-2">3 pins only</p>
                  </li>
                  <li className=" flex justify-start items-start mt-2">
                     <div>
                        <LazyLoadImage src={Star15} className="" />
                     </div>
                     <p className="ps-2">
                        Manage basic projects with to-do lists and task
                        assignments{" "}
                     </p>
                  </li>
                  <li className=" flex justify-start items-start mt-2">
                     <div>
                        <LazyLoadImage src={Star15} className="" />
                     </div>
                     <p className="ps-2">web app</p>
                  </li>
               </ul>
            </div>

            <div className="md:col-span-4 col-span-12   ms-6 me-6 rounded-[2.03756rem] border-[0.815px] border-blue-600 text-center overflow-hidden md:mt-0 mt-20 ">
               <div className="bg-blue-600  py-6 text-white font-inter xl:text-[2.32181rem] lg:text-[2rem] md:text-2xl  text-xl  font-[400] leading-[136%]">
                  Most Popular
               </div>
               <div className="px-4 py-4">
                  <h2 className="text-gray-900 font-poppins xl:text-[2.32181rem] lg:text-[2rem] md:text-2xl font-semibold leading-[184.523%] tracking-[0.04644rem]">
                     Standard
                  </h2>

                  <p className="text-gray-700 font-inter  xl:text-[1.88781rem] lg:text-xl md:text-lg text-[1rem]   font-bold leading-[170%]">
                     EGP 299
                     <span className="text-gray-500 font-inter xl:text-[1.30694rem] lg:text-[1.1rem] md:text-[1rem] text-xs font-medium leading-[170%]">
                        \ month
                     </span>
                  </p>
                  <button className="lg:mt-6 md:mt-4 mt-2 rounded-[1.75rem] bg-blue-600 py-2 px-6 text-white font-inter text-md font-[400] leading-[136%] ">
                     Subscribe Now
                  </button>
                  <ul className="text-start mt-4 lg:text-md md:text-xs">
                     <li className=" flex justify-start items-start mt-2">
                        <div>
                           <LazyLoadImage src={Star15} className="" />
                        </div>
                        <p className="ps-2">
                           Unlimited search per day (Editable)
                        </p>
                     </li>

                     <li className=" flex justify-start items-start mt-2">
                        <div>
                           <LazyLoadImage src={Star15} className="" />
                        </div>
                        <p className="ps-2">
                           Unlimited connection requests Find the PERFECT
                           service provider for every need.
                        </p>
                     </li>
                     <li className=" flex justify-start items-start mt-2">
                        <div>
                           <LazyLoadImage src={Star15} className="" />
                        </div>
                        <p className="ps-2">Unlimited Categories in Board</p>
                     </li>
                     <li className=" flex justify-start items-start mt-2">
                        <div>
                           <LazyLoadImage src={Star15} className="" />
                        </div>
                        <p className="ps-2">Create Pins Collection</p>
                     </li>
                     <li className=" flex justify-start items-start mt-2">
                        <div>
                           <LazyLoadImage src={Star15} className="" />
                        </div>
                        <p className="ps-2">
                           Project Management Powerhouse Collaborate seamlessly
                           with advanced tools like shared boards, file sharing,
                           and in-app messaging.
                        </p>
                     </li>
                     <li className=" flex justify-start items-start mt-2">
                        <div>
                           <LazyLoadImage src={Star15} className="" />
                        </div>
                        <p className="ps-2">Basic reporting and analytics</p>
                     </li>
                     <li className=" flex justify-start items-start mt-2">
                        <div>
                           <LazyLoadImage src={Star15} className="" />
                        </div>
                        <p className="ps-2">
                           Exclusive Discounts: Get special offers from select
                           service providers on the platform (limited time
                           only!).
                        </p>
                     </li>
                  </ul>
               </div>
            </div>

            <div className="md:col-span-4 col-span-12  lg:px-4 md:px-1 lg:py-4 md:py-2 ms-6 me-6 rounded-[2.03756rem] border-[0.815px] border-gray-900 text-center mt-20">
               <h2 className="text-gray-900 font-poppins xl:text-[2.32181rem] lg:text-[2rem] md:text-2xl  text-xl font-semibold leading-[184.523%] tracking-[0.04644rem]">
                  Premium
               </h2>

               <p className="text-gray-700 font-inter  xl:text-[1.88781rem] lg:text-xl md:text-lg text-[1rem]   font-bold leading-[170%]">
                  EGP 399
                  <span className="text-gray-500 font-inter xl:text-[1.30694rem] lg:text-[1.1rem] md:text-[1rem] text-xs font-medium leading-[170%]">
                     \ month
                  </span>
               </p>
               <button className="lg:mt-6 md:mt-4 mt-2 rounded-[1.75rem] bg-blue-600 py-2 px-6 text-white font-inter text-md font-[400] leading-[136%]">
                  Subscribe Now
               </button>
               <ul className="text-start mt-4 lg:text-md md:text-xs">
                  <li className=" flex justify-start items-start mt-2">
                     <div>
                        <LazyLoadImage src={Star15} className="" />
                     </div>
                     <p className="ps-2">All features of Standard Plan</p>
                  </li>

                  <li className=" flex justify-start items-start mt-2">
                     <div>
                        <LazyLoadImage src={Star15} className="" />
                     </div>
                     <p className="ps-2">Unlimited search per day</p>
                  </li>
                  <li className=" flex justify-start items-start mt-2">
                     <div>
                        <LazyLoadImage src={Star15} className="" />
                     </div>
                     <p className="ps-2">Unlimited Categories in Board</p>
                  </li>
                  <li className=" flex justify-start items-start mt-2">
                     <div>
                        <LazyLoadImage src={Star15} className="" />
                     </div>
                     <p className="ps-2">
                        Create Pins Collection Dedicated account manager for
                        support and onboarding Pre-negotiated discounted rates
                        with some service providers
                     </p>
                  </li>
                  <li className=" flex justify-start items-start mt-2">
                     <div>
                        <LazyLoadImage src={Star15} className="" />
                     </div>
                     <p className="ps-2">Invite your service provider </p>
                  </li>
                  <li className=" flex justify-start items-start mt-2">
                     <div>
                        <LazyLoadImage src={Star15} className="" />
                     </div>
                     <p className="ps-2">
                        Collaborate with your service provider through shared
                        projects and tasks
                     </p>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
}
