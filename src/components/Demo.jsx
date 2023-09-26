const Demo = () => {
  return (
    <div className="bg-[url('../src/assets/service-1.jpeg')] bg-no-repeat text-white overflow-x-hidden">
      <div className="flex gap-20 justify-center items-center py-28">
        <div>
          <img src="../src/assets/service-1.svg" alt="" />
        </div>
        <div className="w-[35%] flex flex-col gap-8">
          <h1 className="text-[48px] font-[700] leading-[56px]">
            Create Content in Single Click with AI Power
          </h1>
          <p className="text-[18px] font-[400] leading-[28px]">
            Give our AI a few descriptions and we all automatically create blog
            articles, product descriptions and more for you within just few
            second.
          </p>
          <div className="flex flex-col gap-5">
            <div className="flex gap-4">
              <div className="bg-[#4562ff] w-6 h-6 rounded-full p-1">
                <img
                  src="chrome-extension://bhlhnicpbhignbdhedgjhgdocnmhomnp/images/checkmark-icon.svg"
                  alt=""
                />
              </div>

              <p className="text-[18px] font-[400] leading-[27px]">
                Country Citizenship
              </p>
            </div>
            <div className="flex gap-4">
              <div className="bg-[#4562ff] w-6 h-6 rounded-full p-1">
                <img
                  src="chrome-extension://bhlhnicpbhignbdhedgjhgdocnmhomnp/images/checkmark-icon.svg"
                  alt=""
                />
              </div>
              <p>Settling In Country</p>
            </div>
            <div className="flex gap-4">
              <div className="bg-[#4562ff] w-6 h-6 rounded-full p-1">
                <img
                  src="chrome-extension://bhlhnicpbhignbdhedgjhgdocnmhomnp/images/checkmark-icon.svg"
                  alt=""
                />
              </div>
              <p>Entering & Leaving From Country</p>
            </div>
          </div>
          <button className="aai-gradient-outline-btn w-44" href="#hero__slide">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Demo;
