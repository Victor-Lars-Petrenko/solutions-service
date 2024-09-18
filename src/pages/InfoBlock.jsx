import React from 'react'

import '../styles/InfoBlock.scss'
import '../styles/Paragraph.scss'
import '../styles/BigTitle.scss'
import '../styles/UnderlineTitle.scss'
import '../styles/ArticleTitle.scss'
import '../styles/SmallTitle.scss'



export default function InfoBlock() {
  return (
    
    <section className='form-container'>
      <section className='content-wrapper'>
      <article className='form-section about-us'>
        <section className='section__titles'>
        <h5 className='section__small-title'>ABOUT US</h5>
        <h1 className='section__big-title'>Trusted By Worldwide</h1>
        <h1 className='section__big-title'>Clients Since <span className='section__underline-title'>1980</span></h1>
        </section>
        <section className='section__paragraphees'>
          <p className='section__paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A </p>
          <p className='section__paragraph'>officia molestiae dolorum tempora ut accusamus cupiditate! </p>
          <p className='section__paragraph'>Nesciunt tempora reiciendis libero voluptate!</p>
          </section>
          <button className='section__button--arrow-button'>
            <span className='button--arrow-button__text'>Get in touch</span><img src="/img/arrow.png" alt="arrow" className='button--arrow-button__icon ' /></button>
      </article>
      <section className='form-sections--1'>
      <article className='form-sections__article first-on-field'>
        <article className='form-sections__article-group-info'>
      <img src="/img/star.png" alt="star" className='easy-to-reach__icon'/>
        <h1 className='section__article-title'>First On Field</h1>
        </article>
        <section className='section__paragraphes'>
          <p className='section__paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A </p>
          <p className='section__paragraph'>officia molestiae dolorum tempora ut accusamus cupiditate! </p>
          <p className='section__paragraph'>Nesciunt tempora reiciendis libero voluptate!</p>
          </section>
      </article>
      <article className='form-sections__article easy-to-reach'>
      <article className='form-sections__article-group-info'>
        <img src="/img/agree.png" alt="aree" className='easy-to-reach__icon'/>
        <h1 className='section__article-title'>Easy To Reach</h1>
        </article>
        <section className='section__paragraphes'>
          <p className='section__paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A </p>
          <p className='section__paragraph'>officia molestiae dolorum tempora ut accusamus cupiditate! </p>
          <p className='section__paragraph'>Nesciunt tempora reiciendis libero voluptate!</p>
          </section>
      </article>
      </section>
      <section className='form-sections--2'>
      <article className='form-sections__article worldwide-service'>
      <article className='form-sections__article-group-info'>
      <img src="/img/map.png" alt="map" className='easy-to-reach__icon'/>
      <h1 className='section__article-title'>Worldwide <br /> services</h1>
      </article>
        <section className='section__paragraphes'>
          <p className='section__paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A </p>
          <p className='section__paragraph'>officia molestiae dolorum tempora ut accusamus cupiditate! </p>
          <p className='section__paragraph'>Nesciunt tempora reiciendis libero voluptate!</p>
          </section>
      </article>
      <article className='form-sections__article 24/7-support'>
      <article className='form-sections__article-group-info'>
      <img src="/img/question.png" alt="quest" className='easy-to-reach__icon'/>
      <h1 className='section__article-title'>24/7 Support</h1>
      </article>
        <section className='section__paragraphes'>
          <p className='section__paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A </p>
          <p className='section__paragraph'>officia molestiae dolorum tempora ut accusamus cupiditate! </p>
          <p className='section__paragraph'>Nesciunt tempora reiciendis libero voluptate!</p>
          </section>
      </article>
      </section>
     
      </section>
      <button className='section__button--down-button'>
        <img src="/img/arrow_down.png" alt="arow_don" className='button--down-button__icon' />
        </button>
    </section>
    
    
    
  )
}
