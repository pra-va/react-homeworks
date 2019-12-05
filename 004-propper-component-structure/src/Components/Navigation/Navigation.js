import React from "react";

const Navigation = props => {
  return (
    <div className="container">
      <nav className="nav nav-pills nav-fill my-5">
        <a className="nav-item nav-link active m-3" href="/">
          Home
        </a>
        <a className="nav-item nav-link active m-3" href="/button-counter">
          Button Counter
        </a>
        <a className="nav-item nav-link active m-3" href="/countdown-timer">
          Countdown timer
        </a>
        <a className="nav-item nav-link active m-3" href="/admin">
          Admin
        </a>
        <a className="nav-item nav-link active m-3" href="/list">
          List
        </a>
        <a
          className="nav-item nav-link active m-3"
          href="/rotates"
          tabindex="-1"
          aria-disabled="true"
        >
          Rotates
        </a>
      </nav>
      {props.children}
    </div>
  );
};

export default Navigation;
