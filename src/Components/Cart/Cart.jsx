/* eslint-disable no-unused-vars */
import React from 'react';

const Cart = ({selectedCourse, creditHour,totalPrice, remaining}) => {
    return (
        <div className=' h-full'>
            <div className='w-[312px] rounded-lg bg-white p-6 space-y-4  fixed'>
            <h3 className='font-bold text-lg text-blue-400 '>Credit Hour Remaining: {remaining} hr</h3>
            <hr />
            <h3 className='font-bold text-xl'>Course Name</h3>
            <ol className='list-decimal pl-5'>
            {
                selectedCourse.map((course, i) => (<li key={i}>{course.title}</li>))
            }
                
            </ol>
            <hr />
            <h4 className='font-medium text-base'>Total Credit Hour: {creditHour}</h4>
            <hr />
            <h3 className='font-semibold text-lg'>Total Price : {totalPrice} USD</h3>

        </div>
        </div>

    );
};

export default Cart;