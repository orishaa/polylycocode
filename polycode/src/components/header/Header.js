import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    return;
                }
                const response = await axios.get('http://localhost:1234/getInfo', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setUserData(response.data); 
                setIsLoggedIn(true); 
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };
        fetchData(); 
    }, []);

    return (
        <header>
            <div className='header__container'>
                <Link onClick={() => {window.scrollTo(0,0)}} to="/" className='header__logo'>
                    ПОЛИ<span className='text-800'>КОД</span> МИРЭА
                </Link>
                <ul className='header__navbar'>
                    <li className='navbar__item'>
                        <Link onClick={() => {window.scrollTo(0,0)}} to="/" className='navbar__link'>ГЛАВНАЯ</Link>
                    </li>
                    <li className='navbar__item'>
                        <Link onClick={() => {window.scrollTo(0,0)}} to="/learning" className='navbar__link'>ОБУЧЕНИЕ</Link>
                    </li>
                    <li className='navbar__item'>
                        <a href="/" className='navbar__link'>ТАБЛИЦА ЛИДЕРОВ</a>
                    </li>
                    <li className='navbar__item'>
                        <a href="/" className='navbar__link'>ФОРУМ</a>
                    </li>                    
                </ul>

                <div id="header-user" className={`header__account ${isLoggedIn ? '' : 'hidden'}`}>
                    {isLoggedIn && userData && (
                        <Link onClick={() => {window.scrollTo(0,0)}} to="/profile" className='account__link text-800'>{userData.firstname + " " + userData.lastname}</Link>
                    )}
                </div>

                {!isLoggedIn && (
                    <ul id="header-account" className={`header__account ${!isLoggedIn ? '' : 'hidden'}`}>
                        <li className='account__item account__login'>
                            <Link onClick={() => {window.scrollTo(0,0)}} to="/login" className='account__link'>ВХОД</Link>
                        </li>
                        <li className='account__item account__registration'>
                            <Link onClick={() => {window.scrollTo(0,0)}} to="/registration" className='account__link text-800'>РЕГИСТРАЦИЯ</Link>
                        </li>
                    </ul>
                )}
            </div>
        </header>
    );
}

export default Header;