"use client";
import Link from "next/link";
import "./navbar.scss";
import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { BsTwitter, BsFillPlayFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

import React from "react";
let buttonToggle = () => {
  const button = document.getElementById("menu-button").classList,
    isopened = "is-opened";
  let isOpen = button.contains(isopened);
  if (isOpen) {
    button.remove(isopened);
  } else {
    button.add(isopened);
  }
};

const Navbar = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  const action = () => {
    setTimeout(toggleModal, 900);
  };
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Seyi.dev</h1>
      </div>
      <div className="menu" onClick={toggleModal}>
        <div className="container">
          <button
            className="button is-text"
            id="menu-button"
            onClick={buttonToggle}
          >
            <div className="button-inner-wrapper">
              <span className="icon menu-icon"></span>
            </div>
          </button>
        </div>
      </div>
      {modal && (
        <div className="modal">
          <div className="modalContent">
            <div className="links">
              <Link onClick={action} href={"/"}>
                <h1 onClick={buttonToggle}>Home</h1>
              </Link>
              <Link onClick={action} href={"/work"}>
                <h1 onClick={buttonToggle}>Work</h1>
              </Link>
              <Link onClick={action} href={"/work"}>
                <h1 onClick={buttonToggle}>Linked in</h1>
              </Link>
              <div className="social">
                <h1>Connect With Me</h1>
                <div className={"socials"}>
                  <div className={"socialLink"}>
                    <span>
                      <a href="https://github.com/Seyi-dev1" target="_blank">
                        <BsGithub className={"icon"} />
                      </a>
                    </span>
                  </div>
                  <div className={"socialLink"}>
                    <span>
                      <a href="https://twitter.com/oswagz19">
                        <BsTwitter className={"icon"} />
                      </a>
                    </span>
                  </div>
                  <div className={"socialLink"}>
                    <span>
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=samoluwaseyi25@gmail.com"
                        target="_blank"
                      >
                        <MdEmail className={"icon"} />
                      </a>
                    </span>
                  </div>
                  <div className={"socialLink"}>
                    <span>
                      <a href="https://www.linkedin.com/in/samuel-oluwaseyi-26883a195/">
                        <FaLinkedinIn className={"icon"} />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
