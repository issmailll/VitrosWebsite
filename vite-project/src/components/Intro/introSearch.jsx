import React from "react";
import { AiOutlineSearch } from 'react-icons/ai';

function IntroSearch() {
  return (
    <>
      <div className="intro__search-container">
        <label className="label" htmlFor="intro__search-input">
          <AiOutlineSearch className="search-icon" />
          <input
            className="intro__search-input"
            type="search"
            placeholder="Поиск анализов, отделении и статей..."
          />
          <button type="submit" className="intro__search-button">
            Найти
          </button>
        </label>
      </div>
    </>
  );
}

export default IntroSearch;
