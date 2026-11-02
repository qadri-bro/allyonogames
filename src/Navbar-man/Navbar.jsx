
import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

import Logo from "../assets/images/yonogames.png";
import TelegramLogo from "../assets/images/telegram-join-button.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHouse,
  faClipboardUser,
  faEnvelope,
  faShieldHalved,
  faCircleExclamation,
  faTriangleExclamation,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { faTelegram } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Navigation links
  const navLinks = [
    {
      name: "Home",
      path: "/",
      icon: faHouse,
    },
    {
      name: "About",
      path: "/about",
      icon: faClipboardUser,
    },
    {
      name: "Contact Us",
      path: "/contact-us",
      icon: faEnvelope,
    },
    {
      name: "Disclaimer",
      path: "/disclaimer",
      icon: faTriangleExclamation,
    },
  ];

  return (
    <header className="header">

      {/* Header Top */}
      <div className="header-inner">

        <Link
          to="/"
          className="header-brand"
          aria-label="Yono Games home"
          onClick={closeMenu}
        >
          <img
            className="logo-top"
            src={Logo}
            alt="Yono Games logo"
          />

          <span className="header-brand-copy">
            <strong className="header-text">Yono Games</strong>

            <small className="header-tagline">
              App list, APK safety &amp; login guides
            </small>
          </span>
        </Link>

        {/* Header Buttons */}
        <div className="header-cta">

          <a
            className="telegram-header-link"
            href="https://t.me/allyonoappdownload"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join Yono Games Telegram"
          >
            <img
              className="telegram-top"
              src={TelegramLogo}
              alt="Join Telegram"
            />

            <FontAwesomeIcon className="icons"  icon={faTelegram} aria-hidden="true" />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="menu-toggle"
            type="button"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-controls="menuContainer"
            aria-expanded={menuOpen}
          >
            <FontAwesomeIcon
              icon={menuOpen ? faXmark : faBars}
              aria-hidden="true"
            />
          </button>

        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`menu-container ${menuOpen ? "show" : ""}`}
        id="menuContainer"
        aria-label="Mobile navigation"
        hidden={!menuOpen}
      >
        {navLinks.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `menu-item ${isActive ? "active" : ""}`
            }
            onClick={closeMenu}
          >
            <FontAwesomeIcon icon={item.icon} />
            {item.name}
          </NavLink>
        ))}

        <a
          href="https://t.me/allyonoappdownload"
          className="menu-item"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          <FontAwesomeIcon icon={faTelegram} />
          Join Telegram
        </a>
      </nav>

      {/* Desktop Navigation */}
      <nav className="navbar" aria-label="Main navigation">

        <div className="navbar-inner">

          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              <FontAwesomeIcon icon={item.icon} />
              {item.name}
            </NavLink>
          ))}

          <a
            href="https://t.me/allyonoappdownload"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTelegram} />
            Join Telegram
          </a>

        </div>

      </nav>

    </header>
  );
}

export default Navbar;
