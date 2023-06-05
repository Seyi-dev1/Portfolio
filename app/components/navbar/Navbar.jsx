"use client";
import Link from "next/link";
import "./navbar.scss";
import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { BsTwitter, BsFillPlayFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

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
    setTimeout(toggleModal, 500);
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
                      <BsGithub className={"icon"} />
                    </span>
                  </div>
                  <div className={"socialLink"}>
                    <span>
                      <BsTwitter className={"icon"} />
                    </span>
                  </div>
                  <div className={"socialLink"}>
                    <span>
                      <MdEmail className={"icon"} />
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
