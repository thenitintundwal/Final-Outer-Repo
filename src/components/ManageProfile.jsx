import { RxCross1 } from "react-icons/rx";

const ManageProfile = () => {
  return (
    <div className="absolute text-white bg-[#080E26] border border-white rounded-2xl lg:mx-0 mx-3 px-10 py-10 top-28 lg:left-[46%]">
      <div className="flex lg:flex-row flex-col gap-8">
        <RxCross1 className="text-[25px] text-end absolute right-5 top-4 cursor-pointer" />
        <div className="bg-[orange] w-10 h-10 rounded-full"></div>
        <div>
          <div></div>
          <div>
            <div className="flex flex-col gap-4">
              <h1 className="text-[28px] lg:text-[32px] font-[400] leading-[28px]">
                Amanda Lee
              </h1>
              <p className="text-[18px] lg:text-[22px] font-[400] leading-[16px]">
                amandalee@example.com
              </p>
            </div>
            <div className="my-3">
              <div className="flex gap-3 items-center my-5">
                <i className="fa-solid fa-gear"></i>
                <p>Manage Account</p>
              </div>
              <div className="flex gap-3 items-center">
                <i className="fa-solid fa-right-from-bracket"></i>
                <p>Sign Out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProfile;
