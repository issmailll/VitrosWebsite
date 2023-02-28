import React from "react";
import "./header.scss";
import HeaderTop from "./HeaderTop";
import HeaderLogo from "../../assets/Logotype.svg";
import bagShop from "../../assets/bagVector.svg";

function Header() {
  return (
    <>
      <div className="header">
        <HeaderTop />
        <div className="container">
          <div className="header__main">
            <a className="header__logo" href="#">
              <img src={HeaderLogo} alt="site-logo" />
            </a>
            <div className="header__nav">
              <ul className="header__list">
                <li className="header__list-item">
                  <a className="header__item-link" href="#">
                    Выездная лаборатория
                  </a>
                </li>
                <li className="header__list-item">
                  <a className="header__item-link" href="#">
                    Анализы
                  </a>
                </li>
                <li className="header__list-item">
                  <a
                    className="header__item-link header__item-link-after"
                    href="#"
                  >
                    Услуги
                  </a>
                </li>
                <li className="header__list-item">
                  <a className="header__item-link" href="#">
                    Франчайзинг
                  </a>
                </li>
                <li className="header__list-item">
                  <a
                    className="header__item-link header__item-link-after"
                    href="#"
                  >
                    О нас
                  </a>
                </li>
                <li className="header__list-item">
                  <a className="header__item-link" href="#">
                    Партнерство
                  </a>
                </li>
              </ul>
              <a className="header__nav-bagLink" href="#">
                <img src={bagShop} alt="bagVector" />
              </a>
              <button className="header__burger">
                <span className="header__burger-inner"></span>
                <span className="visually-hidden">Menu toggler button</span>
              </button>
              <a className="header__poluchit-link" href="#">
                Получить результаты
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
