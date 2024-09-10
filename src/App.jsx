import ico from "./assets/ico.jpeg";

const App = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-[#141414]">
      <div className="w-80 h-[30rem] flex flex-col items-center rounded-xl bg-[#1F1F1F]">
        <div className="flex flex-col items-center b mt-5  ">
          <img className="w-20 rounded-full" src={ico} alt="" />
          <span className="mt-5">
            <h1 className="text-white text-[1.6rem] text-center">
              Jessica Randall
            </h1>
            <p className="text-[#C1DE51] text-sm text-center">
              London, United Kingdom
            </p>
          </span>
          <p className="text-[#BEBEBE] mt-4 text-[0.8rem] mb-3">
            "Front-End developer and avid reader."
          </p>
        </div>
        <div className="flex flex-col h-56 gap-4 mt-2">
          <button className="w-64 h-9 rounded-md bg-[#333333] text-white">
            GitHub
          </button>
          <button className="w-64 h-9 rounded-md bg-[#333333] text-white">
            Frontend Mentor
          </button>
          <button className="w-64 h-9 rounded-md bg-[#333333] text-white">
            Linkedin
          </button>
          <button className="w-64 h-9 rounded-md bg-[#333333] text-white">
            Twitter
          </button>
          <button className="w-64 h-9 rounded-md bg-[#333333] text-white">
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
