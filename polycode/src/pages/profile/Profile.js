import User from "../../components/user/User";
import UserInfo from "../../components/userinfo/UserInfo";

import './Profile.css';

const Profile = () => {
    return (
        <section className="profile">
            <User />
            <UserInfo />
        </section>
    )
}

export default Profile;