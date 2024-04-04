import './WeeklyCase.css';

import { Link } from 'react-router-dom';

const WeeklyCase = () => {

    let weekly_level = "начинающий";
    let time_left = "1 д. 12 ч. 25 мин."

    return (
        <Link to="/weeklycase" className="weeklycase">
            <h2 className='weeklycase__title'>ЕЖЕНЕДЕЛЬНЫЙ КЕЙС</h2>
            <p className='weeklycase__level'>Уровень: {weekly_level}</p>
            <div className='weeklycase__bottom'>
                <div className='weeklycase__tags'>
                    <div className='tag'>
                        #СВОЙСТЕК
                    </div>
                </div>
                <p className='weeklycase__time'>Осталось времени: {time_left}</p>
            </div>
        </Link>
    )
}

export default WeeklyCase;