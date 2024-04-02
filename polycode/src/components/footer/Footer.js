import './Footer.css';

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <p className='footer__text'>
                Нужна помощь? Появился вопрос? Или же есть идея по развитию? Ждём твои мысли на почте: <strong>popopolycode@mail.ru</strong>
                </p>
                <Link to="/" className='footer__logo'>ПОЛИ<span className="text-800">КОД</span> МИРЭА</Link>
            </div>
            
        </footer>
    )
}

export default Footer;