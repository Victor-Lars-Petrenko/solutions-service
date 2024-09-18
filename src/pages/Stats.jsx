import React from "react";
import "../styles/Stats.scss";
import "../styles/VerticalLine.scss";

export default function Stats() {
  return (
    <section className="stats__container">
      <section className="stats__wrapper">
        <article className="stats__article stats__article--green">
          <img src="/img/checkbox.png" alt="check" className="article__image" />
          <h1 className="section__big-number article__title">758+</h1>
          <p className="section__paragraph article__subtitle">
            Finished Projects
          </p>
        </article>
        <hr className="section__vertical-line stats__vertical-line stats__vertical-line--1" />
        <article className="stats__article stats__article--pink">
          <img src="/img/document.png" alt="docs" className="article__image" />
          <h1 className="section__big-number article__title">23</h1>
          <p className="section__paragraph article__subtitle">Created jobs</p>
        </article>
        <hr className="section__vertical-line stats__vertical-line stats__vertical-line--2" />
        <article className="stats__article stats__article--purple">
          <img src="/img/happy.png" alt="happy" className="article__image" />
          <h1 className="section__big-number article__title">200+</h1>
          <p className="section__paragraph article__subtitle">
            Happy customers
          </p>
        </article>
        <hr className="section__vertical-line stats__vertical-line stats__vertical-line--3" />
        <article className="stats__article stats__article--blue">
          <img src="/img/years.png" alt="year" className="article__image" />
          <h1 className="section__big-number article__title">28+</h1>
          <p className="section__paragraph article__subtitle">
            Years of experience
          </p>
        </article>
      </section>
      <button className="section__button--down-button stats__another-button">
        <img
          src="/img/arrow_down.png"
          alt="arow_don"
          className="button--down-button__icon"
        />
      </button>
    </section>
  );
}
