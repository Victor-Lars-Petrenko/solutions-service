import React from 'react'
import '../styles/Header.scss';
import '../styles/LogoType.scss'
export default function Header() {
  return (
    <section className="container">
    <header className='header'>
    <figure class="logo">
    <span class="logo__circle"></span>
    <span class="logo__zaokrkvadrat"></span>
    <span class="logo__text">Logo</span>
  </figure>
      <nav className="nav">
    <ul className="nav__list">
      <li className="nav__item home"><a href="#home"><span className='header__group-info'>Home  
        <img src="/img/circles.png" alt="circles" className='header__list-icon' /> </span>
       </a></li>
      <li className="nav__item"><a href="#about">About</a></li>
      <li className="nav__item"><a href="#services">Services</a></li>
      <li className="nav__item"><a href="#portfolio">Portfolio</a></li>
      <li className="nav__item"><a href="#blog">Blog</a></li>
      <li className="nav__item"><a href="#shop">Shop</a></li>
      <li className="nav__item"><a href="#contact">Contact</a></li>
    </ul>
  </nav>
    </header>
    </section>
  )
}
