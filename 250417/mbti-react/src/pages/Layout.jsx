// 페이지 라우팅 목적
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
