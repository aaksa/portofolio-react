import React from "react";

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className = "" }) => {
  return (
    <nav className={`navigation ${className}`}>
      <div className="navigation-container">
        <div className="brand">
          <h1>ROBERT GARCIA</h1>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
