import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <div className="layout">
    <header className="navbar" />
    <main className="content">
      <Outlet />
    </main>
    <footer className="footer" />
  </div>
);

export default Layout;
