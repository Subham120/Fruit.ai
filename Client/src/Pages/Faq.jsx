import React, { useEffect, useState } from "react";
import axios from "axios";
const Faq = () => {
  const [visible, setVisible] = useState(false);
  const [response, setResponse] = useState();
  const [data, setData] = useState({
    title: "",
    question: "",
    answer: "",
    image_url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/faqs`, data);
    await getFaqResponse();
    setData({
      title:"",
      question:"",
      answer:"",
      image_url:""
    })
  };

  const getFaqResponse = async () => {
    const faqResponse = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/faqs`);

    setResponse(faqResponse.data);
    
    setVisible(false);
  };
  useEffect(() => {
    getFaqResponse();
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] w-full h-screen pt-12">
      <h1 className="text-[24px] font-[700] text-center text-white font-poppins">
        FaQ Section
      </h1>
      <div className="w-full px-10 py-8 h-[90%] overflow-y-scroll no-scrollbar">
        {response &&
          response.map((data, index) => (
            <div key={index} className="w-full border flex min-h-[160px] justify-between  my-2 bg-[#EAEFEB] py-4 px-4 rounded-[25px]">
              <div className="flex w-1/4 justify-center items-center flex-col">
                <img src={data.image_url} alt="" className="border w-[105px] h-[90px] rounded-[25px] overflow-hidden bg-cover" />
                <h1 className=" py-2 text-[#EE0A22] text-[14px] font-[700] font-poppins">{data.title}</h1>
              </div>
              <div className="w-2/3">
                <h2 className="text-[14px] text-[#EE0A22] font-[700] leading-[21px] font-poppins">{data.question}</h2>
                <p className="text-[13px] text-[#0386d0] font-[700] font-poppins leading-[19.5px]">{data.answer}</p>
              </div>
            </div>
          ))}
      </div>
      <div
        className="bg-black text-white w-12 h-12 rounded-full text-center flex items-center justify-center text-[40px] font-bold absolute bottom-16 right-12 cursor-pointer"
        onClick={() => {
          console.log("Toggling visibility");
          setVisible(!visible);
        }}
      >
        +
      </div>
      {visible && (
        <form
          className="w-full px-12 h-1/2 bg-white absolute bottom-0 py-8"
          onSubmit={handleSubmit}
        >
          <div className="border-b mb-4">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={data.title}
              onChange={handleChange}
              className="outline-none w-full text-lg px-4"
              required
            />
          </div>
          <div className="border-b mb-4">
            <input
              type="text"
              name="image_url"
              placeholder="Image Url"
              value={data.image_url}
              onChange={handleChange}
              className="outline-none w-full text-lg px-4"
              required
            />
          </div>
          <div className="border-b mb-4">
            <input
              type="text"
              name="question"
              placeholder="Question"
              value={data.question}
              onChange={handleChange}
              className="outline-none w-full text-lg px-4"
              required
            />
          </div>
          <div className="border-b mb-4">
            <input
              type="text"
              name="answer"
              placeholder="Answer"
              value={data.answer}
              onChange={handleChange}
              className="outline-none w-full text-lg px-4"
              required
            />
          </div>
          <div className="w-full flex items-center justify-center">
            <button
              type="submit"
              className="w-1/2 rounded-xl bg-black text-white px-4 py-2"
            >
              Add
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Faq;
