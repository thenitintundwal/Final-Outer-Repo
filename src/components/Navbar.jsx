import { useRecoilValue, useSetRecoilState } from "recoil";
import { checkState } from "../../Store/Variables";
import { userName } from "../../Store/Getters";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/Firebase";
import { RxCross1 } from "react-icons/rx";
import ManageProfile from "./ManageProfile";
const Navbar = () => {
  const setLogin = useSetRecoilState(checkState);
  const getUserName = useRecoilValue(userName);
  const navigate = useNavigate();
  async function logout() {
    try {
      const response = await signOut(auth);
      return navigate("/");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className="bg-[#080E26] sticky top-0 z-20 px-4">
        <div className="text-white lg:flex lg:justify-between lg:items-center lg:w-[65%] py-4 lg:mx-auto">
          <div className="flex justify-between items-center overflow-hidden">
            <Link to="/">
              <img
                src="../src/assets/PostPilot.png"
                alt=""
                className="h-[76px] w-[75px] lg:h-[75px] lg:w-[85px] cursor-pointer"
              />
            </Link>
            {/* <i className="fa-solid fa-xmark lg:hidden visible text-[24px]"></i> */}
            <i className="fa-solid fa-bars lg:hidden visible text-[24px]"></i>
          </div>
          <div className="lg:flex gap-6 px-9 text-[16px] font-[500] lg:visible hidden">
            <Link to="/">Home</Link>
            <p className=" cursor-pointer">About Us</p>
            <p
              className=" cursor-pointer"
              onClick={() => {
                const navbar = document.getElementById("demo_section"); // Assuming 'navbar' is the id of your navbar element
                const navbarPosition = navbar.offsetTop;

                // Scroll to the navbar position
                window.scrollTo({
                  top: navbarPosition,
                  behavior: "smooth", // Smooth scrolling animation
                });
              }}
            >
              Demo
            </p>
            {/* <p>Pages</p> */}
            <Link to="/pricing">Pricing</Link>
            <Link to="/contactus">Contact</Link>
          </div>
          <div className="lg:flex flex-row gap-5 lg:visible hidden">
            {getUserName ? (
              <button className="aai-gradient-outline-btn" onClick={logout}>
                Logout
              </button>
            ) : (
              <>
                {" "}
                <button
                  className="text-[20px] font-[300] underline underline-offset-8"
                  onClick={() => {
                    setLogin({
                      isSignUpOpen: false,
                      isLoginOpen: true,
                    });
                  }}
                >
                  Login
                </button>
                <div className="lg:flex lg:justify-center lg:items-center lg:visible hidden cursor-pointer">
                  <div className="bg-[orange] w-10 h-10 rounded-full">
                    <img
                      src="../src/assets/profile.png"
                      className=" rounded-full"
                      alt=""
                    />
                  </div>
                </div>
                <button
                  className="aai-gradient-outline-btn"
                  onClick={() => {
                    setLogin({
                      isLoginOpen: false,
                      isSignUpOpen: true,
                    });
                  }}
                >
                  Signup
                </button>
              </>
            )}
          </div>
        </div>
        {/* <div className="absolute text-white bg-[#080E26] border border-white rounded-2xl lg:mx-0 mx-3 px-10 py-10 top-28 lg:left-[46%]">
          <div className="flex lg:flex-row flex-col gap-8">
            <RxCross1 className="text-[25px] text-end absolute right-5 top-4 cursor-pointer" />
            <div className="bg-[orange] w-10 h-10 rounded-full">
              <img
                src="../src/assets/profile.png"
                className=" rounded-full"
                alt=""
              />
            </div>
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
        </div> */}
      </div>
      {/* <div className="w-[80%] lg:hidden visible h-screen bg-[#04091E] absolute z-50 mt-[-33%]">
        <div className="text-white">
          <Link to="/">
            <img
              src="../src/assets/PostPilot.png"
              alt=""
              className="h-[76px] w-[75px] lg:h-[75px] lg:w-[85px] cursor-pointer"
            />
          </Link>
          <div className="text-[18px] font-[400] leading-normal py-10 px-6 flex flex-col gap-5">
            <Link to="/">Home</Link>
            <hr />
            <p>About Us </p>
            <hr />
            <p>Demo</p>
            <hr />
            <Link to="/pricing">Pricing</Link>
            <hr />
            <Link to="/contactus">Contact</Link>
            <hr />
          </div>
          <div className="flex flex-col gap-8">
            <button
              className="text-[20px] font-[300] underline underline-offset-8 pr-32"
              onClick={() => {
                setLogin({
                  isSignUpOpen: false,
                  isLoginOpen: true,
                });
              }}
            >
              Login
            </button>
            <button
              className="aai-gradient-outline-btn w-[50%] ml-4"
              onClick={() => {
                setLogin({
                  isLoginOpen: false,
                  isSignUpOpen: true,
                });
              }}
            >
              Signup
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
