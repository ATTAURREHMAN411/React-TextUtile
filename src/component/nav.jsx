import { useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: darkMode ? "#1a202c" : "#f7fafc",
    color: darkMode ? "white" : "black"
  };

  const linkStyle = {
    margin: "0 8px",
    textDecoration: "none",
    color: "black",
    transition: "color 0.3s"
  };

  const aboutLinkStyle = {
    ...linkStyle,
    color: "gray"
  };

  const toggleContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px"
  };

  const toggleSwitchStyle = {
    width: "36px",
    height: "20px",
    backgroundColor: darkMode ? "blue" : "#d1d5db",
    borderRadius: "999px",
    position: "relative",
    cursor: "pointer"
  };

  
  

  const toggleCircleStyle = {
    position: "absolute",
    top: "2px",
    left: darkMode ? "18px" : "2px",
    width: "16px",
    height: "16px",
    backgroundColor: "white",
    borderRadius: "50%",
    transition: "left 0.3s"
  };

 

  return (
    <nav style={navStyle}>
      <div style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#3C3D37" }}>TextUtils</div>
      <div>
        <a href="#" style={linkStyle}>Home</a>
        <a href="#" style={aboutLinkStyle}>About</a>
      </div>
      <div style={toggleContainerStyle}>
        <div style={toggleSwitchStyle} onClick={() => setDarkMode(!darkMode)}>
          <div style={toggleCircleStyle}></div>
        </div>
        <span style={{ color: "blue" }}>Dark mode</span>
      </div>
    </nav>
  
  );
}
