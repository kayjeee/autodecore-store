import { FaBars, FaTimes } from "react-icons/fa";

import { SearchBox } from "./SearchBox";
import { NavButtons } from "./NavButtons";

import "./header.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useFixBody } from "../../hooks";
import { useAuth, useData, useToast } from "../../context";

import { BtnIcon } from "../buttons";

export function Header() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  function toggleSideMenu() {
    setIsSideMenuOpen((s) => !s);
  }

  useFixBody(isSideMenuOpen);

  const {
    state: { userName, token },
    handleLogout,
  } = useAuth();
  const { setToastMessage } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  const { dispatch: dataDispatch } = useData();

  return (
    <header className="header">
      <div className="hy-header-wrapper">
        <nav className="hy-navbar px-sm pb-sm pt-1">
          <div className="hy-navbar-links-container  mb-sm">
            <div className="align-center">
              <BtnIcon cnames="btn hy-hamburger-btn" onClick={toggleSideMenu}>
                <FaBars />
              </BtnIcon>
              <Link to="/">
                <div className="hy-logo">
                  <span>
                   Auto<span style={{ color: "#FFDE59" }}>Decore</span>
                  </span>
                </div>
              </Link>
            </div>
            <NavButtons />
          </div>

        </nav>
      </div>

      <div className={`side-menu ${isSideMenuOpen ? "isOpen" : null}`}>
        <div>
       

 
        </div>

        
      </div>
    </header>
  );
}
