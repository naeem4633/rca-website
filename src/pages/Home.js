import React, { useState } from 'react';
import FAQ from '../components/FAQ'
import ScrollToSection from '../components//ScrollToSection';
import Popup from '../components/Popup';
import useIntersectionObserver from '../Animations'

const Home = () => {
  const fourthGroupRef = useIntersectionObserver('.first-group');

  const [isPopupOpen, setPopupOpen] = useState(false);
  const openPopup = () => {
    setPopupOpen(true);
  };

  return (
    <>
    <section className='mx-auto w-full min-h-[90vh] py-10 lg:py-20 relative color-secondary text-gray-200 bg-[#08080d] space-y-10 lg:space-y-20 tracking-wider'>
      <div className='mx-auto flex 2xl:w-3/4 h-3/4 flex-col relative z-10 space-y-20 text-center'>
        <h1 className='text-xl lg:text-3xl company-name tracking-tight'>ROCKY CONTRACTOR AGENCY</h1>
        <div className='hidden lg:flex flex-col space-y-4 text-left lg:text-center'>
          <p className='font-bold text-5xl'>We design websites for Plumbing Businesses</p>
          <p className='font-bold text-5xl'> that turn <span className='bg-gradient-text-light'>visitors into customers</span></p>
        </div>
        <div className='lg:hidden flex flex-col text-center text-xl'>
          <p className=''>We design websites</p>
          <p className=''>for Plumbing Businesses</p>
          <p className=''>that turn <span className='font-bold bg-gradient-text-light'>visitors into customers</span></p>
        </div>
      </div>
    </section>

    <section id='section1' className='mx-auto w-full min-h-[100vh] flex flex-col justify-center items-center space-y-6 lg:space-y-12 py-10 lg:py-20 px-2 lg:px-0 tracking-wide'>
      <h2 className='text-center text-xl lg:text-4xl font-semibold'>All Inclusive Service</h2>
      <div className='w-full 2xl:w-3/4 flex flex-col items-center justify-center mx-auto space-y-3 lg:space-y-8 px-8 2xl:px-0'>
        <div className='w-full flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-8 items-center justify-center'>
          <div className='w-4/5 lg:w-1/3 flex flex-col space-y-2 p-4 lg:p-6 justify-center items-center bg-white border rounded-lg text-black hover:drop-shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer select-none'>
            <img className='w-8 h-8 lg:w-12 lg:h-12' src='../static/images/illustration.png' alt=''></img>
            <p className='text-sm lg:text-xl font-bold'>Website Design</p>
            <p className='text-xs lg:text-base text-center'>Creating and coding an artistic design for your website</p>
          </div>
          <div className='w-4/5 lg:w-1/3 flex flex-col p-4 lg:p-6 justify-center items-center space-y-2 bg-[#08080d] text-[#00C9FF] border rounded-lg  hover:text-black hover:bg-white hover:drop-shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer select-none'>
            <img className='w-8 h-8 lg:w-12 lg:h-12' src='../static/images/color-palette.png' alt=''></img>
            <p className='text-sm lg:text-xl font-bold'>Logo Design</p>
            <p className='text-xs lg:text-base text-center'>Designing a captivating logo that represents your brand</p>
          </div>
          <div className='w-4/5 lg:w-1/3 flex flex-col space-y-2 p-4 lg:p-6 justify-center items-center  bg-white border rounded-lg text-black hover:drop-shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer select-none'>
            <img className='w-8 h-8 lg:w-12 lg:h-12' src='../static/images/seo.png' alt=''></img>
            <p className='text-sm lg:text-xl font-bold'>SEO</p>
            <p className='text-xs lg:text-base text-center'>Enhancing your website's visibility using effective SEO techniques</p>
          </div>
        </div>
        <div className='w-full flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-8 items-center justify-center'>
          <div className='w-4/5 lg:w-1/3 flex flex-col p-4 lg:p-6 justify-center items-center space-y-2 bg-[#08080d] text-[#00C9FF] border rounded-lg  hover:text-black hover:bg-white hover:drop-shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer select-none'>
            <img className='w-8 h-8 lg:w-12 lg:h-12' src='../static/images/content-writing.png' alt=''></img>
            <p className='text-sm lg:text-xl font-bold'>Content Creation</p>
            <p className='text-xs lg:text-base text-center'>Crafting custom content that perfectly fits your services and goals</p>
          </div>
          <div className='w-4/5 lg:w-1/3 flex flex-col space-y-2 p-4 lg:p-6 justify-center items-center  bg-white border rounded-lg text-black hover:drop-shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer select-none'>
            <img className='w-8 h-8 lg:w-12 lg:h-12' src='../static/images/google-maps.png' alt=''></img>
            <p className='text-sm lg:text-xl font-bold'>Google Optimizaton</p>
            <p className='text-xs lg:text-base text-center'>Setting up and Optimizing Google My Business to boost your local presence</p>
          </div>
          <div className='w-4/5 lg:w-1/3 flex flex-col p-4 lg:p-6 justify-center items-center space-y-2 bg-[#08080d] text-[#00C9FF] border rounded-lg  hover:text-black hover:bg-white hover:drop-shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer select-none'>
            <img className='w-8 h-8 lg:w-12 lg:h-12' src='../static/images/responsive.png' alt=''></img>
            <p className='text-sm lg:text-xl font-bold'>Responsive Design</p>
            <p className='text-xs lg:text-base text-center'>Ensuring your website is responsive, providing an optimal experience on all devices</p>
          </div>
        </div>
        <div className='w-full flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-8 items-center justify-center'>
          <div className='w-4/5 lg:w-1/3 flex flex-col p-4 lg:p-6 justify-center items-center space-y-2 bg-white lg:bg-[#08080d] text-black lg:text-[#00C9FF] border rounded-lg hover:text-black hover:bg-white hover:drop-shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer select-none'>
            <img className='w-8 h-8 lg:w-12 lg:h-12' src='../static/images/web.png' alt=''></img>
            <p className='text-sm lg:text-xl font-bold'>Website Launch</p>
            <p className='text-xs lg:text-base text-center'>Securing your domain name, all the way to ensuring a smooth site launch</p>
          </div>
        </div>
      </div>
    </section>

    <section className='mx-auto w-full min-h-[100vh] flex justify-center items-center space-x-4 tracking-wider'>
      <div id='section2' className='flex flex-col w-full h-full bg-[#08080d] justify-center text-gray-200 py-10 lg:py-20 space-y-32 px-8'>
        <div className='w-full lg:w-3/5 mx-auto flex flex-col lg:flex-row text-base lg:text-xl 2xl:text-2xl justify-between space-y-10 lg:space-y-0 lg:space-x-20'>
          <div className='w-full lg:w-1/2 mx-auto flex flex-col items-center space-y-5 lg:space-y-10'>
            <p className='font-semibold text-xl lg:text-4xl 2xl:text-5xl'>Does This Sound Like You ?</p>
            <ul className='space-y-3 lg:space-y-6'>
              <li className='flex space-x-4 items-start'>
                <img className='w-6 h-6 lg:w-8 lg:h-8' src='../static/images/bullet.png'></img>
                <p>Your current website is not bringing in any results?</p>
              </li>
              <li className='flex space-x-4 items-start'>
                <img className='w-6 h-6 lg:w-8 lg:h-8' src='../static/images/bullet.png'></img>
                <p>Your SEO doesn't seem to be working?</p>
              </li>
              <li className='flex space-x-4 items-start'>
                <img className='w-6 h-6 lg:w-8 lg:h-8' src='../static/images/bullet.png'></img>
                <p>You want a decent website but don't know who you can trust?</p>
              </li>
            </ul>
          </div>
          <div className='w-full lg:w-1/2 mx-auto flex flex-col items-center space-y-5 lg:space-y-10'>
            <p className='font-semibold text-xl lg:text-4xl 2xl:text-5xl text-center'>Well It's Your Lucky Day !</p>
            <ul className='space-y-3 lg:space-y-6'>
              <li className='flex space-x-4 items-start'>
                <img className='w-6 h-6 lg:w-8 lg:h-8' src='../static/images/star.png'></img>
                <p>We design trendy and affordable websites</p>
              </li>
              <li className='flex space-x-4 items-start'>
                <img className='w-6 h-6 lg:w-8 lg:h-8' src='../static/images/star.png'></img>
                <p>We provide end-to-end services</p>
              </li>
              <li className='flex space-x-4 items-start'>
                <img className='w-6 h-6 lg:w-8 lg:h-8' src='../static/images/star.png'></img>
                <p>We use specific plumbing industry trends for your website</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='mx-auto w-full lg:w-3/5 text-center flex flex-col space-y-5 lg:space-y-10 items-start'>
          <p className='font-semibold text-xl lg:text-5xl mx-auto'>Best Of All ?</p>
          <ul className='flex flex-col space-y-3 lg:space-y-6'>
            <li className='mx-auto w-full lg:w-3/4 flex flex-col space-y-2'>
              <p className='text-lg lg:text-2xl 2xl:text-3xl'>We are the only contractors in the plumbing space to offer a 100% money back guarantee.</p>
              <p className='text-xs lg:text-lg'>No Risk On You.</p>
            </li>
            <li className=''>
              <div className='mx-auto w-4/5 lg:w-2/5 bg-gray-100 rounded flex flex-col text-white p-2 lg:p-5'>
                <div className='flex justify-end space-x-1'>
                  <img className='w-4 h-4 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8' src='../static/images/star-black.png'></img>
                  <img className='w-4 h-4 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8' src='../static/images/star-black.png'></img>
                  <img className='w-4 h-4 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8' src='../static/images/star-black.png'></img>
                  <img className='w-4 h-4 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8' src='../static/images/star-black.png'></img>
                  <img className='w-4 h-4 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8' src='../static/images/star-black.png'></img>
                </div>
                <div className='w-full flex flex-col space-y-0 lg:space-y-2 text-black items-start'>
                  <p className='bold-font font-bold text-xl lg:text-3xl 2xl:text-5xl'>100%</p>
                  <p className='bold-font font-bold text-xl lg:text-3xl 2xl:text-5xl'>SATISFACTION</p>
                  <p className='bold-font text-xl lg:text-2xl 2xl:text-4xl'>GUARANTEED</p>
                </div>
              </div>
            </li>
            <li className=''>
              <p className='text-lg lg:text-2xl 2xl:text-3xl'>Ready To Lead the Plumbing Industry?</p>
            </li>
          </ul>
          <div onClick={openPopup} className='mx-auto w-fit bg-[#00C9FF] rounded-md text-black font-light px-4 py-2 text-lg tracking-wide flex items-center space-x-4 cursor-pointer group transition-all duration-200 hover:bg-sky-500 select-none'>
            <p className='text-xs lg:text-lg'>Book a Call With Us</p>   
            <svg className="w-3 lg:w-4 h-3 lg:h-4 stroke-black group-hover:translate-x-1 transition-transform" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>  
          </div>
        </div>
        <FAQ />
      </div>
    </section>

    <ScrollToSection sectionId="section1" />
    <ScrollToSection sectionId="section2" />
    <ScrollToSection sectionId="section3" />
    <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />

    </>
  )
}

export default Home