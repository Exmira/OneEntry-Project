import React from "react";
import DarkNav from "./DarkNav";

export default function DarkMenu({ setDarkMenuOpen, darkMenuOpen }) {
  return (
    <div className={`desk-menu-wrapper ${darkMenuOpen ? "body-visible" : ""} `}>
      <div className="desk-menu-area text-center">
        <button className="menu-toggle2" onClick={() => setDarkMenuOpen(false)}>
          <img src="assets/img/icon/close.svg" alt="img" />
        </button>
        <div className="desk-menu">
          <ul>
            <DarkNav />
          </ul>
        </div>
      </div>
    </div>
  );
}
