import React from "react";
import meme_generator_logo from "../images/meme_generator_logo.png";
import nyan_logo_right from "../images/nyan_navbar_right.gif";
import nyan_logo_left from "../images/nyan_navbar_left.gif";

export default function Navbar() {
  return (
    <div className="navbar">
      <img className="navbar_logo" src={meme_generator_logo} />
      <header className="navbar_title"> Meme Generator </header>
      <img className="navbar_nyan_right child bounce_left" src={nyan_logo_right} />
      <img className="navbar_nyan_left child bounce_right" src={nyan_logo_left} />
    </div>
  );
}
