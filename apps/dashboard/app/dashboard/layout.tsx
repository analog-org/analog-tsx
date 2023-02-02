import MainFooter from "../../src/components/Footer";
import NavBar from "../Navbar";
import SideBar from "../../src/components/Sidebar";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
}

const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-gray-800">
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className="flex-grow">{children}</div>
      </div>
      <MainFooter />
    </div>
  );
};

export default DashboardLayout;