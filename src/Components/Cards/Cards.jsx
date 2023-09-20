/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = ({HandleSelection}) => {
    const [courses, setCourses] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCourses(data.courses))
    },[])
    return (
        <div className='grid grid-cols-3 gap-6'>
            {
                courses.map(course => <Card key={course.id} course={course}
                    HandleSelection={HandleSelection}
                ></Card>)
            }
        </div>
    );
};

export default Cards;