import React, { useState } from 'react';
import Popup from '../components/Popup';

function FAQ() {
  const [isOpen, setIsOpen] = useState([false, false, false]);

  const toggleAnswer = (index) => {
    const updatedOpenState = [...isOpen];
    updatedOpenState[index] = !updatedOpenState[index];
    setIsOpen(updatedOpenState);
  };

  const [isPopupOpen, setPopupOpen] = useState(false);
  const openPopup = () => {
    setPopupOpen(true);
  };

  return (
    <>
    <section className='mx-auto w-full min-h-[40vh] flex justify-center items-center py-10 lg:py-20 space-x-4 bg-[#08080d] text-gray-200 tracking-wider'>
      <div className='mx-auto w-4/5 lg:w-2/3 2xl:w-2/5 space-y-20 lg:space-y-20'>
        <h2 className='text-xl lg:text-5xl font-bold'>Frequently Asked Questions</h2>
        <ul className='text-xs lg:text-xl space-y-6 lg:space-y-12'>
          {questions.map((question, index) => (
            <li className={`space-y-4 lg:space-y-8 ${isOpen[index] ? 'open' : ''}`} key={index}>
              <div className='flex justify-between items-center'>
                <p className='w-5/6 font-bold text-sm lg:text-2xl'>{question.title}</p>
                <svg
                  className={`w-4 lg:w-6 h-4 lg:h-6 stroke-[#00C9FF] cursor-pointer ${isOpen[index] ? 'hidden' : ''}`}
                  onClick={() => toggleAnswer(index)}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 1v16M1 9h16"/>
                </svg>
                <svg
                  className={`w-3 lg:w-5 h-3 lg:h-5 stroke-[#00C9FF] cursor-pointer ${isOpen[index] ? '' : 'hidden'}`}
                  onClick={() => toggleAnswer(index)}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
              </div>
              <div
                className={`pr-10 answer ${isOpen[index] ? 'open' : ''}`}
              >
                {question.answer}
              </div>
            </li>
          ))}
        </ul>
        <div onClick={openPopup} className='mx-auto w-fit bg-[#00C9FF] rounded-md text-black font-semibold px-4 py-2 text-lg tracking-wide flex items-center space-x-4 cursor-pointer group transition-transform duration-200 hover:translate-y-1 select-none'>
            <p className='text-xs lg:text-lg'>Schedule a Meeting</p>   
            <svg className="w-3 lg:w-4 h-3 lg:h-4 stroke-black group-hover:translate-x-1 transition-transform" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>  
        </div>
      </div>
    </section>

    <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
    </>
  );
}

const questions = [
  {
    title: 'Do I Need to Be Involved in Website-related Tasks ?',
    answer: "You don't need to worry about anything. We handle all aspects of the website creation and guide you throughout the process.",
  },
  {
    title: "What's the development process ?",
    answer: "We'll start by understanding your needs. Then, we'll design the site. After your approval, we begin development. Once ready, we optimize content and web elements for a seamless launch.",
  },
];

export default FAQ;
