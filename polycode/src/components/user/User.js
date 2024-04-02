import { Link } from 'react-router-dom';

import './User.css';

import user_photo from '../../images/profile.png';

const User = () => {

    var name = "Сергей";
    var surname = "Мякотных";
    var registration_date = "24.02.2020"

    return (
        <div className='user'>
            <img alt="Фотография пользователя" src={user_photo} className='user__photo' />
            <p className='user__name'>{name + " " + surname}</p>
            <Link to="/editprofile" className='user__button'>Редактировать</Link>
            <p className='user__status '>Статус: <span className='text-green '>онлайн</span></p>
            <p className='user__date'>Дата регистрации: {registration_date}</p>
        </div>
    )
}

export default User;