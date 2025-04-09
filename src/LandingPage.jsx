import React from "react";
import { useState, useEffect } from "react";
import TaskBar from "./taskbar";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const LandingPage = () => {
  const [userName, setUserName] = useState("Unknown");
  const [loading, setLoading] = useState(false);
  const [totalBalance, setTotalBalance] = useState("100.00");
  const [affiliateEarn, setAffiliateEarn] = useState("200.00");
  const [subAffiliateEarn, setSubAffiliateEarn] = useState("299.00");
  const [payouts, setPayouts] = useState("100.00");
  const [totalEarn, setTotalEarn] = useState("168.00");
  const [downlines, setDownlines] = useState("300.00");
  const [notifications, setNotifications] = useState("4");
  const [userImage, setUserImage] = useState("");
  const [openTaskbar, setOpenTaskbar] = useState(false);

  if (loading) {
    return;
  }

  return (
    <>
      <div className="w-full h-full">
        {openTaskbar && (
          <>
            <div
              className="w-full fixed mt-19 h-full bg-black-o"
              style={{ zIndex: 1100 }}
            >
              <TaskBar />
            </div>
          </>
        )}
        <div
          className="fixed header-grid px-5 bg-gray-500 w-full min-w-fit "
          style={{ zIndex: 1200 }}
        >
          <div className="py-4 grid grid-cols-1 grid-flow-col">
            <div className="flex  flex-row">
              <div className="sm:hidden">
                {!openTaskbar ? (
                  <button
                    onClick={() => setOpenTaskbar(true)}
                    class=" -mx-2 text-gray-100 hover:text-gray-300 text-2xl"
                  >
                    &#9776;
                  </button>
                ) : (
                  <button
                    onClick={() => setOpenTaskbar(false)}
                    class=" -mx-2 text-gray-100 hover:text-gray-300 text-2xl"
                  >
                    &#9776;
                  </button>
                )}
              </div>
              <div>
                <img src="" alt="logo image" />
              </div>
            </div>

            <div className="flex mr-3 gap-3">
              <div> <img src={userImage} alt="user image" /></div>
              <div>
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  {/* Notification Badge */}
                  {notifications > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                      {notifications}
                    </span>
                  )}
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex pt-20 flex-row w-full">
          <div className="sm:w-80 -mt-4 w-0 sm:opacity-100 opacity-0 ">
            <TaskBar />
          </div>

          <div className="w-full mt-4 mx-3 lg:mx-20 sm:mx-10">
            <div>
              <p className="text-2xl font-bold">Welcome back, {userName}!</p>
            </div>
            <div className="mt-3 bg-gradient-to-b from-black via-transparent to-transparent bg-[length:100%_40%] bg-no-repeat bg-top bg-green-900 text-gray-200 p-5 rounded-2xl">
              <p className="text-gray-300 text-lg">Overall Balance</p>
              <p className="font-extrabold mt-2 text-3xl">
                &#36;{totalBalance}
              </p>
              <div className="mt-4 flex gap-2">
                <button className="bg-gray-200 px-3 py-2 rounded-lg text-sm font-semibold text-gray-700">
                  Transfer
                </button>
                <a href="/login">
                <button className="bg-gray-200 px-3 py-2 rounded-lg text-sm font-semibold text-gray-700">
                  Withdraw
                </button></a>
              </div>
            </div>
            <div className="mt-3 bg-gradient-to-b from-black via-transparent to-transparent bg-[length:100%_40%] bg-no-repeat bg-top bg-green-900  text-gray-200 p-5 rounded-2xl">
              <div className="grid grid-cols-2">
                <div>
                  <p className="text-gray-300 text-md">Affiliate Earning</p>
                  <p className="font-extrabold mt-2 text-2xl">
                    &#36;{affiliateEarn}
                  </p>
                </div>
                <div>
                  <p className="text-gray-300 text-md">Sub-affiliate Earning</p>
                  <p className="font-extrabold mt-2 text-2xl">
                    &#36;{subAffiliateEarn}
                  </p>
                </div>
              </div>
              <div className="flex mt-10 flex-wrap gap-3">
                <div className="bg-green-970 rounded-lg p-3">
                  <p className="font-extrabold mt-2 text-2xl">
                    &#36;{payouts}
                  </p>
                  <p className="text-gray-300 text-md">Payouts</p>
                </div>
                <div className="bg-green-970 rounded-lg p-3">
                  {" "}
                  <p className="font-extrabold mt-2 text-2xl">
                    &#36;{totalEarn}
                  </p>
                  <p className="text-gray-300 text-md">Today's Earning</p>
                </div>
                <div className="bg-green-970 rounded-lg p-3">
                  {" "}
                  <p className="font-extrabold mt-2 text-2xl">
                    &#36;{downlines}
                  </p>
                  <p className="text-gray-300 text-md">Total Downlines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LandingPage;
