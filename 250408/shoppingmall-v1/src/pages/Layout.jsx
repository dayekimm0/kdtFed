import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = ({ authenticate, setAuthenticate }) => {
  return (
    <>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Outlet />
    </>
  );
};

export default Layout;
