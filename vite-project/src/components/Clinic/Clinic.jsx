import React from "react";
import "./clinic.scss";

function Clinic() {
  return (
    <>
      <div className="clink">
        <div className="clinic__container container">
          <div className="clinic__title-wrapper">
            <h2 className="clinic__title">О клинике</h2>
            <p className="clinic__subtitle">
              Невозможно представить современную медицину без диагностики, а
              диагностику без высокоточных клинических исследований. Только
              благодаря им врачи имеют возможность определить клиническую
              картину и поставить правильный диагноз.<br /><br />Лаборатория VITROS
              DIAGNOSTICS видит своей основной целью повышение уровня
              лабораторной диагностики получаемой нашими пациентами, до мирового
              уровня.
            </p>
          </div>
          <ul className="clinic__list">
            <li className="clink__list-item">
                <p className="clink__item-number">22 лет</p>
                <p className="clink__item-text">На рынке медицинских услуг</p>
            </li>
            <li className="clink__list-item">
                <p className="clink__item-number">24/7</p>
                <p className="clink__item-text">Экстренное обслуживание</p>
            </li>
            <li className="clink__list-item">
                <p className="clink__item-number">50 тыс+</p>
                <p className="clink__item-text">Довольных пациентов</p>
            </li>
            <li className="clink__list-item">
                <p className="clink__item-number">7+</p>
                <p className="clink__item-text">Стаж каждого из сотрудников</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Clinic;
