import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css';

class MenuBar extends Component {

  render() {
    return (
      <div id="menu-bar-parent">
        <div className="menu-bar-center">
          <Link to="/selling">selling</Link> | <Link to="/seeking">seeking</Link> | <Link to="/post">post</Link>
        </div>
      </div>
    )
  }
}

export default MenuBar;