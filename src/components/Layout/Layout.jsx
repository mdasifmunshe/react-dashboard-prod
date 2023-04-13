import Sidebar from "../Sidebar/Sidebar";
import SidebarSmall from "../Sidebar/SidebarSmall";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-[#ffe1bc] from-25% via-[#ffcfd1] via-50% to-[#f3c6f1] to-90%">
      <div className="h-[630px] w-[97%] grid-cols-5 overflow-y-scroll rounded-[2rem] bg-[#ffffff8a] xl:grid xl:grid-cols-6 xl:overflow-hidden">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
