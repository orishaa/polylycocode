import Activity from '../activity/Activity';
import Achievements from '../achievements/Achievements';
import Courses from '../courses/Courses';

import './UserInfo.css';

const UserInfo = () => {
    var nickname = "keeq0";
    return (
        <div className="userinfo">
            <h1 className="userinfo__title">Профиль пользователя {nickname}</h1>
            <Activity />
            <Achievements />
            <Courses />
        </div>
    )
}

export default UserInfo;