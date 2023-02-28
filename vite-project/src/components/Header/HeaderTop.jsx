import React from "react";

function HeaderTop() {
  return (
    <>
      <div className="clr">
        <div className="container">
          <div className="header__contact">
            <div className="header__num-wrapper">
              <a className="header__nums" href="tel:+15551234567">
                +998 (71) 203-00-77
              </a>
              <a className="header__nums" href="#">
                Пн-Сб: 08:00 - 18:00
              </a>
              <a className="header__nums" href="#">
                Время сдачи анализов с 8:00- 11:30
              </a>
            </div>
            <ul className="header__lang-list">
              <li className="header__lang-item">
                <a className="header__lang-links" href="#">
                  Ру |
                </a>
              </li>
              <li className="header__lang-item">
                <a className="header__lang-links" href="#">
                  Уз |
                </a>
              </li>
              <li className="header__lang-item">
                <a className="header__lang-links" href="#">
                  EN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderTop;
