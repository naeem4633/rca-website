import React, { useState } from 'react';
import Popup from '../components/Popup';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [isPopupOpen, setPopupOpen] = useState(false);
    const openPopup = () => {
      setPopupOpen(true);
    };

  return (
    <>
    <section className='hidden lg:block top-0 w-full h-full text-white color-secondary py-6 tracking-wider'>
        <div className='mx-auto w-full flex justify-between space-x-4 items-center'>
            <div className='w-1/3 flex border border-black justify-around items-center'>
                <a href='#section1' className='font-bold cursor-pointer'>OUR PACKAGE</a>
                <a href='#section3' className='font-bold cursor-pointer'>YOUR FREE WEBSITE !</a>
            </div>
            <div className='w-1/3 flex border border-black justify-center select-none'>   
                <img src='../static/images/logo.jpg' className='lg:w-32 border border-black cursor-pointer'></img>
            </div>
            <div className='w-1/3 flex border border-black justify-around items-center'>
                <a href='#section2' className='font-bold cursor-pointer'>WHY CHOOSE US ?</a>
                <div onClick={openPopup} className='font-bold bg-gradient-text-light text-lg cursor-pointer outline outline-2 outline-[#00C9FF] rounded px-2 p-1 hover:outline-gray-200 transition-all duration-200 select-none'>SCHEDULE A MEETING</div>
            </div>
        </div>
    </section>
    <section className={`lg:hidden top-0 w-full h-full text-white color-secondary py-6 tracking-wider ${isOpen ? 'menu-open' : ''}`}>
      <div className='mx-auto w-full flex justify-between space-x-4 items-center'>
        <div className='w-1/3 flex border border-black justify-center'>
          <img src='../static/images/logo.jpg' className='w-20'></img>
        </div>
        <div className='px-2 w-1/3 flex border border-black justify-center items-center' onClick={toggleMenu}>
          <img className='w-6' src='../static/images/menu.png'></img>
        </div>
      </div>
      <div className={`z-50 fixed top-0 mx-auto h-full w-full flex flex-col justify-between space-y-4 items-center bg-[#08080d] py-6 ${isOpen ? 'fadeIn' : 'fadeOut'}`}>
        <div className='w-full py-6'>
          <div className='w-full flex justify-end'>
            <div className='w-1/3 flex border border-black justify-end items-center pr-8' onClick={toggleMenu}>
              <img className='w-5' src='../static/images/close.png'></img>
            </div>
          </div>
          <ul className='w-full flex flex-col p-8 text-sm'>
            <a onClick={toggleMenu} href='#section1' className='p-4 border border-t-0 border-gray-400 border-x-0'>OUR PACKAGE</a>
            <a onClick={toggleMenu} href='#section3' className='p-4 border border-t-0 border-gray-400 border-x-0'>YOUR FREE WEBSITE !</a>
            <a onClick={toggleMenu} href='#section2' className='p-4 border border-t-0 border-gray-400 border-x-0'>WHY CHOOSE US ?</a>
            <a onClick={() => { toggleMenu(); openPopup(); }} className='p-4 border border-gray-400 border-x-0 border-t-0 font-semibold text-[#00C9FF]'>SCHEDULE A MEETING</a>
          </ul>
        </div>
        <div className='flex flex-col justify-center items-center space-y-4'>
          <img src='../static/images/logo.jpg' className='w-24'></img>
          <p className='w-full mx-auto text-lg company-name tracking-tight text-gray-200 text-center'>ROCKY CONTRACTOR AGENCY</p>
        </div>
      </div>
    </section>
    <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
    </>
  )
}

export default Header
