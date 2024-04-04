import { useState, useEffect } from 'react';  
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './User.css';
import user_photo from '../../images/profile.png';

const User = () => {
    const [isLoggedIn, setIsLoggedIn] = useState();
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
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };
        fetchData(); 
    }, []);

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/');
        window.location.reload();
    };

    return (
        <>
        {userData && (
            <div className='user'>
            <img alt="Фотография пользователя" src={user_photo} className='user__photo' />
            <p className='user__name'>{userData.firstname + " " + userData.lastname}</p>
            <Link onClick={() => {window.scrollTo(0,0)}} to="/editprofile" className='user__button'>Редактировать</Link>
            <p className='user__status'>Статус: <span className='text-green'>онлайн</span></p>
            <p className='user__date'>Дата регистрации: {userData.createdAt ? userData.createdAt.slice(0, 10).replace(/-/g, '.') : ''}</p>
            <button className='exit' onClick={handleLogout}>Выйти из аккаунта</button>
            </div>
        )}
        </>
        
    )
}

export default User;