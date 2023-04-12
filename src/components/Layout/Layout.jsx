import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-[#ffe1bc] from-25% via-[#ffcfd1] via-50% to-[#f3c6f1] to-90%">
      <div className="grid h-[630px] w-[97%] grid-cols-6 overflow-hidden rounded-[2rem] bg-[#ffffff8a]">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
