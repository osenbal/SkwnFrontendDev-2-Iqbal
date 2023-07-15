import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <main className="container">{children}</main>

      {/* create navigation mobile */}
      <nav className="nav_mobile">
        <ul>
          <li>
            <a href="/">
              <img
                className="menu_img"
                src="./assets/img/home_menu.png"
                alt="home"
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                className="menu_img"
                src="./assets/img/history_menu.png"
                alt="history"
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                className="menu_img"
                src="./assets/img/message_menu.png"
                alt="message"
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                className="menu_img"
                src="./assets/img/profile_menu.png"
                alt="profile"
              />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MainLayout;
