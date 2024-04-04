import './Start.css';

import { Link } from 'react-router-dom';

const Start = () => {
    return (
        <section className='start'>
            <h3 className='start__title'>Присоединяйтесь к нам!</h3>
            <p className='start__text'>
            Присоединяйтесь к нашему сообществу технологических энтузиастов и станьте частью нашей динамичной и инновационной общины! У нас вы найдете множество возможностей для саморазвития, обмена опытом и воплощения своих идей в жизнь. 
            </p>
            <Link to="/login" className="start__button">Хочу начать!</Link>
        </section>
    )
}

export default Start;