const Navbar = () => {
  return (
    <div className="bg-[#080E26] sticky top-0 z-20 px-4 overflow-x-hidden">
      <div className="text-white lg:flex lg:justify-between lg:items-center lg:w-[65%] py-4 lg:mx-auto">
        <div className="flex justify-between items-center overflow-hidden">
          <img
            src="../src/assets/logo-m.svg"
            alt=""
            className="h-[46px] w-[55px] lg:h-[55px] lg:w-[55px]"
          />
          <i className="fa-solid fa-bars lg:hidden visible text-[16px]"></i>
        </div>
        <div className="lg:flex gap-6 px-9 text-[16px] font-[500] lg:visible hidden">
          <p>Home</p>
          <p>About Us</p>
          <p>Services</p>
          <p>Pages</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className="lg:flex flex-row gap-5 lg:visible hidden">
          <button className="text-[20px] font-[300] underline underline-offset-8">
            Login
          </button>
          <button className="aai-gradient-outline-btn">Signup</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
