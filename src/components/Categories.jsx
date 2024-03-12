import React from 'react';
import gym1 from '../images/gym1.jpg';
import gym2 from '../images/gym2.jpg';
import gym3 from '../images/gum3.jpg';
import gym4 from '../images/gym4.jpg';

const Categories = () => {
    return (
        <div>
            <h1 className="Gym-lg font-bold pt-8 ml-10 mb-10 underline">ALL Categories</h1>
            <div className="flex justify-center">
                <div className="flex flex-col items-center justify-center">
                    <img src={gym1} className="w-80 h-60" alt="Gym equipment" />
                    <p className="Gym-xs font-bold">Gym 1</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src={gym2} className="w-80 h-60" alt="haha" />
                    <span className="Gym-xs font-bold">Gym 2</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src={gym3} className="w-80 h-60" alt="Gym exercise" />
                    <p className="Gym-xs font-bold">Gym 3</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src={gym4} className="w-80 h-60" alt="Gym fitness" />
                    <p className="Gym-xs font-bold">Gym 4</p>
                </div>


            </div>

            <div className="flex justify-center">
                <div className="flex flex-col items-center justify-center">
                    <img src={gym1} className="w-80 h-60" alt="Gym equipment" />
                    <p className="Gym-xs font-bold">Gym 1</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src={gym2} className="w-80 h-60" alt="haha" />
                    <span className="Gym-xs font-bold">Gym 2</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src={gym3} className="w-80 h-60" alt="Gym exercise" />
                    <p className="Gym-xs font-bold">Gym 3</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src={gym4} className="w-80 h-60" alt="Gym fitness" />
                    <p className="Gym-xs font-bold">Gym 4</p>
                </div>


            </div>

        </div>
    );
};

export default Categories;
