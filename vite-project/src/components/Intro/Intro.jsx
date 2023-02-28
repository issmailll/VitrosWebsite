import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide2Img from "../../assets/intro-slide-2.png";
import microscope from "../../assets/microscope.png";
import slide3Img from "../../assets/slider-3-img.png";
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
          <IntroSearch />
          <Slider {...settings}>
            {/* slide -1 -------------------------------------------------------------------------- */}
            <div className="intro__slide-wrapper intro__slide1-Wrapper">
              <div className="intro__text-wrapper">
                <p className="intro__subtitle">Многопрофильная Лаборатория </p>
                <h3 className="intro__title">
                  Более <span className="intro__title-span">500</span> видов
                  анализов
                </h3>
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
            {/* slide -1 finished ----------------------------------------------------------------- */}
            {/* slide -2 -------------------------------------------------------------------------- */}

            <div className="intro__slide-wrapper intro__slide2-Wrapper">
              <div className="intro__text-wrapper">
                <p className="intro__subtitle">Многопрофильная Лаборатория </p>

                <h3 className="intro__title">
                  Женский чек-ап. Скидка{" "}
                  <span className="intro__title-span">20%</span> весь декабрь
                </h3>
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
                  height="478"
                  src={slide2Img}
                  alt="microscope img"
                />
              </div>
            </div>

            {/* slide -2 finished ----------------------------------------------------------------- */}
            {/* slide -3 -------------------------------------------------------------------------- */}

            <div className="intro__slide-wrapper intro__slide1-Wrapper">
              <div className="intro__text-wrapper">
                <p className="intro__subtitle">Многопрофильная Лаборатория </p>

                <h3 className="intro__title">
                  Мужской чек-ап. Скидка{" "}
                  <span className="intro__title-span">20%</span> весь декабрь
                </h3>
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
                  height="478"
                  src={slide3Img}
                  alt="microscope img"
                />
              </div>
            </div>
            {/* slide -3 finished ----------------------------------------------------------------- */}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Intro;
