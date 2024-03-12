import React, { useState } from 'react';
import gym1 from '../images/gym1.jpg';
import gym2 from '../images/gym2.jpg';
import gym3 from '../images/gum3.jpg';
import gym4 from '../images/gym4.jpg';

const Packs = () => {
    const images = [gym1, gym2, gym3, gym4];
    const [startIndex, setStartIndex] = useState(0);

    const nextSlide = () => {
        const newIndex = startIndex + 2;
        if (newIndex < images.length) {
            setStartIndex(newIndex);
        }
    };

    const prevSlide = () => {
        const newIndex = startIndex - 2;
        if (newIndex >= 0) {
            setStartIndex(newIndex);
        }
    };

    return (
        <>
            <h1 className="Gym-lg font-bold pt-8 ml-10 mb-10 underline">NOS PACKS</h1>
            <div className="mt-40 relative w-full">
                <div className="absolute inset-0 flex items-center justify-center">
                    {images.slice(startIndex, startIndex + 2).map((image, index) => (
                        <img key={index} src={image} alt={`Slide ${startIndex + index + 1}`} className="w-80 max-h-60 mr-4" />
                    ))}
                </div>
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white py-2 px-4 rounded-full hover:bg-opacity-75"
                >
                    &lt;
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white py-2 px-4 rounded-full hover:bg-opacity-75"
                >
                    &gt;
                </button>
            </div>
        </>
    );
};

export default Packs;
