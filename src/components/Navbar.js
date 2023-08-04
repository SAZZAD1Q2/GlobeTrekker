/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { FaAngleLeft, FaMicrophone } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';

function Navbar() {
  return (
    <>
      <nav className="nav-container">
        <FaAngleLeft className="arrow" />
        <span className="year">2015</span>
        <p className="Views">Country</p>
        <div className="settings">
          <FaMicrophone />
          <AiFillSetting />
        </div>
      </nav>

    </>
  );
}

export default Navbar;
