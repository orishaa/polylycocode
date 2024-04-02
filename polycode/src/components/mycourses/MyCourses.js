import './MyCourses.css';

const MyCourses = () => {

    let courseName = "Основы Python";
    let courseLevel = "начинающий";
    let coursePersentage = "55%";
    let courseTasks = "11";

    return (
        <div className='mycourses'>
            <h2 className='mycourses__title'>МОИ КУРСЫ</h2>
            <ul className='mycourses__list'>
                <li className='mycourses__item'>
                    <div className='mycourses__item--left'>
                        <p className='mycourses__item--title'><span className='text-800'>{courseName}</span></p>
                        <p className='mycourses__item--level'>Уровень: <span className='text-589FC2'>{courseLevel}</span></p>
                    </div>
                    <div className='mycourses__item--right'>
                        <p className='mycourses__item--persentage'>Процент прохождения: {coursePersentage}</p>
                        <p className='mycourses__item--tasks'>Решено задач: {courseTasks}</p>
                    </div>
                </li>
                <li className='mycourses__item'>
                    <div className='mycourses__item--left'>
                        <p className='mycourses__item--title'><span className='text-800'>{courseName}</span></p>
                        <p className='mycourses__item--level'>Уровень: <span className='text-589FC2'>{courseLevel}</span></p>
                    </div>
                    <div className='mycourses__item--right'>
                        <p className='mycourses__item--persentage'>Процент прохождения: {coursePersentage}</p>
                        <p className='mycourses__item--tasks'>Решено задач: {courseTasks}</p>
                    </div>
                </li>
                <li className='mycourses__item'>
                    <div className='mycourses__item--left'>
                        <p className='mycourses__item--title'><span className='text-800'>{courseName}</span></p>
                        <p className='mycourses__item--level'>Уровень: <span className='text-589FC2'>{courseLevel}</span></p>
                    </div>
                    <div className='mycourses__item--right'>
                        <p className='mycourses__item--persentage'>Процент прохождения: {coursePersentage}</p>
                        <p className='mycourses__item--tasks'>Решено задач: {courseTasks}</p>
                    </div>
                </li>
                <li className='mycourses__item'>
                    <div className='mycourses__item--left'>
                        <p className='mycourses__item--title'><span className='text-800'>{courseName}</span></p>
                        <p className='mycourses__item--level'>Уровень: <span className='text-589FC2'>{courseLevel}</span></p>
                    </div>
                    <div className='mycourses__item--right'>
                        <p className='mycourses__item--persentage'>Процент прохождения: {coursePersentage}</p>
                        <p className='mycourses__item--tasks'>Решено задач: {courseTasks}</p>
                    </div>
                </li>
                <li className='mycourses__item'>
                    <div className='mycourses__item--left'>
                        <p className='mycourses__item--title'><span className='text-800'>{courseName}</span></p>
                        <p className='mycourses__item--level'>Уровень: <span className='text-589FC2'>{courseLevel}</span></p>
                    </div>
                    <div className='mycourses__item--right'>
                        <p className='mycourses__item--persentage'>Процент прохождения: {coursePersentage}</p>
                        <p className='mycourses__item--tasks'>Решено задач: {courseTasks}</p>
                    </div>
                </li>
                <li className='mycourses__item'>
                    <div className='mycourses__item--left'>
                        <p className='mycourses__item--title'><span className='text-800'>{courseName}</span></p>
                        <p className='mycourses__item--level'>Уровень: <span className='text-589FC2'>{courseLevel}</span></p>
                    </div>
                    <div className='mycourses__item--right'>
                        <p className='mycourses__item--persentage'>Процент прохождения: {coursePersentage}</p>
                        <p className='mycourses__item--tasks'>Решено задач: {courseTasks}</p>
                    </div>
                </li>
                <li className='mycourses__item'>
                    <div className='mycourses__item--left'>
                        <p className='mycourses__item--title'><span className='text-800'>{courseName}</span></p>
                        <p className='mycourses__item--level'>Уровень: <span className='text-589FC2'>{courseLevel}</span></p>
                    </div>
                    <div className='mycourses__item--right'>
                        <p className='mycourses__item--persentage'>Процент прохождения: {coursePersentage}</p>
                        <p className='mycourses__item--tasks'>Решено задач: {courseTasks}</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default MyCourses;