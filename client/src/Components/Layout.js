import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, excludeHeaderFooter }) => {
  return (
    <div className="layout">
      {!excludeHeaderFooter && <Header />}
      <main>{children}</main>
      {!excludeHeaderFooter && <Footer />}
    </div>
  );
};

export default Layout;
