import React from "react";
import "./reg.scss";

function Reg() {
  return (
    <>
      <div className="container">
        <div className="reg">
          <div className="reg__title-wrapper">
            <h2 className="reg__title">Онлайн-запись на услуги</h2>
            <p className="reg__subtitle">
              Оставьте онлайн-заявку и мы перезвоним вам в течение 5 минут!
            </p>
          </div>
          <form action="send" className="reg__form">
            <ul className="reg__form-list">
              <li className="reg__form-item">
                <label
                  className="labelBlock reg__formName-label"
                  htmlFor="name"
                >
                  Ваш полное имя
                </label>
                <input
                  className="reg__formName-input reg__formInputStyle"
                  placeholder="ФИО"
                  type="text"
                  required
                />
              </li>
              <li className="reg__form-item">
                <label
                  className="labelBlock reg__formMobile-label"
                  htmlFor="mobile"
                >
                  Номер телефона
                </label>
                <input
                  className="reg__formMobile-input reg__formInputStyle"
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="+998"
                  required
                />
              </li>
              <li className="reg__form-item labelBlock">
                <label
                  className="labelBlock reg__formFilial-label"
                  htmlFor="filial"
                >
                  Филиал
                </label>
                <select
                  className="reg__formInputStyle reg__filial-input"
                  id="filial"
                //   name="filial"
                >
                  <option value="filial1">Ганга</option>
                  <option value="filial2">Бадамзар</option>
                  <option value="filial3">ТашМИ</option>
                </select>
                <input
                  required
                  type="text"
                  style={{ display: "none" }}
                />
                <br /> <br />
              </li>
              <li className="reg__form-item">
                <label
                  className="labelBlock reg__formAnaliz-label"
                  htmlFor="analiz"
                >
                  Желаемые анализ
                </label>
                <select
                  className="reg__formInputStyle reg__4input"
                  id="analiz"
                  name="analiz"
                >
                  <option value="analiz1">Беременность 3-триместр...</option>
                  <option className="reg__option1" value="analiz2">
                    {" "}
                    Время свертываемости крови. Анализ крови с ретикуку
                  </option>
                  <option value="analiz3">
                    Развернутый общий анализ крови с ретикулоцитами
                  </option>
                  <option value="analiz4">Клинический анализ крови</option>
                </select>
                <input
                  className="reg__formInputStyle"
                  required
                  type="text"
                  style={{ display: "none" }}
                />
                <br /> <br />
              </li>
            </ul>
            <div className="reg__btn-wrapper">
              <button type="submit" className="reg__form-button">
                Отправить
              </button>
              <p className="reg__formBtn-text">
                Нажимая кнопку “Отправить”, вы даете <br /> согласие на
                обрабортку персональных данных
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Reg;
