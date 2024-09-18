import React from "react";
import "../styles/Portfolio.scss";

export default function Portfolio() {
  return (
    <section className="portfolio__container">
      <section className="portfolio__wrapper">
        <section className="portfolio__group-elements">
          <section className="portfolio__text-info">
            <h5 className="section__small-title">PORTFOLIO</h5>
            <h1 className="section__big-title">Awesome Portfolio</h1>
          </section>
          <section className="portfolio__buttons">
            <ul className="portfolio__list">
              <li className="portfolio__list-item">
                <button className="portfolio__button active">
                  <p className="section__bold-paragraph">All</p>
                </button>
              </li>
              <li className="portfolio__list-item">
                <button className="portfolio__button">
                  <p className="section__bold-paragraph">Mobile apps</p>
                </button>
              </li>
              <li className="portfolio__list-item">
                <button className="portfolio__button">
                  <p className="section__bold-paragraph">Cloud</p>
                </button>
              </li>
              <li className="portfolio__list-item">
                <button className="portfolio__button">
                  <p className="section__bold-paragraph">Data Analysis</p>
                </button>
              </li>
              <li className="portfolio__list-item">
                <button className="portfolio__button">
                  <p className="section__bold-paragraph">Hosting</p>
                </button>
              </li>
            </ul>
          </section>
        </section>
        <section className="portfolio__images">
          <ul className="portfolio__images-list portfolio__images-list--1">
            <li className="portfolio__images-item portfolio__images-item--1">
              <img
                src="../assets/img/online_gifting.png"
                alt="gift"
                className="portfolio__images-item__image "
              />
            </li>
            <li className="portfolio__images-item portfolio__images-item--2">
              <img
                src="../assets/img/online_gifting.png"
                alt="gift"
                className="portfolio__images-item__image "
              />
            </li>
            <li className="portfolio__images-item portfolio__images-item--3">
              <img
                src="../assets/img/online_gifting.png"
                alt="gift"
                className="portfolio__images-item__image "
              />
            </li>
            <li className="portfolio__images-item portfolio__images-item--4">
              <img
                src="../assets/img/online_gifting.png"
                alt="gift"
                className="portfolio__images-item__image "
              />
            </li>
          </ul>
          <ul className="portfolio__images-list portfolio__images-list--2">
            <li className="portfolio__images-item portfolio__images-item--5">
              <img
                src="../assets/img/online_gifting.png"
                alt="gift"
                className="portfolio__images-item__image "
              />
            </li>
            <li className="portfolio__images-item portfolio__images-item--6">
              <img
                src="../assets/img/online_gifting.png"
                alt="gift"
                className="portfolio__images-item__image "
              />
            </li>
            <li className="portfolio__images-item portfolio__images-item--7">
              <img
                src="../assets/img/online_gifting.png"
                alt="gift"
                className="portfolio__images-item__image "
              />
            </li>
            <li className="portfolio__images-item portfolio__images-item--8">
              <img
                src="../assets/img/online_gifting.png"
                alt="gift"
                className="portfolio__images-item__image "
              />
            </li>
          </ul>
        </section>
      </section>
      <button className="section__button--down-button portfolio__another-button">
        <img
          src="../assets/img/arrow_down.png"
          alt="arow_don"
          className="button--down-button__icon"
        />
      </button>
    </section>
  );
}
