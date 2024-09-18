import React from 'react'
import '../styles/Blog.scss'
import '../styles/SmallButtonWithIcon.scss'


export default function Blog() {
    return (
        <section className='blog__container'>
            <section className='blog__wrapper'>
                <section className='blog__text-info'>
                    <article className='blog__group-titles'>
                    <h5 className='section__small-title'>BLOG</h5>
                    <h1 className='section__big-title'>Latest News</h1>
                    </article>
                    <button className='section__button--arrow-button blog__text-info-button'>
                        <span className='button--arrow-button__text'>See all posts</span>
                        <img src="/img/arrow.png" alt="arrow" className='button--arrow-button__icon ' />
                    </button>
                </section>
                <section className='blog__cards'>
                    <ul className='blog__cards-list'>
                        <li className='blog__cards-list-item'>
                            <article className='blog__cards-item-img-wrapper'>
                                <img src="/img/designer_with_ipad.png" alt="ipad" className='blog__cards-item-img' />
                            </article>
                            <hr className=' section__horizontal-line blog__line'/>
                            <section className='blog__group-all-info'>
                            <article className='blog__small-buttons'>
                                <button className='section__button-icon'>
                                    <span className="small-button--text">05 oct 2024</span>
                                    <img src="/img/calendar.png" alt="calend" className="small-button--icon" />
                                </button>
                                <button className='section__button-icon'>
                                    <span className="small-button--text">Hosting</span>
                                </button>
                            </article>
                            <article className='blog__info'>
                                <article className='blog__info-titles'>
                                    <h5 className='blog__info-title'>How Litespeed Technology </h5>
                                    <h5 className='blog__info-title'> Works To Speed Up Your Site</h5>
                                </article>
                                <article className='blog__info-paragraphes'>
                                    <p className='blog__info-paragraph'>Lorem ipsum dolor sit, amet consectetur </p>
                                    <p className='blog__info-paragraph'>adipisicing elit.Iure nulla dolorem, </p>
                                    <p className='blog__info-paragraph'>voluptates molestiae</p>
                                </article>
                                <article className='blog__group-info'>
                                <figure className='blog__avtor-info'>
                                    <img src="/img/avatar.png" alt="avatar" className='blog__avtor-info-icon' />
                                    <figcaption>
                                        <span className=" blog__paragraph-another-text">Fairouz Mhmd</span>

                                    </figcaption>
                                </figure>
                                <button className='section__button--arrow-button'>
                                    <span className='button--arrow-button__text'>Read more</span>
                                    <img src="/img/arrow.png" alt="arrow" className='button--arrow-button__icon ' />
                                </button>
                                </article>
                            </article>
                            </section>
                        </li>
                        <li className='blog__cards-list-item'>
                            <article className='blog__cards-item-img-wrapper'>
                                <img src="/img/designer_with_ipad.png" alt="ipad" className='blog__cards-item-img' />
                            </article>
                            <hr className=' section__horizontal-line blog__line'/>
                            <section className='blog__group-all-info'>
                            <article className='blog__small-buttons'>
                                <button className='section__button-icon'>
                                    <span className="small-button--text">05 oct 2024</span>
                                    <img src="/img/calendar.png" alt="calend" className="small-button--icon" />
                                </button>
                                <button className='section__button-icon'>
                                    <span className="small-button--text">Hosting</span>
                                </button>
                            </article>
                            <article className='blog__info'>
                                <article className='blog__info-titles'>
                                    <h5 className='blog__info-title'>How Litespeed Technology </h5>
                                    <h5 className='blog__info-title'> Works To Speed Up Your Site</h5>
                                </article>
                                <article className='blog__info-paragraphes'>
                                    <p className='blog__info-paragraph'>Lorem ipsum dolor sit, amet consectetur </p>
                                    <p className='blog__info-paragraph'>adipisicing elit.Iure nulla dolorem, </p>
                                    <p className='blog__info-paragraph'>voluptates molestiae</p>
                                </article>
                                <article className='blog__group-info'>
                                <figure className='blog__avtor-info'>
                                    <img src="/img/avatar.png" alt="avatar" className='blog__avtor-info-icon' />
                                    <figcaption>
                                        <span className=" blog__paragraph-another-text">Fairouz Mhmd</span>

                                    </figcaption>
                                </figure>
                                <button className='section__button--arrow-button'>
                                    <span className='button--arrow-button__text'>Read more</span>
                                    <img src="/img/arrow.png" alt="arrow" className='button--arrow-button__icon ' />
                                </button>
                                </article>
                            </article>
                            </section>
                        </li>
                        <li className='blog__cards-list-item'>
                            <article className='blog__cards-item-img-wrapper'>
                                <img src="/img/designer_with_ipad.png" alt="ipad" className='blog__cards-item-img' />
                            </article>
                            <hr className=' section__horizontal-line blog__line'/>
                            <section className='blog__group-all-info'>
                            <article className='blog__small-buttons'>
                                <button className='section__button-icon'>
                                    <span className="small-button--text">05 oct 2024</span>
                                    <img src="/img/calendar.png" alt="calend" className="small-button--icon" />
                                </button>
                                <button className='section__button-icon'>
                                    <span className="small-button--text">Hosting</span>
                                </button>
                            </article>
                            <article className='blog__info'>
                                <article className='blog__info-titles'>
                                    <h5 className='blog__info-title'>How Litespeed Technology </h5>
                                    <h5 className='blog__info-title'> Works To Speed Up Your Site</h5>
                                </article>
                                <article className='blog__info-paragraphes'>
                                    <p className='blog__info-paragraph'>Lorem ipsum dolor sit, amet consectetur </p>
                                    <p className='blog__info-paragraph'>adipisicing elit.Iure nulla dolorem, </p>
                                    <p className='blog__info-paragraph'>voluptates molestiae</p>
                                </article>
                                <article className='blog__group-info'>
                                <figure className='blog__avtor-info'>
                                    <img src="/img/avatar.png" alt="avatar" className='blog__avtor-info-icon' />
                                    <figcaption>
                                        <span className=" blog__paragraph-another-text">Fairouz Mhmd</span>

                                    </figcaption>
                                </figure>
                                <button className='section__button--arrow-button'>
                                    <span className='button--arrow-button__text'>Read more</span>
                                    <img src="/img/arrow.png" alt="arrow" className='button--arrow-button__icon ' />
                                </button>
                                </article>
                            </article>
                            </section>
                        </li>
                    </ul>
                </section>
            </section>
        </section>
    )
}
