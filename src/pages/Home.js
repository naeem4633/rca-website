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
      <div className='mx-auto flex w-4/5 2xl:w-3/4 h-3/4 flex-col relative z-10 space-y-6 lg:space-y-12'>
        <h1 className='text-xl lg:text-3xl comh1any-name tracking-tight'>ROCKY CONTRACTOR AGENCY</h1>
        <div className='flex space-x-4'>
          <p className='font-bold text-3xl lg:text-7xl'><span className='bg-gradient-text'>Level Up </span>Your Online Game</p>
        </div>
        <div className='flex space-x-3 rounded font-semibold p-2'>
          <p className='text-base lg:text-4xl'><span className='text-[#00C9FF]'>Stand Out </span>as a Plumbing Leader & Propel Your Business Forward</p>
        </div>
      </div>
      <div className='mx-auto w-4/5 2xl:w-3/4 grid grid-cols-1 lg:grid-cols-2 h-3/4 flex-col relative rounded-lg select-none'>
        <img className='w-full h-full border-2 border-black lg:border-0' src='../static/images/plumbing-web-developer.jpg'></img>
        <img className='w-full h-full border-2 border-black lg:border-0' src='../static/images/plumbing-website.jpg'></img>
        <img className='hidden lg:block w-full h-full' src='../static/images/plumbing-developer-agency.jpg'></img>
        <img className='hidden lg:block w-full h-full' src='../static/images/plumbing-agency.jpg'></img>
      </div>
    </section>

    <section id='section1' className='mx-auto w-full min-h-[80vh] flex flex-col justify-center items-center space-y-6 lg:space-y-12 py-10 lg:py-20 px-2 lg:px-0 tracking-wide'>
      <h2 className='text-center text-2xl lg:text-4xl font-semibold'>Our Service</h2>
      <div className='w-full lg:w-3/4 2xl:w-1/2 outline outline-[#00C9FF] rounded py-6 space-y-4'>
        <div className='w-full flex items-center justify-center space-x-4 animate-breathe'>
          <img className='w-8' src='../static/images/100.png'></img>
          <p className='text-center text-xl lg:text-3xl font-semibold text-red-500'>All - Inclusive Offer !</p>
        </div>
        <div className='w-full flex flex-col text-sm lg:text-xl px-4'>
          <div className='space-y-4 rounded-lg p-4 lg:p-8'>
            {/* <div className='w-fit text-white text-xs lg:text-sm font-bold rounded p-1 lg:p-2 bg-[#00C9FF]'>
              <p>DEVELOPMENT</p>
            </div> */}
            <div className='flex flex-col space-y-6'>
              <div className='flex space-x-4 items-center first-group'>
                <img className='w-5 lg:w-6' src='../static/images/web-design.png'></img>
                <h3 className='text-sm lg:text-2xl font-semibold'>Crafting Your Website: Design to Deployment</h3>
              </div>
              <ul className='space-y-2'>
                <li className='flex space-x-4 items-center first-group'>
                  <img className='w-2 h-2 lg:w-3 lg:h-3' src='../static/images/point.png'></img>
                  <p>Creating and coding an <span className='font-semibold'>artistic design</span> for your website</p>
                </li>
                <li className='flex space-x-4 items-center first-group'>
                  <img className='w-2 h-2 lg:w-3 lg:h-3' src='../static/images/point.png'></img>
                  <p>Securing your domain name, all the way to ensuring a <span className='font-semibold'>smooth site launch</span></p>
                </li>
                <li className='flex space-x-4 items-center first-group'>
                  <img className='w-2 h-2 lg:w-3 lg:h-3' src='../static/images/point.png'></img>
                  <p>Designing a <span className='font-semibold'>captivating logo</span> that represents your brand</p>
                </li>
              </ul>
            </div>
          </div>
          <div className='space-y-4 rounded-lg p-4 lg:p-8'>
            {/* <div className='w-fit text-white text-xs lg:text-sm font-bold rounded p-1 lg:p-2 bg-[#00C9FF]'>
              <p>OPTIMIZATION</p>
            </div> */}
            <div className='flex flex-col space-y-6'>
              <div className='flex space-x-4 items-center first-group'>
                <img className='w-6 lg:w-7' src='../static/images/seo.png'></img>
                <h3 className='text-sm lg:text-2xl font-semibold'>Content Creation, SEO Mastery, Google My Business Optimization, and Responsive Design</h3>
              </div>
              <ul className='space-y-2'>
                <li className='flex space-x-4 items-center first-group'>
                  <img className='w-2 h-2 lg:w-3 lg:h-3' src='../static/images/point.png'></img>
                  <p><span className='font-semibold'>Crafting custom content</span> that perfectly fits your services and goals</p>
                </li>
                <li className='flex space-x-4 items-center first-group'>
                  <img className='w-2 h-2 lg:w-3 lg:h-3' src='../static/images/point.png'></img>
                  <p><span className='font-semibold'>Enhancing your website's visibility</span> using effective SEO techniques</p>
                </li>
                <li className='flex space-x-4 items-center first-group'>
                  <img className='w-2 h-2 lg:w-3 lg:h-3' src='../static/images/point.png'></img>
                  <p>Setting up and Optimizing Google My Business to <span className='font-semibold'>boost your local presence</span></p>
                </li>
                <li className='flex space-x-4 items-center first-group'>
                  <img className='w-2 h-2 lg:w-3 lg:h-3' src='../static/images/point.png'></img>
                  <p>Ensuring your website is responsive, providing an <span className='font-semibold'>optimal experience on all devices</span></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='mx-auto w-full min-h-[40vh] flex justify-center items-center py-10 lg:py-20 space-x-4 tracking-wider'>
      <div id='section2' className='w-full h-full bg-[#08080d] justify-center text-gray-200 lg:py-20 space-y-16 lg:space-y-32 pb-4'>
        <div className='flex mx-auto w-full 2xl:w-3/4 h-full flex-col lg:flex-row'>
          <div className='w-full lg:w-1/2 h-full flex items-center relative py-10 lg:py-0 px-4 lg:px-0'>
            <div className='lg:hidden absolute top-0 left-0 w-full h-full opacity-10'>
              <img className='w-full h-full object-cover' src='../static/images/logo.jpg'></img>
            </div>
            <div className='w-full lg:w-3/4 mx-auto flex flex-col justify-between items-center lg:items-start space-y-8 text-left relative z-10'>
              <h2 className='text-2xl lg:text-5xl font-bold'>Why Choose Us ?</h2>
              <p className='text-sm lg:text-2xl'>
                We specialize in providing plumbing businesses a seamless <span className='text-[#00C9FF]'>end-to-end</span> web development solution, ensuring your strong online presence
              </p>
              <p className='text-sm lg:text-2xl'>
                We design powerful websites and brands that win home owners' trust <span className='text-[#00C9FF]'>even before the first service</span>
              </p>
              <div onClick={openPopup} className='hidden lg:flex w-fit bg-[#00C9FF] rounded-md text-black font-semibold px-4 py-2 text-xl tracking-wider items-center space-x-4 cursor-pointer group transition-transform duration-200 hover:translate-y-1 select-none'>
                <p className='text-xs lg:text-lg'>Get Started Today</p>
                <svg className="w-3 h-3 lg:w-4 lg:h-4 stroke-black group-hover:translate-x-1 transition-transform" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </div>
            </div>
          </div>
          <div className='hidden lg:flex w-1/2 h-full flex-col items-center justify-center select-none'>
            <img className='mx-auto w-full lg:w-3/4 border' src='../static/images/logo.jpg'></img>
            <p className='hidden lg:block w-3/4 mx-auto text-3xl company-name tracking-tight text-black bg-[#ecf0f9] text-center'>ROCKY CONTRACTOR AGENCY</p>
          </div>
        </div>

        <div className='w-full lg:w-3/4 2xl:w-1/2 bg-[#08080d] flex flex-col items-center justify-center lg:border-2 border-white rounded-lg p-4 lg:p-8 space-y-6 lg:px-0 lg:mx-auto'>
          <h2 className='text-center text-2xl lg:text-4xl font-semibold'>The Best Part ?</h2>
          <div className='w-full space-y-2 lg:space-y-6 flex flex-col items-center justify-center text-sm lg:text-2xl'>
            <div className='flex flex-col items-center space-y-4 border border-black'>
              <p className='text-center lg:text-left'>We offer a <span className='text-[#00C9FF] font-bold'>100% Money Back</span> guarantee on our work</p>
              <p className='font-semibold text-xs lg:text-xl'>Zero Risk On You</p>
              <div className=''>
                <img className='w-52' src='../static/images/plumbing-web-development-agency.png'></img>
              </div>
            </div>
            <div className='space-y-4 flex flex-col items-center'>
              <p className='text-center text-sm lg:text-2xl font-semibold'>Ready to be the Industry Leader?</p>
              <div onClick={openPopup} className='w-60 lg:w-80 bg-[#00C9FF] rounded-md text-black font-semibold px-4 py-2 text-xl tracking-wider flex justify-around items-center space-x-4 cursor-pointer group transition-transform duration-200 hover:translate-y-1 select-none'>
                <div className='flex flex-col items-center'>
                  <p className='text-sm lg:text-lg font-bold'>Book a Meeting</p>   
                  <p className='text-xs lg:text-base text-gray-800'>For a Zero Obligation Quote</p>
                </div>   
                <svg className="w-4 h-3 lg:w-6 lg:h-4 stroke-black group-hover:translate-x-1 transition-transform" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id='section3' className='mx-auto w-full min-h-[70vh] flex flex-col justify-start items-center space-y-10 tracking-wider px-4'>
      <div className='flex items-center space-x-3'>
        <img className='w-6 lg:w-8' src='../static/images/ebook.png'></img>
        <h2 className='text-center text-xl lg:text-4xl font-semibold'>Your Free E-book...</h2>
      </div>
      <div className='w-full lg:w-3/4 2xl:w-1/2 flex flex-col text-base lg:text-xl space-y-10'>
        <div className='space-y-4 outline outline-[#00C9FF] rounded-lg p-8'>
          <h3 className='font-semibold text-gray-600'>CONTENTS</h3>
          <div className='flex flex-col space-y-4'>
            <ul className='space-y-4 text-gray-600'>
              <li className='flex flex-row space-x-4 items-baseline first-group'>
                <img className='w-2 h-2' src='../static/images/point.png'></img>
                <div className='flex flex-col'>
                  <p className='font-semibold '>Design that converts</p>
                  <p className="text-xs lg:text-base">Find out how design can turn website visitors into loyal customers</p>
                </div>
              </li>
              <li className='flex flex-row space-x-4 items-baseline first-group'>
                <img className='w-2 h-2' src='../static/images/point.png'></img>
                <div className='flex flex-col'>
                  <p className='font-semibold'>Showcasing Your Expertise</p>
                  <p className="text-xs lg:text-base">See how specific design strategies can highlight your plumbing expertise</p>
                </div>
              </li>
              <li className='flex flex-row space-x-4 items-baseline first-group'>
                <img className='w-2 h-2' src='../static/images/point.png'></img>
                <div className='flex flex-col'>
                  <p className='font-semibold'>Acheiving Visual Excellence</p>
                  <p className="text-xs lg:text-base">Explore eye-catching visuals and layouts for plumbing websites</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex space-x-0 lg:space-x-2 items-center'>
        <img className='w-6 lg:w-8' src='../static/images/unlocked.png'></img>
        <h3 className='text-center text-base lg:text-2xl font-semibold'>Unlock the Secrets of Exceptional Plumbing Website Design !</h3>
      </div>
      <div className='flex flex-col items-center space-y-2 bg-gray-300 p-3'>
        <div className='flex space-x-2 items-center p-1'>
          <img className='h-6' src='../static/images/pdf.png'></img>
          <p className='text-sm font-semibold'>Plumbing Web Design Guide.pdf</p>
        </div>
        <a href='../static/files/plumbing-design-guide.pdf' download='Plumbing Web Design Guide.pdf' className='w-fit bg-[#00C9FF] hover:bg-[#3990a8] rounded-md text-white font-semibold px-4 py-2 text-xl tracking-wider flex items-center space-x-4 cursor-pointer group transition-all duration-200 select-none'>
          <img className='w-4 lg:w-5' src='../static/images/download.png'></img>
          <p className='text-sm lg:text-lg'>Download Now</p>
        </a>
      </div>
    </section>

    <FAQ />
    <ScrollToSection sectionId="section1" />
    <ScrollToSection sectionId="section2" />
    <ScrollToSection sectionId="section3" />
    <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />

    </>
  )
}

export default Home