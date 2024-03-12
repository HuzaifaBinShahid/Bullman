import React, { useState } from 'react';
import gym1 from '../images/gym1.jpg';
import gym2 from '../images/gym2.jpg';
import gym3 from '../images/gum3.jpg';
import gym4 from '../images/gym4.jpg';

const Categories = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const renderPhotos = () => {
        switch (selectedCategory) {
            case 'bestsellers':
                return (
                    <div>
                        <div className="flex justify-center">
                            <div className="flex flex-col items-start justify-center">
                                <img src={gym1} className="w-80 h-60" alt="Gym equipment" />
                                <p className="Gym-xs mt-8 ">Gym 1</p>
                                <p className="Gym-xs font-bold mb-8">€82.50</p>
                            </div>
                            <div className="flex flex-col items-start justify-center">
                                <img src={gym2} className="w-80 h-60" alt="haha" />
                                <span className="Gym-xs mt-8 ">Gym 2</span>
                                <p className="Gym-xs font-bold mb-8">€82.50</p>
                            </div>
                            <div className="flex flex-col items-start justify-center">
                                <img src={gym3} className="w-80 h-60" alt="Gym exercise" />
                                <p className="Gym-xs mt-8 ">Gym 3</p>
                                <p className="Gym-xs font-bold mb-8">€82.50</p>
                            </div>
                            <div className="flex flex-col items-start justify-center">
                                <img src={gym4} className="w-80 h-60" alt="Gym fitness" />
                                <p className="Gym-xs mt-8 ">Gym 4</p>
                                <p className="Gym-xs font-bold mb-8">€82.50</p>
                            </div>


                        </div>

                        <div className="flex justify-center">
                            <div className="flex flex-col items-start justify-center">
                                <img src={gym1} className="w-80 h-60" alt="Gym equipment" />
                                <p className="Gym-xs mt-8">Gym 1</p>
                                <p className="Gym-xs font-bold mb-8">€82.50</p>

                            </div>
                            <div className="flex flex-col items-start justify-center">
                                <img src={gym2} className="w-80 h-60" alt="haha" />
                                <span className="Gym-xs mt-8">Gym 2</span>
                                <p className="Gym-xs font-bold mb-8">€82.50</p>
                            </div>
                            <div className="flex flex-col items-start justify-center">
                                <img src={gym3} className="w-80 h-60" alt="Gym exercise" />
                                <p className="Gym-xs mt-8">Gym 3</p>
                                <p className="Gym-xs font-bold mb-8">€82.50</p>
                            </div>
                            <div className="flex flex-col items-start justify-center">
                                <img src={gym4} className="w-80 h-60" alt="Gym fitness" />
                                <p className="Gym-xs mt-8">Gym 4</p>
                                <p className="Gym-xs font-bold mb-8">€82.50</p>
                            </div>


                        </div>


                    </div>
                );
            case 'dumbbells':
                return (
                    <>
                        <div>
                            <div className="flex justify-center">
                                <div className="flex flex-col items-start justify-center">
                                    <img src={gym4} className="w-80 h-60" alt="Gym equipment" />
                                    <p className="Gym-xs mt-8 ">Gym 1</p>
                                    <p className="Gym-xs font-bold mb-8">€32.50</p>
                                </div>
                                <div className="flex flex-col items-start justify-center">
                                    <img src={gym3} className="w-80 h-60" alt="haha" />
                                    <span className="Gym-xs mt-8 ">Gym 2</span>
                                    <p className="Gym-xs font-bold mb-8">€32.50</p>
                                </div>
                                <div className="flex flex-col items-start justify-center">
                                    <img src={gym2} className="w-80 h-60" alt="Gym exercise" />
                                    <p className="Gym-xs mt-8 ">Gym 3</p>
                                    <p className="Gym-xs font-bold mb-8">€32.50</p>
                                </div>
                                <div className="flex flex-col items-start justify-center">
                                    <img src={gym1} className="w-80 h-60" alt="Gym fitness" />
                                    <p className="Gym-xs mt-8 ">Gym 4</p>
                                    <p className="Gym-xs font-bold mb-8">€32.50</p>
                                </div>


                            </div>

                            <div className="flex justify-center">
                                <div className="flex flex-col items-start justify-center">
                                    <img src={gym1} className="w-80 h-60" alt="Gym equipment" />
                                    <p className="Gym-xs mt-8">Gym 1</p>
                                    <p className="Gym-xs font-bold mb-8">€32.50</p>

                                </div>
                                <div className="flex flex-col items-start justify-center">
                                    <img src={gym2} className="w-80 h-60" alt="haha" />
                                    <span className="Gym-xs mt-8">Gym 2</span>
                                    <p className="Gym-xs font-bold mb-8">€32.50</p>
                                </div>
                                <div className="flex flex-col items-start justify-center">
                                    <img src={gym3} className="w-80 h-60" alt="Gym exercise" />
                                    <p className="Gym-xs mt-8">Gym 3</p>
                                    <p className="Gym-xs font-bold mb-8">€32.50</p>
                                </div>
                                <div className="flex flex-col items-start justify-center">
                                    <img src={gym4} className="w-80 h-60" alt="Gym fitness" />
                                    <p className="Gym-xs mt-8">Gym 4</p>
                                    <p className="Gym-xs font-bold mb-8">€32.50</p>
                                </div>


                            </div>


                        </div>
                    </>
                );


            default:
                return (
                    <>
                        <div>
                            <div className="flex justify-center">
                                <div className="flex flex-col items-start justify-center">
                                    <img src={gym1} className="w-80 h-60" alt="Gym equipment" />
                                    <p className="Gym-xs mt-8 ">Gym 1</p>
                                    <p className="Gym-xs font-bold mb-8">€82.50</p>
                                </div>
                                <div className="flex flex-col items-start justify-center">
                                    <img src={gym2} className="w-80 h-60" alt="haha" />
                                    <span className="Gym-xs mt-8 ">Gym 2</span>
                                    <p className="Gym-xs font-bold mb-8">€82.50</p>
                                </div>
                                <div className="flex flex-col items-start justify-center">
                                    <img src={gym3} className="w-80 h-60" alt="Gym exercise" />
                                    <p className="Gym-xs mt-8 ">Gym 3</p>
                                    <p className="Gym-xs font-bold mb-8">€82.50</p>
                                </div>
                                <div className="flex flex-col items-start justify-center">
                                    <img src={gym4} className="w-80 h-60" alt="Gym fitness" />
                                    <p className="Gym-xs mt-8 ">Gym 4</p>
                                    <p className="Gym-xs font-bold mb-8">€82.50</p>
                                </div>


                            </div>

                            <div className="flex justify-center">
                                <div className="flex flex-col items-start justify-center">
                                    <img src={gym1} className="w-80 h-60" alt="Gym equipment" />
                                    <p className="Gym-xs mt-8">Gym 1</p>
                                    <p className="Gym-xs font-bold mb-8">€82.50</p>

                                </div>
                                <div className="flex flex-col items-start justify-center">
                                    <img src={gym2} className="w-80 h-60" alt="haha" />
                                    <span className="Gym-xs mt-8">Gym 2</span>
                                    <p className="Gym-xs font-bold mb-8">€82.50</p>
                                </div>
                                <div className="flex flex-col items-start justify-center">
                                    <img src={gym3} className="w-80 h-60" alt="Gym exercise" />
                                    <p className="Gym-xs mt-8">Gym 3</p>
                                    <p className="Gym-xs font-bold mb-8">€82.50</p>
                                </div>
                                <div className="flex flex-col items-start justify-center">
                                    <img src={gym4} className="w-80 h-60" alt="Gym fitness" />
                                    <p className="Gym-xs mt-8">Gym 4</p>
                                    <p className="Gym-xs font-bold mb-8">€82.50</p>
                                </div>


                            </div>


                        </div>
                    </>
                );
        }
    };

    return (
        <div className="mt-12">
        <div className="flex justify-between items-center px-10">
            <div>
                <h1 className="Gym-lg pt-8 ml-10 mb-4 underline font-bold">SELECTIONS</h1>
            </div>
            <div>
                <button className="mr-4 font-bold hover:border-b-4 hover:border-slate-600" onClick={() => handleCategoryClick('bestsellers')}>BESTSELLERS</button>
                <button className="mr-4 font-bold hover:border-b-4 hover:border-slate-600" onClick={() => handleCategoryClick('dumbbells')}>DUMBBELLS</button>
                <button className="mr-4 font-bold hover:border-b-4 hover:border-slate-600" onClick={() => handleCategoryClick('bestsellers')}>PLATES</button>
                <button className="mr-4 font-bold hover:border-b-4 hover:border-slate-600" onClick={() => handleCategoryClick('dumbbells')}>BAREBELLS</button>
                <button className="mr-4 font-bold hover:border-b-4 hover:border-slate-600" onClick={() => handleCategoryClick('bestsellers')}>MACHINE & ERGOS</button>
                <button className="mr-4 font-bold hover:border-b-4 hover:border-slate-600" onClick={() => handleCategoryClick('dumbbells')}>FREE SHIPPING</button>
            </div>
        </div>
    
        <div className="flex justify-center">
            {renderPhotos()}
        </div>
    </div>
    

    );
};

export default Categories;
