import {Link} from 'react-router-dom';

import './Header.css';

const Header = () => {

    var name = "Сергей";
    var surname = "Мякотных";

    return (
        <header>
            <div className='header__container'>
                <a href="/" className='header__logo'>
                    ПОЛИ<span className='text-800'>КОД</span> МИРЭА
                </a>
                <ul className='header__navbar'>
                    <li className='navbar__item'>
                        <a href="/" className='navbar__link'>ГЛАВНАЯ</a>
                    </li>
                    <li className='navbar__item'>
                        <Link to="/learning" className='navbar__link'>ОБУЧЕНИЕ</Link>
                    </li>
                    <li className='navbar__item'>
                        <a href="/" className='navbar__link'>ТАБЛИЦА ЛИДЕРОВ</a>
                    </li>
                    <li className='navbar__item'>
                        <a href="/" className='navbar__link'>ФОРУМ</a>
                    </li>
                </ul>
                <ul id="header-account" className='header__account'>
                    <li className='account__item account__login'>
                        <Link onClick={() => {window.scrollTo(0,0)}} to="/login" className='account__link'>ВХОД</Link>
                    </li>
                    <li className='account__item account__registration'>
                        <Link onClick={() => {window.scrollTo(0,0)}} to="/registration" className='account__link text-800'>РЕГИСТРАЦИЯ</Link>
                    </li>
                </ul>
                <div id="header-user" className='header__account hidden'>
                    <Link to="/profile" className='account__link text-800'>{name + " " + surname}</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;