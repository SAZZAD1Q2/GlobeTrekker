import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => (
  <div className="layout">
    <header className="navbar" />
    <main className="content">
      <Navbar />
      <Outlet />
    </main>
    <footer className="footer" />
  </div>
);

export default Layout;
