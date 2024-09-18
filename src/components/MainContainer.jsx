import React from 'react'
import '../styles/MainContainer.scss'
import '../styles/ArrowButton.scss'
import '../styles/SocialButtons.scss'


export default function MainContainer() {
  return (
    <section className='main__container'>
      <section className='main__images'>
        <ul className='images__container'>
          <li className='images__item'><img src="/img/success.png" alt="success" className='images__img' /></li>
          <li className='images__item'><img src="/img/shopping.png" alt="shopping" className='images__img' /></li>
          <li className='images__item'><img src="/img/shopping_add.png" alt="shopping_add" className='images__img' /></li>
        </ul>
      </section>
      <section className='main__solutions'>
        <ul className='buttons__container'>
          <li className='buttons__item'><button className='icon-button'><img src="/img/facebook.png" alt="face" className='icon-button__image ' /></button></li>
          <li className='buttons__item'><button className='icon-button'><img src="/img/youtube.png" alt="yout" className='icon-button__image' /></button></li>
          <li className='buttons__item'><button className='icon-button'><img src="/img/insta.png" alt="inst" className='icon-button__image ' /></button></li>
          <li className='buttons__item'><button className='icon-button'><img src="/img/x.png" alt="x" className='icon-button__image ' /></button></li>
        </ul>
        <section className="it-solutions">
          <h5 className='section__small-title'>IT SOLUTIONS</h5>
          <section className="high-titles">
          <h1 className='section__big-title'>Providing The Best </h1>
          <h1 className='section__big-title'>Services & IT <span className='section__underline-title'>Solutions</span></h1>
          </section>
          <section className='section__paragraphees'>
            <p className='section__paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed </p>
            <p className='section__paragraph'>architecto dolorum inventore totam adipisci</p>
            </section>
            <button className='section__button--arrow-button'>
            <span className='button--arrow-button__text'>Start now</span>
            <img src="/img/arrow.png" alt="arrow" className='button--arrow-button__icon ' />
            </button>
        </section>
      </section>
      <section className='main__social-media'>
        <ul className='main__social-media__list'>
          <li className='main__social-media__item--1'><img src="/img/employee.png" alt="employ" className='main__social-media__item__image'/></li>
          <li className='main__social-media__item--2'><img src="/img/designer.png" alt="designer" className='main__social-media__item__image'/><span className='main__social-media__item__text'>Digital Marketing</span></li>
          <li className='main__social-media__item--3'><img src="/img/employee.png" alt="employ" className='main__social-media__item__image'/></li>
          <li className='main__social-media__item--4'><img src="/img/success.png" alt="suceec" className='main__social-media__item__image'/></li>
        </ul>
        <ul className='main__social-media__list'>
          <li className='main__social-media__item--5'><img src="/img/shopping.png" alt="shop" className='main__social-media__item__image'/></li>
          <li className='main__social-media__item--6'><img src="/img/business_deal-1.png" alt="business" className='main__social-media__item__image'/></li>
          <li className='main__social-media__item--7'><img src="/img/business_deal-2.png" alt="busin" className='main__social-media__item__image'/> <span className='main__social-media__item__text'>SEO Services</span></li>
          <li className='main__social-media__item--8'><img src="/img/successful.png" alt="succes" className='main__social-media__item__image'/></li>
        </ul>
        <ul className='main__social-media__list'>
          <li className='main__social-media__item--9'><img src="/img/development.png" alt="develop" className='main__social-media__item__image'/><span className='main__social-media__item__text'>Apps Development</span></li>
          <li className='main__social-media__item--10'><img src="/img/conference.png" alt="confer" className='main__social-media__item__image'/></li>
          <li className='main__social-media__item--11'><img src="/img/performance.png" alt="perform" className='main__social-media__item__image'/></li>
          <li className='main__social-media__item--12'><img src="/img/basket.png" alt="basket" className='main__social-media__item__image'/></li>
        </ul>
      </section>
    </section>
    
  )
}
