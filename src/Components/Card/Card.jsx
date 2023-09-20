/* eslint-disable no-unused-vars */
import React from 'react';
import { FaDollarSign } from 'react-icons/fa';
import {FaBookOpen} from 'react-icons/fa'



const Card = ({course, HandleSelection}) => {
    const {title, description, image, credit_hours, price}= course


    return (
        <div className='w-[312px] p-4 bg-white rounded-lg space-y-4'>
            <img className='h-[144px] w-[280px] rounded-lg' src={image} alt="" />
            <h3 className='text-lg font-semibold'>{title}</h3>
            <p className='text-base font-normal'>{description}</p>
            <div className='flex items-center gap-4'>
                <div className='flex items-center'>
                    <FaDollarSign/>
                    <p className='pl-1'>Price: {price}</p>
                </div>
                <div className='flex items-center'>
                    <FaBookOpen/>
                    <p className='pl-2'>Credit: {credit_hours} hr</p>
                </div>
            </div>
            <button onClick={()=>HandleSelection(course)} className="btn font-bold w-full bg-blue-400 text-white rounded-lg py-2">Select</button>
            
        </div>
    );
};

export default Card;