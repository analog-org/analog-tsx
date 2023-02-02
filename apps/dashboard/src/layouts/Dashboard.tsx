import MainFooter from "../components/Footer";
import NavBar from "../../app/Navbar";
import SideBar from "../components/Sidebar";
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