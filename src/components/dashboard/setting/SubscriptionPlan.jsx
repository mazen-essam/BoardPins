import React, { useState } from "react";
import Search from "../main/Search";
import SideBar from "../sidebar/SideBar";
import sidePlan from "../../../assets/dashboard/SidePlan.svg";
import vectorR from "../../../assets/dashboard/VectorRsub.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Star15 from "../../../assets/dashboard/Star15.svg";
import Plan from "./Plan";
export default function SubscriptionPlan() {
      return (
      <section className="Myboard bg-[#F5F6FA] xl:py-[3.81rem] py-[2.5rem] xl:px-[5.8rem] lg:px-[3.5rem] px-[2rem]">
         <div className="cont w-full m-auto ">
            <div className="grid grid-cols-12 gap-4 ">
               <SideBar />
               <div className=" xl:col-span-10  lg:col-span-12 col-span-12 rounded-2xl">
                  <Search />
                  <div className="service  bg-[#FDFDFD] mt-5 rounded-[2.375rem]   py-6 lg:px-12 px-6">
                     {/* header */}
                     <div className="flex items-center ">
                        <div className="inline-block p-2 bg-[#E5E5FF] rounded-lg me-4 ">
                           <LazyLoadImage src={sidePlan} />
                        </div>
                        <div className="inline-block">
                           <p className="text-[#292D32] text-[1.8125rem] font-[Inter] font-[700] leading-[184.523%]">
                              Subscription Plans
                           </p>
                        </div>
                     </div>
                     <div className="flex   mt-24 ps-4">
                        <div className="me-4 mt-1">
                           <LazyLoadImage src={vectorR} />
                        </div>
                        <div>
                           <p className="text-gray-800 font-inter text-lg font-bold leading-[136%]">
                              Free Trial on All Paid Plans
                           </p>
                           <p className="text-gray-800 font-inter text-lg leading-[136%]">
                              Experience the platform's power before committing.
                           </p>
                        </div>
                     </div>
                     <div className="flex   mt-6 ps-4">
                        <div className="me-4 mt-1">
                           <LazyLoadImage src={vectorR} />
                        </div>
                        <div>
                           <p className="text-gray-800 font-inter text-lg font-bold leading-[136%]">
                              Flexible Billing
                           </p>
                           <p className="text-gray-800 font-inter text-lg leading-[136%]">
                              Choose monthly or annual plans (annual plans get
                              exclusive discounts!).
                           </p>
                        </div>
                     </div>
                     {/* plan */}
                     <div>
                       <Plan/>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
