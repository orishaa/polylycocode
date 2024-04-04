import welcome_photo from '../../images/welcome.jpg';

import { Link } from 'react-router-dom';

import './Welcome.css';

const Welcome = () => {
    return (
        <section className="welcome">
            <div className="welcome__info">
                <h1 className='welcome__title'>Добро пожаловать в ПОЛИ<span className="text-800">КОД</span> МИРЭА!</h1>
                <p className='welcome__text'>
                Мы рады приветствовать вас в уникальном мире программирования и технологий. Здесь вы найдете не только знания, но и вдохновение для творчества, возможности для роста и обмена опытом с единомышленниками.  
                </p>
                <Link to="/login" className="welcome__button">Присоединиться</Link>
            </div>
            <img src={welcome_photo} alt="Фото" className="welcome__photo"/>
        </section>
    )
}

export default Welcome;