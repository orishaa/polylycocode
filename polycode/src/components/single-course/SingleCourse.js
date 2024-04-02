import React from 'react';
import './SingleCourse.css';
import { useParams } from 'react-router-dom';
import { CoursesList } from '../suggestedcourses/CoursesList';
import star from '../../icons/star.png';
import halfstar from '../../icons/halfstar.png';

import right_arrow from '../../icons/right_arrow.png';

const SingleCourse = () => {

    const { id } = useParams();
    const course = CoursesList[id];

    const isIntegerRating = Number.isInteger(course.rating);

    const starsArray = [];
    const fullStars = isIntegerRating ? course.rating : Math.floor(course.rating);
    const hasHalfStar = !isIntegerRating && course.rating - Math.floor(course.rating) !== 0;

    for (let i = 0; i < fullStars; i++) {
        starsArray.push(<img key={i} src={star} className='star' alt='Звезда' />);
    }


    if (hasHalfStar) {
        starsArray.push(<img key="half" src={halfstar} className='star' alt='Половина звезды' />);
    }

    return (
        <section className='singlecourse'>
            <h1 className='singlecourse__title'>{course.name}</h1>
            <div className='singlecourse__rating'>
                {starsArray.map(star => star)}
                <p className='text-800'>{course.rating}</p>
            </div>
            <p className='singlecourse__description'>
                {course.description}
            </p>
        
            <ul className='singlecourse__filling'>
                <li className='singlecourse__fill'>
                    {course.blocks} БЛОК(ОВ)
                </li>
                <li className='singlecourse__fill'>
                    {course.tasks - course.exams} ЗАДАЧ(А)
                </li>
                <li className='singlecourse__fill'>
                    {course.exams} ЭКЗАМЕН(ОВ)
                </li>
                
            </ul>
            
            <p className='text-800 singlecourse__users'>Данный курс уже прошли: {course.user_quantity} человек(а)</p>

            <div className='singlecouse__interaction'>
                <button className='singlecourse__button'>Приступить к прохождению <img alt="Стрелка" src={right_arrow} className='right-arrow' /></button>
            </div>
           
        </section>
    )
}

export default SingleCourse;
