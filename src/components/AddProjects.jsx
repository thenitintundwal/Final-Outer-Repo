import Navbar from "./Navbar";
import SelectApp from "./SelectApp";
const AddProjects = () => {
  return (
    <div className="bg-[url('../src/assets/service-1.jpeg')] h-screen overflow-scroll text-white">
      <Navbar />
        {/* <SelectApp /> */}
      <div className="flex justify-center flex-wrap gap-10 pt-[10rem] py-20">
        <div className="bg-[#111629] w-[28rem] h-[20rem] flex gap-4 flex-col justify-center items-center rounded-3xl border border-white">
          <i className="fa-solid fa-plus text-[24px]"></i>
          <p>Add Project</p>
        </div>
        <div className="bg-[#111629] w-[28rem] h-[20rem] flex justify-center items-center rounded-3xl border border-white flex-col gap-6">
          <h1 className="text-[24px] font-[400]">Project Name</h1>
          <div className="flex gap-8">
            <i className="fa-brands fa-linkedin text-blue-600 text-[50px]"></i>
            <i className="fa-brands fa-twitter text-blue-600 text-[50px]"></i>
          </div>
        </div>
        {/*  <div className="bg-[#111629] w-[28rem] h-[20rem] flex justify-center items-center rounded-3xl border border-white">
          <p>Add Project</p>
        </div>
        <div className="bg-[#111629] w-[28rem] h-[20rem] flex justify-center items-center rounded-3xl border border-white">
          <p>Add Project</p>
        </div> */}
        {/* <div className="bg-[#111629] w-[28rem] h-[20rem] flex justify-center items-center rounded-3xl border border-white">
          <p>Add Project</p>
        </div>
        <div className="bg-[#111629] w-[28rem] h-[20rem] flex justify-center items-center rounded-3xl">
          <p>Add Project</p>
        </div>
        <div className="bg-[#111629] w-[28rem] h-[20rem] flex justify-center items-center rounded-3xl">
          <p>Add Project</p>
        </div> */}
      </div>
    </div>
  );
};

export default AddProjects;
