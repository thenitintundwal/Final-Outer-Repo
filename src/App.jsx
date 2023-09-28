import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import AddProjects from "./components/AddProjects";
import Card from "./components/Card";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import SelectApp from "./components/SelectApp";
import "./index.css";
import { auth } from "../Firebase/Firebase";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
  createRoutesFromElements,
} from "react-router-dom";
import { connectedCredentials } from "../Store/Variables";
import { onAuthStateChanged } from "firebase/auth";
import Payment from "./components/Payment";
import Contact from "./components/Contact";
import DashBoard from "./components/DashBoard";
import ManageProfile from "./components/ManageProfile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Nav />}>
      <Route path="/" element={<LandingPage />} />
      <Route path="/projectsection" element={<AddProjects />} />
      <Route path="/pricing" element={<Payment />} />
      <Route path="/contactus" element={<Contact />} />
      <Route path="/projectdashboard" element={<DashBoard />} />
    </Route>
  )
);

function App() {
  const setUserCredentials = useSetRecoilState(connectedCredentials);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const id = await auth.currentUser.getIdToken();
        console.log(user.stsTokenManager.accessToken);
        setUserCredentials({
          name: user.displayName,
          token: id,
        });
      } else {
        setUserCredentials({
          name: null,
          token: null,
        });
      }
    });
  }, []);

  return (
    <>
      {/* <LandingPage /> */}
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
function LandingPage() {
  return (
    <>
      {/*  <Hero />
      <Card />
      <Demo /> */}
      {/* <ManageProfile /> */}
      {/* <AddProjects /> */}
      <DashBoard />
      {/* <Payment /> */}
      {/* <Contact /> */}
      {/* <Error /> */}
    </>
  );
}
function Nav() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
