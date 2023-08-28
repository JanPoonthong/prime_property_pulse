import Logo from "./logo/Logo";

import Page from "./page/Page";
import Login from "./auth_button/Login";
import SignUp from "./auth_button/SignUp";

import "./Header.css";


function Header() {
  return (
    <nav>
        <a href="/">
          <Logo />
        </a>
      <div className="centered">
        <Page />
      </div>
        <Login />
        <SignUp />
    </nav>
  );
}

export default Header;
