import './DailyChallenge.css';

const DailyChallenge = () => {

    let daily_level = "продвинутый";
    let time_left = "12 ч. 25 мин.";

    return (
        <div className='dailychallenge'>
            <h2 className='dailychallenge__title'>ЕЖЕДНЕВНОЕ ЗАДАНИЕ</h2>
            <p className='dailychallenge__level'>Уровень: {daily_level}</p>
            <div className='dailychallenge__bottom'>
                <div className='dailychallenge__tags'>
                    <div className='tag'>
                        #JS
                    </div>
                    <div className='tag'>
                        #JAVASCRIPT
                    </div>
                </div>
                <p className='dailychallenge__time'>Осталось времени: {time_left}</p>
            </div>
        </div>
    )
}

export default DailyChallenge;