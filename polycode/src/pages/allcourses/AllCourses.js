import './AllCourses.css';

import { CoursesList } from '../../components/suggestedcourses/CoursesList';

import SuggestedCourse from '../../components/suggestedcourse/SuggestedCourse';

const AllCourses = () => {
    return (
        <section className="allcourses">
            <div className='allcourses__container'>
                <div className='allcourses__filters'>
                    <h2 className='allcourses__filters--title'>Фильтры</h2>
                    <div className='allcourses__filter--block'>
                        <h3 className='filter--block__title'>Уровень курса:</h3>
                        <ul className='allcourses__filters--list'>
                            <li className='allcourses__item'>
                                <input className='checkbox' type="checkbox"/>
                                Начинающий
                            </li>
                            <li className='allcourses__item'>
                                <input className='checkbox' type="checkbox"/>
                                Продвинутый
                            </li>
                            <li className='allcourses__item'>
                                <input className='checkbox' type="checkbox"/>
                                Совершенный
                            </li>
                        </ul>
                    </div>

                    <div className='allcourses__filter--block'>
                        <h3 className='filter--block__title'>Предпочитаемые языки:</h3>
                        <ul className='allcourses__filters--list'>
                            <li className='allcourses__item'>
                                <input className='checkbox' type="checkbox"/>
                                Python
                            </li>
                            <li className='allcourses__item'>
                                <input className='checkbox' type="checkbox"/>
                                C++
                            </li>
                            <li className='allcourses__item'>
                                <input className='checkbox' type="checkbox"/>
                                C#
                            </li>
                            <li className='allcourses__item'>
                                <input className='checkbox' type="checkbox"/>
                                C
                            </li>
                            <li className='allcourses__item'>
                                <input className='checkbox' type="checkbox"/>
                                JavaScript
                            </li>
                            <li className='allcourses__item'>
                                <input className='checkbox' type="checkbox"/>
                                Java
                            </li>
                            <li className='allcourses__item'>
                                <input className='checkbox' type="checkbox"/>
                                SQL
                            </li>
                            <li className='allcourses__item'>
                                <input className='checkbox' type="checkbox"/>
                                Go
                            </li>
                            <li className='allcourses__item'>
                                <input className='checkbox' type="checkbox"/>
                                PHP
                            </li>
                            <li className='allcourses__item'>
                                <input className='checkbox' type="checkbox"/>
                                Kotlin
                            </li>
                        </ul>
                    </div>

                    <div className='allcourses__filter--block'>
                        <h3 className='filter--block__title'>Категории:</h3>
                        <ul className='allcourses__filters--list'>
                            <li className='allcourses__item'>
                                <input className='checkbox' type="checkbox"/>
                                Веб-разработка
                            </li>
                            <li className='allcourses__item'>
                                <input className='checkbox' type="checkbox"/>
                                Бекенд-разработка
                            </li>
                            <li className='allcourses__item'>
                                <input className='checkbox' type="checkbox"/>
                                Мобильная разработка
                            </li>
                            <li className='allcourses__item'>
                                <input className='checkbox' type="checkbox"/>
                                Машинное обучение
                            </li>
                        </ul>
                    </div>
                    <div className='filters__buttons'>
                        <button className='allcourses__filters--button'>Поиск</button>
                        <button className='allcourses__fulters--reset'>Сбросить</button>
                    </div>
                    
                    

                </div>
                <div className='allcourses__courses'>
                    <input placeholder='Поиск...' className='allcourses__search' />
                    <ul className='allcourses__courses--list'>
                        {CoursesList.map((item) => {
                            return (
                                <SuggestedCourse id={item.id} name={item.name} level={item.level} rating={item.rating}/>
                            )
                        })}
                        {CoursesList.map((item) => {
                            return (
                                <SuggestedCourse id={item.id} name={item.name} level={item.level} rating={item.rating}/>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default AllCourses;