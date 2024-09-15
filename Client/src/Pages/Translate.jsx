import React, { useState } from "react";

const Translate = () => {
  const [input, setInput] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [output, setOutput] = useState("");

  const handleTranslate = () => {

  };

  return (
    <div className="w-full h-screen bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] py-14 px-8">
      <h1 className="text-white text-[30px] font-poppins text-center font-bold pb-10">
        Translate
      </h1>
      <div className="flex justify-between gap-4">
        <div className="flex-1">
          <div className="flex pb-4 justify-between">
            <h2>Translate from</h2>
            <select name="from" onChange={(e) => setFrom(e.target.value)}>
              <option value="">Select language</option>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
          <textarea
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-32 px-4 py-2 outline-none rounded-md"
            placeholder="Input"
          ></textarea>
        </div>
        <div className="flex-1">
          <div className="flex justify-between pb-4">
            <h2>Translate to</h2>
            <select name="to" onChange={(e) => setTo(e.target.value)}>
              <option value="">Select language</option>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            
            </select>
          </div>
          <textarea
            value={output}
            readOnly
            className="w-full h-32 px-4 py-2 outline-none rounded-md"
            placeholder="Output"
          ></textarea>
        </div>
      </div>
      <div className="flex justify-center pt-10">
        <button
          onClick={handleTranslate}
          className="bg-black text-white w-1/2 px-4 py-2 rounded-md font-bold active:scale-95 duration-200"
        >
          Translate
        </button>
      </div>
    </div>
  );
};

export default Translate;
