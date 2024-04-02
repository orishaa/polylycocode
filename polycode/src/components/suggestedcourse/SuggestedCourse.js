import star from '../../icons/star.png';

import {Link} from 'react-router-dom';

const SuggestedCourse = ({name, level, rating, id}) => {
    return (
        <li className='suggestedcourses__item'>
                    <div className='suggestedcourses__item--left'>
                        <p className='text-800'>{name}</p>
                        <p>Уровень: <span className='text-589FC2'>{level}</span></p>
                    </div>
                    <div className='suggestedcourses__item--right'>
                        <div className='suggestedcourses__rating'>
                            <img src={star} className='star' alt="Звезда"/>
                            <p>{rating}</p>
                        </div>
                        <Link to={`/course/${id}`} className='text-800 suggestedcourses__about'>Подробнее</Link>
                    </div>
        </li>
    )
}

export default SuggestedCourse;