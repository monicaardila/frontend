import React from "react";
import logo from "../Images/logo.png";
function Footer() {
  return (
    <div className="footer">
      <footer class="py-5 bg-dark fixed-bottom">
        <div class="container">
          <p class="m-0 text-center text-white">
            <img class="img-fluid rounded mb-4 mb-lg-0" src={logo} alt="logo" />
            DIGITURNOS &copy; 2022
          </p>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
