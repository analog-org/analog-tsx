import MainFooter from "./Footer";
import NavBar from "../../Navbar";
import SideBar from "./Sidebar";
import { ReactNode } from "react";

type LayoutProps = {
  children: React.ReactNode;
}

export default function DashboardLayout ({ children }: LayoutProps){
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
