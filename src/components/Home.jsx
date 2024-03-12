import React from 'react';
import backgroundImage from '../images/gym.jpg'

const Home = () => {
   

    return (
        <div className="relative bg-cover bg-center h-screen" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-end pr-10">
                <div className="flex flex-col space-y-4 items-end">
                    <h1 className=" text-white text-4xl font-bold text-right mb-4">Welcome to Our Gym</h1>
                    <p className=" text-white text-lg text-right mb-6">Get fit and stay healthy with our range of classes and equipment.</p>
                    <div>
                        <button className="bg-slate-600 hover:bg-blue-600 text-white font-bold py-2 px-4 mr-4 rounded">Join Now</button>
                        <button className="bg-slate-600 hover:bg-blue-600 text-white font-bold py-2 px-4 mr-4 rounded">Classes</button>
                        <button className="bg-slate-600 hover:bg-blue-600 text-white font-bold py-2 px-4 mr-4 rounded">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
