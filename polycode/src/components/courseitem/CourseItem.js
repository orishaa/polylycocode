import './CourseItem.css';

import {Link} from 'react-router-dom';

const CourseItem = ({id, name, level, persentage, solvedtasks}) => {

    return (
        <li>
        <Link to={`/coursepage/${id}`} className='courses__item'>
                    <div className='courses__item-left'>
                        <p className='courses__item-title text-800'>{name}</p>
                        <p className='courses__item-title'>Уровень: <span className='text-589FC2'>{level}</span></p>
                    </div>
                    <div className='courses__item-right'>
                        <p className='courses__item-title'>Процент прохождения: {persentage}</p>
                        <p className='courses__item-title'>Решено задач: {solvedtasks}</p>
                    </div>
        </Link>
        </li>
    )
}

export default CourseItem;