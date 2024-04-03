import Activity from '../activity/Activity';
import Achievements from '../achievements/Achievements';
import Courses from '../courses/Courses';

import {useState, useEffect} from 'react';  
import axios from 'axios'

import './UserInfo.css';

const UserInfo = () => {
    
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

    return (
        <>
        {userData && (
            <div className="userinfo">
                <h1 className="userinfo__title">Профиль пользователя {userData.nickname}</h1>
                <Activity />
                <Achievements />
                <Courses />
            </div>
        )}
        
        </>
    )
}

export default UserInfo;