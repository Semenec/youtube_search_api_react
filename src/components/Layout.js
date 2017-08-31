import React from 'react';
import Header from '../containers/Header.js';


const Layout = ({ children }) => {
    return (
      <div>
        <Header />
        {children}
      </div>
    )
}
export default Layout
