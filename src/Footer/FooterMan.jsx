
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Whtasapp from "../assets/images/whatsapp-channnel.webp"

import {
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import {
  faSquareShareNodes,
  faShareFromSquare,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {

  const shareContent = async () => {
    const shareData = {
      title: "All New Yono Games",
      text: "Explore All New Yono Games and discover gaming app information.",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        alert("Website link copied successfully!");
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Sharing failed:", error);
      }
    }
  };

  return (
    <footer>
      <div className="page-wrapper">

        {/* Telegram Section */}
        <div className="group-card telegram-card">

          <span style={{ display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon
              icon={faTelegram}
              className="icon-telegram"
            />

            <span className="join-text">
              Join Our Telegram Channel for New Yono Apps
            </span>
          </span>

          <a
            className="seoquake-nofollow"
            href="https://t.me/allyonoappdownload"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTelegram} />
            {" "}Join Now
          </a>

        </div>

        <div className="main-background">

          {/* Share Section */}
          <div className="group-card1 telegram-card1">

            <span style={{ display: "flex", alignItems: "center" }}>
              <span
                onClick={shareContent}
                className="join-text1"
                role="button"
                style={{ cursor: "pointer" }}
              >
                <FontAwesomeIcon icon={faSquareShareNodes} />
                {" "}Share This Page With Friends
              </span>
            </span>

            <button
              type="button"
              className="seoquake-nofollow"
              onClick={shareContent}
            >
              <FontAwesomeIcon icon={faShareFromSquare} />
              {" "}Click Here to Share
            </button>

          </div>

          {/* Footer Navigation */}
          <div className="center-text">

            <a className="link-style" href="/about.html">
              About Us
            </a>

            {"   "}

            <a className="link-style" href="/disclamer.html">
              Disclaimer
            </a>

            {"   "}

            <a className="link-style" href="/contact-us.html">
              Contact Us
            </a>

            <br />

            <a className="link-style" href="/privacy_policy.html">
              Privacy Policy
            </a>

            {"   "}

            <a
              className="link-style"
              href="/term_and_condition.html"
            >
              Terms & Conditions
            </a>

          </div>

          {/* Safety Notice */}
          <p className="footer-safety">
            18+ only. Check the national and local rules and current
            app terms. Never share OTPs or a UPI PIN, and never pay
            a separate withdrawal release fee.
          </p>

          {/* Social Media Section */}
          <div className="small-center-text">

            <div className="wt">
              <a
                id="tg"
                href="https://whatsapp.com/channel/0029VaeYMKrL7UVOat4ZSW3r"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <img
                  src={Whtasapp}
                  alt="All New Yono Games WhatsApp Channel"
                />
              </a>
            </div>

            <h2>Join Our Telegram:</h2>

            <a
              className="footer-link"
              href="https://t.me/allyonoappdownload"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <h3>https://t.me/allyonoappdownload</h3>
            </a>

            <br />

            Copyright © AllNewYonoGames.org All Rights Reserved

          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
