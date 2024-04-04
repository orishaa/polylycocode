import { CoursesList } from './CoursesList';

import { Link } from 'react-router-dom';

import SuggestedCourse from '../suggestedcourse/SuggestedCourse';

import './SuggestedCourses.css';

const SuggestedCourses = () => {

    return (
        <div className='suggestedcourses'>
            <div className='suggestedcourses__top'>
                <h2 className='suggestedcourses__title'>ПРЕДЛОЖЕННЫЕ КУРСЫ</h2>
                <Link onClick={() => {window.scrollTo(0,0)}} to="/allcourses" className='sugeestedcourses__allcourses text-589FC2'>Все курсы</Link>
            </div>
            <ul className='suggestedcourses__list'>

                {CoursesList.map((item) => {
                    return (
                        <SuggestedCourse id={item.id} name={item.name} level={item.level} rating={item.rating}/>
                    )
                })}


            </ul>
        </div>
    )
}

export default SuggestedCourses;