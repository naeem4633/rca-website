import React, { useRef, useState } from 'react';
import { firestore } from '../firebase';
import {addDoc, collection} from '@firebase/firestore';


const Popup = ({ isOpen, onClose }) => {
    const [customerName, setCustomerName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    const formRef = useRef();
    const ref = collection(firestore, 'meetings');

    const handleCustomerNameChange = (e) => {
      setCustomerName(e.target.value);
    };
  
    const handleCompanyNameChange = (e) => {
      setCompanyName(e.target.value);
    };
  
    const handleEmailAddressChange = (e) => {
      setEmailAddress(e.target.value);
    };
  
    const isEmailValid = () => {
        // Regular expression for validating email addresses
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailPattern.test(emailAddress);
    };

    const handleMeetingButtonClick = () => {
        // Check if the required fields are not empty
        if (customerName.trim() === '' || companyName.trim() === '' || emailAddress.trim() === '') {
            setAlertMessage('Please fill out all required fields.');
            return;
        }
    
        // You can handle the form submission here, such as storing the data to a database
        // For example, here we are using Firestore to add data
        const data = {
            customerName: customerName,
            companyName: companyName,
            emailAddress: emailAddress,
        };
    
        try {
            // Assuming you have Firestore initialized and a reference (ref) set up
            addDoc(ref, data);
        } catch (e) {
            console.error('Error adding document: ', e);
            alert('An error occurred while processing your request. Please try again later.');
            return;
        }
    
        // Navigate to the sample link
        const link = 'https://calendly.com/4633/rca-quote';
        window.location.href = link;
    };
    

    const popupStyle = {
        display: isOpen ? 'block' : 'none',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        zIndex: '1000',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    };

    const overlayStyle = {
        display: isOpen ? 'block' : 'none',
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        zIndex: '999',
    };

    return (
        <div>
          <div style={overlayStyle} onClick={onClose}></div>
          <div style={popupStyle} className='w-4/5 lg:w-1/3 2xl:w-1/4 bg-black text-white tracking-wider space-y-8 border border-[#00C9FF] rounded-md'>
            <div className='w-full flex justify-end'>
                <img onClick={onClose} className='w-6 cursor-pointer' src='../static/images/close-button.png'></img>
            </div>
            <div className='space-y-4 p-0 lg:p-8'>
                <h2>Please fill out the following details.</h2>
                {alertMessage && (
                    <div className="text-red-500 font-semibold text-xs lg:text-sm">{alertMessage}</div>
                )}
                <form>
                    <div className="mb-4 space-y-2">
                        <label htmlFor="customerName" className="block text-xs lg:text-sm font-medium text-gray-200">
                            Your name *
                        </label>
                        <input type="text" id="customerName" name="customerName" value={customerName} onChange={handleCustomerNameChange} className="mt-1 p-2 border rounded-md w-full text-black"/>
                    </div>
                    <div className="mb-4 space-y-2">
                        <label htmlFor="companyName" className="block text-xs lg:text-sm font-medium text-gray-200">
                            Your company name *
                        </label>
                        <input type="text" id="companyName" name="companyName" value={companyName} onChange={handleCompanyNameChange} className="mt-1 p-2 border rounded-md w-full text-black"/>
                    </div>
                    <div className="mb-4 space-y-2">
                        <label htmlFor="emailAddress" className="block text-xs lg:text-sm font-medium text-gray-200">
                            Your email address *
                        </label>
                        <input type="email" id="emailAddress" name="emailAddress" value={emailAddress} onChange={handleEmailAddressChange} className="mt-1 p-2 border rounded-md w-full text-black"/>
                        {emailAddress && !isEmailValid() && (
                            <p className="text-red-500 text-xs lg:text-sm font-semibold">Please enter a valid email address.</p>
                        )}
                    </div>
                    <div className="text-center flex justify-center">
                        <button type="button" onClick={handleMeetingButtonClick} className="mt-2 p-2 border border-transparent text-xs lg:text-sm rounded-md text-black bg-[#00C9FF] hover:bg-opacity-75 transition-all duration-200 flex space-x-2 items-center">
                        <p>Set Meeting Time</p>
                        <img className='w-4' src='../static/images/share.png'></img>
                        </button>
                    </div>
                </form>
            </div>
          </div>
        </div>
      );
    };
    
    export default Popup;
