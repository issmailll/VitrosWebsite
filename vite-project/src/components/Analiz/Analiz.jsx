import React from "react";
import "./analiz.scss";

function Analiz() {
  return (
    <>
      <div className="analiz">
        <div className="container">
          <div className="analiz__text-wrapper">
            <div className="analiz__titlewrapper">
              <h2 className="analiz__title">Популярные анализы</h2>
              <p className="analiz__subtitle">
                Вы можете добавить нужные анализы в корзину
              </p>
            </div>
            <a className="analiz__link" href="#">
              Посмотреть все анализы (500)
            </a>
          </div>

          <ul className="analiz__list">
            <li className="analiz__list-item">
              <h3 className="analiz__item-title">COVID-19 (ПЦР)</h3>
              <a
                className="analiz__item-titleLink analiz__item-titleLinkCard1"
                href="#"
              >
                COVID-19
              </a>
              <div className="analiz__cost-wrapper">
                <p className="analiz__description">200 000 сум</p>
                <a className="analiz__item-link" href="#">
                  В корзину
                </a>
              </div>
            </li>
            <li className="analiz__list-item">
              <h3 className="analiz__item-title">
                COVID-19 (ПЦР) срочный (только в филиале Ганга)
              </h3>
              <a className="analiz__item-titleLink" href="#">
                COVID-19
              </a>
              <div className="analiz__cost-wrapper">
                <p className="analiz__description">500 000 сум</p>
                <a className="analiz__item-link" href="#">
                  В корзину
                </a>
              </div>
            </li>
            <li className="analiz__list-item">
              <h3 className="analiz__item-title">Общий анализ крови (ОАК)</h3>
              <a className="analiz__item-titleLink" href="#">
                Клинический анализ крови
              </a>
              <div className="analiz__cost-wrapper">
                <p className="analiz__description">50 000 сум</p>
                <a className="analiz__item-link" href="#">
                  В корзину
                </a>
              </div>
            </li>
            <li className="analiz__list-item">
              <h3 className="analiz__item-title">
                Беременность 1-триместр до 12 недель
              </h3>
              <a className="analiz__item-titleLink" href="#">
                УЗИ
              </a>
              <div className="analiz__cost-wrapper">
                <p className="analiz__description">200 000 сум</p>
                <a className="analiz__item-link" href="#">
                  В корзину
                </a>
              </div>
            </li>
          </ul>
          <a className="analiz__link analiz__linkMobileDesign " href="#">
            Посмотреть все анализы (500)
          </a>
        </div>
      </div>
    </>
  );
}
export default Analiz;
