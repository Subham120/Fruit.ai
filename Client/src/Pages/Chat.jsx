import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { IoSend } from "react-icons/io5";
import { IoAttach } from "react-icons/io5";
import { TiMicrophoneOutline } from "react-icons/ti";

const Chat = () => {
  const [loading, setLoading] = useState(true);
  const [dark, setDark] = useState(false);
  const [updateDark, setUpdateDark] = useState(false);
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState("");

  const [orangeCount, setOrangeCount]= useState(2)
  const [CucumberCount, setCucumberCount]= useState(1)
  const [TangerineCount, setTangerineCount]= useState(4)

  const incrementOrangeCount = () => {
    setOrangeCount(orangeCount + 1);
  };

  const decrementOrangeCount = () => {
    if (orangeCount > 0) {
      setOrangeCount(orangeCount - 1);
    }
  };

  const incrementCucumberCount = () => {
    setCucumberCount(CucumberCount + 1);
  };

  const decrementCucumberCount = () => {
    if (CucumberCount> 0) {
     setCucumberCount(CucumberCount- 1);
    }
  };


  const incrementTangerineCount = () => {
    setTangerineCount(TangerineCount + 1);
  };

  const decrementTangerineCount = () => {
    if (TangerineCount> 0) {
     setTangerineCount(TangerineCount- 1);
    }
  };




  const navigate = useNavigate();

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  if (loading)
    return (
      <div className="w-full h-screen flex flex-col justify-center px-10">
        <p>Hello</p>
        <p>Chat</p>
        <p className="text-xs text-slate-500">
          The last chat app you'll ever need.
        </p>
      </div>
    );

  const handleSendMessage = () => {
    setChat([...chat, input]);
    setInput("");
  };

  return (
    <div
      className={`relative w-full h-screen py-10 px-10 ${
        dark ? "text-white bg-black" : ""
      }`}
    >
      <div
        className={`flex justify-between items-center border-b pb-4 sticky top-0 z-10 ${
          dark ? "bg-black" : "bg-white"
        }`}
      >
        <div className="flex gap-4 items-center">
          <IoIosArrowBack className="text-xl" onClick={() => navigate("/")} />
          <div className="flex gap-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdLZAJzeEA2iYjsrN4CEXrg8ATQ1tB04blQ&s"
              alt=""
              className="w-10 h-10 rounded-full bg-contain"
            />
            <div>
              <h3 className="font-semibold text-xl">John Doe</h3>
              <p className="text-xs text-purple-500 italic">Online</p>
            </div>
          </div>
        </div>
        <div>
          {!updateDark && (
            <BiDotsVerticalRounded
              className="text-xl"
              onClick={() => setUpdateDark(true)}
            />
          )}
          {updateDark && (
            <div
              className="absolute top-2 right-4 h-10 w-1/2"
              onClick={() => {
                setDark(!dark);
                setUpdateDark(false);
              }}
            >
              <p>Change to {dark ? "Light" : "Dark"} mode.</p>
            </div>
          )}
        </div>
      </div>
      <div className="w-full h-[90%] overflow-y-scroll no-scrollbar">
        <div className="max-w-[70%] pt-4">
          <p
            className={`px-2 py-2 ${
              !dark ? "text-black bg-gray-100" : "bg-neutral-800 text-white"
            } rounded-md`}
          >
            This is a sample big message with a longer text paragraph
          </p>
          <p className="text-xs mt-2 text-slate-400">10:30 AM</p>
        </div>

        <div className="max-w-[60%] py-4 ml-[40%]">
          <p className="px-2 py-2 bg-purple-600 text-white rounded-md text-end">
            This is a sample big message with a longer text paragraph
          </p>
          <p className="text-xs mt-2 text-slate-400 text-end">10:30 AM</p>
        </div>
        <div className=" w-full pl-4 pr-8 mb-4 bg-[#eaefeb] rounded-full flex justify-between items-center">
          <div className="flex  items-center gap-4">
            <img
              src={`/Orange.png`}
              alt=""
              className="py-2 w-32 h-32 rounded-full"
            />
            <div>
              <h2 className="text-lg font-extrabold text-[#EE0A22]">Orange</h2>
              <p className="text-[#EE0A22] text-sm font-extrabold">$8.00</p>
            </div>
          </div>
          <div>
            <div className="flex gap-2">
              <p className="border-2 text-black border-[#EE0A22] px-2 rounded-full font-extrabold cursor-pointer" onClick={decrementOrangeCount}>
                -
              </p>
              <p className="text-[#EE0A22] text-xl font-extrabold">{orangeCount}</p>
              <p className="border-2 text-black border-[#EE0A22] px-2 rounded-full font-extrabold cursor-pointer" onClick={incrementOrangeCount}>
                +
              </p>
            </div>
            <p className="text-[#EE0A22] text-sm font-extrabold text-center mt-2">${(orangeCount * 8.00).toFixed(2)}</p>
          </div>
        </div>

        <div className=" w-full pl-4 pr-8 mb-4 bg-[#eaefeb] rounded-full flex justify-between items-center">
          <div className="flex  items-center gap-4">
            <img
              src={`/Cucumber.png`}
              alt=""
              className="py-2 w-32 h-32 rounded-full"
            />
            <div>
              <h2 className="text-lg font-extrabold text-[#EE0A22]">Cucumber</h2>
              <p className="text-[#EE0A22] text-sm font-extrabold">$11.76</p>
            </div>
          </div>
          <div>
            <div className="flex gap-2">
              <p className="border-2 text-black border-[#EE0A22] px-2 rounded-full font-extrabold cursor-pointer" onClick={decrementCucumberCount}> 
                -
              </p>
              <p className="text-[#EE0A22] text-xl font-extrabold">{CucumberCount}</p>
              <p className="border-2 text-black border-[#EE0A22] px-2 rounded-full font-extrabold cursor-pointer" onClick={incrementCucumberCount}>
                +
              </p>
            </div>
            <p className="text-[#EE0A22] text-sm font-extrabold text-center mt-2">${(CucumberCount * 11.76).toFixed(2)}</p>
          </div>
        </div>

        <div className=" w-full pl-4 pr-8 bg-[#eaefeb] rounded-full flex justify-between items-center">
          <div className="flex  items-center gap-4">
            <img
              src={`/Tangerine.png`}
              alt=""
              className="py-2 w-32 h-32 rounded-full"
            />
            <div>
              <h2 className="text-lg font-extrabold text-[#EE0A22]">Tangerine</h2>
              <p className="text-[#EE0A22] text-sm font-extrabold">$6.40</p>
            </div>
          </div>
          <div>
            <div className="flex gap-2">
              <p className="border-2 text-black border-[#EE0A22] px-2 rounded-full font-extrabold cursor-pointer" onClick={decrementTangerineCount}>
                -
              </p>
              <p className=" text-[#EE0A22] text-xl font-extrabold">{TangerineCount}</p>
              <p className="border-2 text-black border-[#EE0A22] px-2 rounded-full font-extrabold cursor-pointer" onClick={incrementTangerineCount}>
                +
              </p>
            </div>
            <p className="text-[#EE0A22] text-sm font-extrabold text-center mt-2">${(TangerineCount * 6.40).toFixed(2)}</p>
          </div>
        </div> 
        
        <div className="max-w-[70%] py-4 ml-[30%]">
          <p className="px-2 py-2 bg-purple-600 text-white rounded-md text-end">
            This is a sample message for a chat
          </p>
          <p className="text-xs mt-2 text-slate-400 text-end">10:30 AM</p>
        </div>
        <div className="max-w-[70%] pt-4">
          <p
            className={`px-2 py-2 ${
              !dark ? "text-black bg-gray-100" : "bg-neutral-800 text-white"
            } rounded-md`}
          >
            This is a sample  message for a chat
          </p>
          <p className="text-xs mt-2 text-slate-400">10:30 AM</p>
        </div>


        {chat.map((c, i) => (
          <div key={i} className="max-w-[70%] py-4 ml-[30%]">
            <p className="px-2 py-2 bg-purple-600 text-white rounded-md text-end">
              {c}
            </p>
            <p className="text-xs mt-2 text-slate-400 text-end">10:30 AM</p>
          </div>
        ))}
      </div>
      <div className="sticky bottom-0 z-10 flex gap-6 w-full h-16 py-2">
        <div className="flex-1 bg-white rounded-md w-full gap-2 flex items-center px-4">
          <IoAttach className="text-gray-400 text-2xl font-extrabold" />
          <input
            type="text"
            placeholder="Message.. "
            className="outline-none w-full h-full text-black"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <TiMicrophoneOutline className="text-gray-400 text-2xl font-extrabold" />
        </div>
        <div
          className="w-8 h-8 flex items-center justify-center bg-purple-600 text-white rounded-md cursor-pointer"
          onClick={handleSendMessage}
        >
          <IoSend />
        </div>
      </div>
    </div>
  );
};

export default Chat;



