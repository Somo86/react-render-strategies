import React from 'react';

function Layout({children}) {
    return (
      <div className="grid">
        { children }
      </div>
    );
  }
  
  export default Layout;