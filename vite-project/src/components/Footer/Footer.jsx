import React from "react";
import "./footer.scss";
import SiteLogo from "../../assets/Logotype.svg";
import DatacronImg from "../../assets/datacron-img.svg";
import instagramLogo from "../../assets/instagramLogo.svg";
import twitterLogo from "../../assets/twitterLogo.svg";
import youtubeLogo from "../../assets/youtubeLogo.svg";
import facebookLogo from "../../assets/facebookLogo.svg";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <a className="footer__logo-wrapper" href="#">
            <img className="footer__logo-img" src={SiteLogo} alt="site logo" />
            </a>
            <ul className="footer__list">
              <li className="foote__list-item">
                <h3 className="footer__item-title">Пациентам</h3>
                <a className="footer__item-link" href="#">Получить результаты анализов</a>
                <a className="footer__item-link" href="#">Подготовка к анализам</a>
                <a className="footer__item-link" href="#">Новости</a>
              </li>
              <li className="foote__list-item">
                <h3 className="footer__item-title">Партнерам</h3>
                <a className="footer__item-link" href="#">Страховые компании</a>
                <a className="footer__item-link" href="#">Партнерство</a>
              </li>
              <li className="foote__list-item">
                <h3 className="footer__item-title">О Компании</h3>
                <a className="footer__item-link" href="#">О нас</a>
                <a className="footer__item-link" href="#">Вакансии</a>
              </li>
            </ul>
            <div className="footer__socialMain-wrapper">
              <h3 className="footer__social-title">Социальные сети</h3>
              <div className="footer__social-wrapper">
                <a className="footer__social-link" href="#">
                    <img className="footer__social-img" src={instagramLogo} alt="instagram logo" />
                </a>
                <a className="footer__social-link" href="#">
                    <img className="footer__social-img" src={facebookLogo} alt="facebook logo" />
                </a>
                <a className="footer__social-link" href="#">
                    <img className="footer__social-img" src={twitterLogo} alt="twitter logo" />
                </a>
                <a className="footer__social-link" href="#">
                    <img className="footer__social-img" src={youtubeLogo} alt="you tube logo" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer__btm-wrapper">
            <p className="footer__btm-text">© 2022 Vitros . Все права защищены.</p>
            <div className="footer__datacron-wrapper">
              <p className="footer__btm-text">Made by</p>
              <img width="64" height="34" className="footer__btm-datacron-img" src={DatacronImg} alt="datacron logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
