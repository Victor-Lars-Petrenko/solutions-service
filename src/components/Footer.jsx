import React, { useState } from "react";
import "../styles/Footer.scss";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  const onEmailChange = e => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  const onEmailSubmit = e => {
    e.preventDefault();
    const trimmedEmail = e.target.email.value.trim();
    if (trimmedEmail === "") {
      setEmailMessage("Please, write your email");
      return;
    }
    validateEmail(trimmedEmail);
  };

  const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailMessage("Invalid email address");
    } else {
      setEmailMessage("You have successfully subscribed to our page!");
    }
  };

  return (
    <footer className="footer__container">
      <section className="footer__wrapper">
        <section className="footer__titles">
          <section className="footer__group-text-info">
            <figure className="logo footer__logo">
              <span className="logo__circle footer__logo-circle"></span>
              <span className="logo__zaokrkvadrat"></span>
              <span className="logo__text footer__another-logo-text">Logo</span>
            </figure>
            <article className="footer__paragraphes">
              <p className="footer__paragraphes-paragraph">
                Lorem ipsum dolor, sit amet consectetur{" "}
              </p>
              <p className="footer__paragraphes-paragraph">
                adipisicing elit. Voluptatibus facere modi
              </p>
              <p className="footer__paragraphes-paragraph">
                possimus dignissimos, aliquam nobis eaque?
              </p>
              <p className="footer__paragraphes-paragraph">
                Voluptatem magnam quisquam rem.
              </p>
            </article>
            <section className="footer__mail-info">
              <article className="footer__advice">
                <p className="footer__advice-paragraph">
                  Subscribe To Our News Letter
                </p>
              </article>
              <form
                className="footer__form-mail-container"
                onSubmit={onEmailSubmit}
              >
                <input
                  className="footer__form-input"
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={onEmailChange}
                  autoComplete="off"
                />

                <button
                  className="section__button--arrow-button footer__button--another-button"
                  type="submit"
                >
                  <span className="button--arrow-button__text button--another-button__text ">
                    Subscribe
                  </span>
                  <img
                    src="../assets/img/arrow.png"
                    alt="arrow"
                    className="button--arrow-button__icon button--another-button__icon "
                  />
                </button>
              </form>
              <article className="footer__personal-info">
                <p className="footer__personal-info-paragraph">
                  *We Will Not Share Your Personal Info
                </p>
                {emailMessage && (
                  <p className="footer__personal-info-paragraph">
                    {emailMessage}
                  </p>
                )}
              </article>
            </section>
          </section>
          <article className="footer__group-text">
            <h1 className="footer__title"> Useful Links</h1>
            <ul className="footer__list">
              <li className="footer__list-item">
                <img
                  src="../assets/img/open.png"
                  alt="open"
                  className="footer__list-item-icon"
                />
                <span className="footer__list-item-text">Google</span>
              </li>
              <li className="footer__list-item">
                <img
                  src="../assets/img/open.png"
                  alt="open"
                  className="footer__list-item-icon"
                />
                <span className="footer__list-item-text">Dribbble</span>
              </li>
              <li className="footer__list-item">
                <img
                  src="../assets/img/open.png"
                  alt="open"
                  className="footer__list-item-icon"
                />
                <span className="footer__list-item-text">Linkedin</span>
              </li>
              <li className="footer__list-item">
                <img
                  src="../assets/img/open.png"
                  alt="open"
                  className="footer__list-item-icon"
                />
                <span className="footer__list-item-text">Wikipedia</span>
              </li>
            </ul>
          </article>
          <article className="footer__group-text">
            <h1 className="footer__title"> Resources</h1>
            <ul className="footer__list">
              <li className="footer__list-item">
                <img
                  src="../assets/img/open.png"
                  alt="open"
                  className="footer__list-item-icon"
                />
                <span className="footer__list-item-text">Google</span>
              </li>
              <li className="footer__list-item">
                <img
                  src="../assets/img/open.png"
                  alt="open"
                  className="footer__list-item-icon"
                />
                <span className="footer__list-item-text">Dribbble</span>
              </li>
              <li className="footer__list-item">
                <img
                  src="../assets/img/open.png"
                  alt="open"
                  className="footer__list-item-icon"
                />
                <span className="footer__list-item-text">Linkedin</span>
              </li>
              <li className="footer__list-item">
                <img
                  src="../assets/img/open.png"
                  alt="open"
                  className="footer__list-item-icon"
                />
                <span className="footer__list-item-text">Wikipedia</span>
              </li>
            </ul>
          </article>
          <article className="footer__group-text">
            <h1 className="footer__title "> Contact Info</h1>
            <ul className="footer__list">
              <li className="footer__list-item">
                <img
                  src="../assets/img/email.png"
                  alt="email"
                  className="footer__list-item-icon"
                />
                <span className="footer__list-item-text">
                  example@support.com
                </span>
              </li>
              <li className="footer__list-item">
                <img
                  src="../assets/img/mapa.png"
                  alt="mapa"
                  className="footer__list-item-icon"
                />
                <span className="footer__list-item-text">
                  5 xyz st., adc, vallhalla
                </span>
              </li>
              <li className="footer__list-item">
                <img
                  src="../assets/img/call.png"
                  alt="call"
                  className="footer__list-item-icon"
                />
                <span className="footer__list-item-text">+20123456789</span>
              </li>
              <li className="footer__list-item ">
                <ul className="buttons__container footer__buttons">
                  <li className="buttons__item">
                    <button className="icon-button footer__item-button">
                      <img
                        src="../assets/img/facebook.png"
                        alt="face"
                        className="icon-button__image footer__item-icon"
                      />
                    </button>
                  </li>
                  <li className="buttons__item">
                    <button className="icon-button footer__item-button">
                      <img
                        src="../assets/img/youtube.png"
                        alt="yout"
                        className="icon-button__image footer__item-icon"
                      />
                    </button>
                  </li>
                  <li className="buttons__item">
                    <button className="icon-button footer__item-button">
                      <img
                        src="../assets/img/insta.png"
                        alt="inst"
                        className="icon-button__image  footer__item-icon"
                      />
                    </button>
                  </li>
                  <li className="buttons__item">
                    <button className="icon-button footer__item-button">
                      <img
                        src="../assets/img/x.png"
                        alt="x"
                        className="icon-button__image  footer__item-icon"
                      />
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </article>
        </section>
        <section className="footer__down-content">
          <article className="footer__info-creator">
            <p className="footer__info-creator-paragraph">
              © 2024 Created by: Martin
            </p>
          </article>
          <article className="footer__privacy">
            <p className="footer__info-creator-paragraph">Terms of Use</p>
            <p className="footer__info-creator-paragraph">Privacy Policy</p>
          </article>
        </section>
      </section>
    </footer>
  );
}
