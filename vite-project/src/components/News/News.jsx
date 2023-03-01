import React from "react";
import "./news.scss";
import newsImg1 from "../../assets/newsImg-1.png";
import newsImg2 from "../../assets/newsImg-2.png";
import newsImg3 from "../../assets/newsImg-3.png";

function News() {
  return (
    <>
      <div className="news container">
        <div className="news__title-wrapper">
          <div>
            <h2 className="news__title">Акции и новости</h2>
            <p className="news__subtitle">
              Спешите стать участниками акции и новости нашей клиники
            </p>
          </div>
          <a className="news__link analiz__link" href="#">
            Посмотреть все новости (34)
          </a>
        </div>
        <ul className="news__list">
          <li className="news__item">
            <img className="news__item-img" src={newsImg1} alt="" />
            <div className="news__item-textWrapper">
              <p className="news__item-data">20.10.2022</p>
              <h3 className="news__item-title">Выездная лаборатория Vitros</h3>
              <p className="news__item-description">
                Многие просили об услуге выездной лаборатории, и мы не могли не
                прислушаться к вам, наши дорогие...
              </p>
            </div>
          </li>
          <li className="news__item">
            <img className="news__item-img" src={newsImg2} alt="" />
            <div className="news__item-textWrapper">
              <p className="news__item-data">11.10.2022</p>
              <h3 className="news__item-title">
                Назарова Рахима Саидовна: Врач фиброскан
              </h3>
              <p className="news__item-description">
                Многие просили об услуге выездной лаборатории, и мы не могли
                не...
              </p>
            </div>
          </li>
          <li className="news__item">
            <img className="news__item-img" src={newsImg3} alt="" />
            <div className="news__item-textWrapper">
              <p className="news__item-data">20.10.2022</p>
              <h3 className="news__item-title">
                Здоровый сон — залог хорошего настроения и продуктивного дня.
              </h3>
              <p className="news__item-description">
                Многие просили об услуге выездно...
              </p>
            </div>
          </li>
          <li className="news__item">
            <img className="news__item-img" src={newsImg1} alt="" />
            <div className="news__item-textWrapper">
              <p className="news__item-data">20.10.2022</p>
              <h3 className="news__item-title">Выездная лаборатория Vitros</h3>
              <p className="news__item-description">
                Многие просили об услуге выездной лаборатории, и мы не могли не
                прислушаться к вам, наши дорогие...
              </p>
            </div>
          </li>
        </ul>
        <a className="analiz__link analiz__linkMobileDesign " href="#">
          Посмотреть все анализы (34)
        </a>
      </div>
    </>
  );
}
export default News;
