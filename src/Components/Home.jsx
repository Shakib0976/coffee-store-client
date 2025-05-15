import React from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCart from './CoffeeCart';

const Home = () => {
    const data = useLoaderData();
    
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    data.map(coffee => <CoffeeCart key={coffee._id} coffee={coffee}></CoffeeCart>) 
                }
            </div>
        </div>
    );
};

export default Home;