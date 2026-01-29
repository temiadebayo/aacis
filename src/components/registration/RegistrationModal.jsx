import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const RegistrationModal = ({ isOpen, closeModal, currency,  amount  }) => {
  if (!isOpen) return null; 
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 font-montserrat">
        
        <div className="bg-white  bg-[url(/src/assets/themed_bg.png)] bg-repeat bg-contain xl:p-4 p-2  rounded-lg shadow-lg">
            <div className="bg-white p-6 max-w-md w-full">
                <h2 className="text-2xl font-bold text-center mb-4">Registration Confirmation</h2>
                <p className="text-lg text-center mb-6">
                Thank you for your registration! Please email your payment receipt, as well as your full name as it appears on your registration form to <span className="text-blue-500">aacis@aquarianconsult.com</span> to receive a registration confirmation.
                </p>

                {amount !== 0 && (
                    <>
                        <p className="text-sm mb-6 text-center">
                            <strong>Amount:</strong><br />
                            ${amount}
                            {/* {amount}{currency} */}
                        </p>
                        <p className="text-sm mb-6 text-center">
                            <strong>Bank Details:</strong><br />
                            <strong>Bank:</strong> Providus Bank <br />
                            <strong>Account Number:</strong> 1306906733 <br />
                            <strong>Bank Name:</strong> Aquarian Consult Limited
                        </p>
                    </>
                )}

                <div className="text-center">
                <button 
                    onClick={closeModal}
                    className="bg-[#a30907] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#8a0806]"
                >
                    Close
                </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default RegistrationModal;
