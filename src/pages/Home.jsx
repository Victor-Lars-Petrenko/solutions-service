import React from 'react'
import '../styles/Home.scss'
import MainContainer from '../components/MainContainer'
import '../styles/DownButton.scss'


export default function Home() {
  return (
    <>
    <main className='Home'>
       <MainContainer/>
      
    </main>
     <button className='section__button--down-button home__button'>
     <img src="/img/arrow_down.png" alt="arow_don" className='button--down-button__icon' />
     </button>
     </>
  )
}
