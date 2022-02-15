import React, { useEffect, useState } from 'react';
import './app.css';
import SidebarItem from './sidebaritem';
import Slider from './slider';

function App() {
  return (
    <div className="container">
      <div className="main-image">
      </div>
      <div className="sidebar">
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
      </div>
      <Slider />
    </div>
  );
}

export default App;
