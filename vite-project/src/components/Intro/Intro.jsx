import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import microscope from "../../assets/microscope.png";
import "./intro.scss";
import IntroSearch from "./introSearch";

function Intro() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="intro">
        <div className="intro__container container">
        <IntroSearch/>
          <Slider {...settings}>
            <div className="intro__slide-wrapper intro__slide1-Wrapper">
              <div className="intro__text-wrapper">
                <p className="intro__subtitle">Многопрофильная Лаборатория </p>
                <h3 className="intro__title">Более <span className="intro__title-span">500</span> видов анализов</h3>
                <a className="intro__link-analiz" href="#">
                  Представить анализ
                </a>
                <a className="intro__link-bolshe" href="#">
                  Узнать больше
                </a>
              </div>
              <div className="intro__img-wrapper">
                <img
                  className="intro__img-microscope"
                  width="420"
                  height="420"
                  src={microscope}
                  alt="microscope img"
                />
              </div>
            </div>

            <div className="intro__slide-wrapper intro__slide2-Wrapper">
              <h3>Slide 2</h3>
            </div>
            <div className="intro__slide-wrapper intro__slide1-Wrapper">
              <h3>Slide 3</h3>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Intro;
