import React from 'react';
import Products from './Products';
const Display = () => {
    return (
        <div>
            <h1 className='text-center text-[2rem] font-bold py-[40px]'>Explore Cutting-Edge Gadgets</h1>
            <div className='w-[90%] mx-auto grid grid-cols-6 gap-[5px]'>
                <div className='col-span-1 border-2 border-solid border-black'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cupiditate fuga, iusto et aliquam suscipit sequi eveniet, incidunt non laboriosam eum illum dignissimos dicta eligendi corrupti rem, animi deserunt consequatur dolore. Veritatis delectus, cum minus, debitis autem quo ullam quas quae pariatur facilis quibusdam nemo quam eum voluptas iure rem!
                </div>
                <div className='col-span-5 border-2 border-solid border-black'>
                <Products></Products>
                </div>
            </div>
            
        </div>
    );
};

export default Display;