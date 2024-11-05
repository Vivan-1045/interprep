import { React, useState } from "react";
import Webcam from "react-webcam";

const Home = () => {
  const [open, setOpen] = useState(false);
  const DemoWebcam = () => {
    setOpen(!open);
  };

  return (
    <div className="flex mt-20">
      <div className="w-1/2">
        <div className="shadow-lg rounded-md">
          <form action="">
            <h1 className="text-2xl font-semibold ">let's talk with <span className="text-5xl text-green-600 hover:text-purple-600">AI</span></h1>
          </form>
        </div>
        <div className="object-cover rounded-md mt-4"><img src="https://blog.talview.com/hs-fs/hubfs/AI_V.png?width=1684&name=AI_V.png" alt="" /></div>
      </div>



      <div className="w-1/2 ">
        <h1 className="text-5xl">Welcome to homePage</h1>
        <button
          className="text-xl rounded-md bg-green-600 font-semibold mt-10 p-2 w-auto"
          onClick={DemoWebcam}
        >
          {/* {open ? "Hide Webcam" : "Show Webcam"} */}
          WebCamDemo
        </button>
        {open && <Webcam />}
      </div>
    </div>
  );
};

export default Home;
