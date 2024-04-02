import CourseItem from '../courseitem/CourseItem';
import './Courses.css';

import { UserCourses } from './UserCourses';

const Courses = () => {

    return (
        <div className='courses'>
            <h2 className='courses__title'>Курсы</h2>
            <ul className='courses__list'>

                {UserCourses.map((item) => {
                    return (
                        <CourseItem id={item.id} level={item.level} name={item.name} persentage={item.persentage} solvedtasks={item.solvedtasks} />
                    )
                })}
            </ul>
        </div>
    )
}

export default Courses;