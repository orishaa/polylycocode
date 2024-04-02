import SuggestedCourses from '../../components/suggestedcourses/SuggestedCourses';
import MyCourses from '../../components/mycourses/MyCourses';
import WeeklyCase from '../../components/weeklycase/WeeklyCase';
import DailyChallenge from '../../components/dailychallenge/DailyChallenge';

import './Learning.css';

const Learning = () => {
    return (
        <section className="learning">
            <h1 className='learning__title'>Обучение</h1>
            <DailyChallenge />
            <WeeklyCase />
            <MyCourses />
            <SuggestedCourses />
        </section>
    )
}

export default Learning;