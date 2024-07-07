import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="px-[3em] py-[1.5em] flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
