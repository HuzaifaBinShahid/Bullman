import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="absolute mt-40 bg-black text-white">
                <div className=" flex justify-center">
                    <div className="flex items-center   p-4 m-2">
                        <img src="logo1.png" alt="Logo" className="w-10 h-10 mr-4" />
                        <div>
                            <h6 className="text-sm font-bold">SATISFAIT OU REMBOURSÉ</h6>
                            <p>Satisfait ou Remboursé</p>
                        </div>
                    </div>
                    <div className="flex items-center   p-4 m-2">
                        <img src="logo2.png" alt="Logo" className="w-10 h-10 mr-4" />
                        <div>
                            <h6 className="text-sm font-bold">DESIGNÉ EN FRANCE</h6>
                            <p>Designé En France</p>
                        </div>
                    </div>
                    <div className="flex items-center   p-4 m-2">
                        <img src="logo2.png" alt="Logo" className="w-10 h-10 mr-4" />
                        <div>
                            <h6 className="text-sm font-bold">SPÉCIALISTES À VOTRE ÉCOUTE</h6>
                            <p>Spécialistes À Votre Écoute
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center   p-4 m-2">
                        <img src="logo2.png" alt="Logo" className="w-10 h-10 mr-4" />
                        <div>
                            <h6 className="text-sm font-bold">PRODUITS TESTÉS</h6>
                            <p>Produits Testés</p>
                        </div>
                    </div>
                    <div className="flex items-center   p-4 m-2">
                        <img src="logo2.png" alt="Logo" className="w-10 h-10 mr-4" />
                        <div>
                            <h6 className="text-sm font-bold">RETRAIT SUR PLACE</h6>
                            <p>Retrait sur Place</p>
                        </div>
                    </div>
                    <div className="flex items-center   p-4 m-2">
                        <img src="logo2.png" alt="Logo" className="w-10 h-10 mr-4" />
                        <div>
                            <h6 className="text-sm font-bold">LIVRAISON EN POINTS RELAIS</h6>
                            <p>Livraison En Points Relais</p>
                        </div>
                    </div>




                </div>


                <div className="flex justify-start">
                    <div className="mt-8 ml-16">
                        <h6 className="text-sm font-bold mb-2">MY ACCOUNTS</h6>
                        <ul className="text-sm">
                            <li className='mt-4'>Contact us</li>
                            <li className='mt-4'>Login</li>
                            <li className='mt-4'>My account</li>
                            <li className='mt-4'>Order Tracking</li>
                        </ul>
                    </div>

                    <div className="mt-8 ml-16">
                        <h6 className="text-sm font-bold mb-2">CUSTOMER SERVICE</h6>
                        <ul className="text-sm">
                            <li className='mt-4'>Contact us</li>
                            <li className='mt-4'>Login</li>
                            <li className='mt-4'>My account</li>
                            <li className='mt-4'>Order Tracking</li>
                        </ul>
                    </div>

                    <div className="mt-8 ml-16">
                        <h6 className="text-sm font-bold mb-2">CONTACT DETAILS</h6>
                        <ul className="text-sm">
                            <li className='mt-4'>team@bullmanequipment.com</li>
                            <li className='mt-4'>bullman.team</li>
                        </ul>
                    </div>

                   
                    <h2 className='ml-40'>STAY UP TO DATE</h2>

                    <div className="flex justify-center items-center space-x-4  px-4 py-2">
                   
                        {/* Facebook Logo */}
                        <img src="facebook-logo.png" alt="Facebook Logo " className="p-8 w-8 h-8 hover:bg-blue-600 border border-white" />

                        {/* Instagram Logo */}
                        <img src="instagram-logo.png" alt="Instagram Logo" className=" p-8 w-8 h-8 hover:bg-pink-600 border border-white" />

                        {/* WhatsApp Logo */}
                        <img src="whatsapp-logo.png" alt="WhatsApp Logo" className="p-8 w-8 h-8 hover:bg-green-500 border border-white" />
                    </div>
                </div>

            </div>










        </>





    );
};


export default Footer;
