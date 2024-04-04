import './WeeklyCase.css';

const WeeklyCase = () => {
    return (
        <section className="dailytask">
            <h1 className='dailytask__title'>Еженедельный кейс</h1>
            <div className='dailychallenge__tags'>
                    <div className='tag'>
                        #СВОЙ_СТЕК
                    </div>
                </div>
            <p className='dailytask__description'>
            Разработайте веб-приложение для публикации статей блога. Пользователи должны иметь возможность создавать новые статьи, редактировать существующие, удалять и просматривать их. Статьи должны содержать заголовок, текст и метаданные (например, дата публикации). Подумайте о том, как организовать структуру вашего проекта, включая маршруты API, модели данных, контроллеры и пользовательский интерфейс. Обеспечьте безопасность вашего приложения, особенно в отношении аутентификации и авторизации. Для улучшения вашего опыта разработки можете рассмотреть внедрение функциональных и интеграционных тестов.
            </p>
            <p className='dailychallenge__time'>Осталось времени: 1 д. 12 ч. 25 мин.</p>
            <div className='weeklycase__data'>
                     <p >Для сдачи кейса Вам необходимо прикрепить:</p>
                     <ul className='weeklycase__list'>
                        <li className='weeklycase__item'>
                            - Файл отчёта по кейсу (.docx или .pdf)
                        </li>
                        <li className='weeklycase__item'>
                            - Архив с проектом
                        </li>
                        <li className='weeklycase__item'>
                            - Руководство пользователя или инструкция по работе с приложением
                        </li>
                     </ul>
            </div>
            <p className='weeklycase__files'>Файлы:</p>
            <input type="file" multiple></input>
            <div className="coursepage__button-success">Отправить на проверку</div>
            
        </section>
    )
}

export default WeeklyCase;