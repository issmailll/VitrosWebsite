import React from "react";
import "./servises.scss";
import servisesLab from "../../assets/servises-lab-img.svg";
import servisesFabImg from "../../assets/servisesFabImg.svg";
import servisesUlImg from "../../assets/servisesUlImg.svg";

function Servises() {
  return (
    <>
      <div className="servises">
        <div className="container">
          <h2 className="servises__title">Услуги</h2>
          <p className="servises__subtitle">
            Наш профессиональные услуги для вас
          </p>
          <ul className="servises__list">
            <li className="servises__list-item">
              <img
                className="servises__item-img"
                src={servisesLab}
                alt="servises labaratory icon"
              />
              <h3 className="servises__item-title">Лабораторная диагностика</h3>
            </li>
            <li className="servises__list-item">
              <img
                className="servises__item-img"
                src={servisesFabImg}
                alt="servises fabrica cookies icon"
              />
              <h3 className="servises__item-title">Фибросканирование печени</h3>
            </li>
            <li className="servises__list-item">
              <img
                className="servises__item-img"
                src={servisesUlImg}
                alt="servises diagnostic icon"
              />
              <h3 className="servises__item-title">
                Ультразвуковая диагностика
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Servises;
