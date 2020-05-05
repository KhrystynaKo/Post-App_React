import React from "react";
import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  return (
    <main className="uk-main">
      <Navbar />
      <div className="uk-section">
        <div className="uk-container">{children}</div>
      </div>
    </main>
  );
}

export default MainLayout;
