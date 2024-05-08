import { useState } from "react";
import { Link } from "react-router-dom";

import "./header.css";

import Sidebar from "../../components/Sidebar/index";

import { CgLayoutList } from "react-icons/cg";

export default function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  function toggleSidebar() {
    setSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className="container__sidebar">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Link to="/" className="title-header">
        Transportadora Lopes
      </Link>

      {!isSidebarOpen && (
        <CgLayoutList
          className="openSidebar"
          size={50}
          color="#fff"
          style={{ cursor: "pointer", margin: "auto 0 " }}
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
}
