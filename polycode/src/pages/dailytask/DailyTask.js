import './DailyTask.css';

const DailyTask = () => {
    return (
        <section className="dailytask">
            <h1 className='dailytask__title'>Ежедневное задание</h1>
            <div className='dailychallenge__tags'>
                    <div className='tag'>
                        #JS
                    </div>
                    <div className='tag'>
                        #JAVASCRIPT
                    </div>
                </div>
            <p className='dailychallenge__level'>Уровень: продвинутый</p>
            <p className='dailytask__description'>
            Создайте консольное приложение, которое позволяет пользователю добавлять задачи, отмечать их как выполненные и просматривать список текущих задач. Пользователь должен иметь возможность ввести команды для выполнения этих операций.
            </p>
            <p className='dailychallenge__time'>Осталось времени: 12 ч. 25 мин.</p>
            <textarea className="coursepage__textarea" placeholder="Начните вводить код здесь.."></textarea>
            <div className="coursepage__buttons">                          
                <div className="coursepage__button-success">Отправить на проверку</div>
                <p className='dailytask__score'>Ваш балл: ?/100</p>
            </div>
        </section>
    )
}

export default DailyTask;