import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationForm.css';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        nickname: '',
        firstname: '',
        lastname: '',
        patronymic: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            const response = await axios.post('http://localhost:1234/register', formData);
            console.log(response.data); 
            const token = response.data.token;
            localStorage.setItem('token', token);
        
            setFormData({
                nickname: '',
                firstname: '',
                lastname: '',
                patronymic: '',
                email: '',
                password: ''
            });
        } catch (error) {
            console.error('Ошибка при отправке формы:', error);
        }
    };

    return (
        <section className="registration">
            <form className="registration__form" onSubmit={handleSubmit}>
                <h1 className='registration__title'>Регистрация</h1>
                <ul className='registration__list'>
                    <li className='registration__list--item'>
                        <input required autoComplete='new-password' name="nickname" value={formData.nickname} onChange={handleChange} placeholder='Никнейм*' className='registration__input' />
                    </li>
                    <li className='registration__list--item'>
                        <input required autoComplete='new-password' name="firstname" value={formData.firstname} onChange={handleChange} placeholder='Имя*' className='registration__input' />
                    </li>
                    <li className='registration__list--item'>
                        <input required autoComplete='new-password' name="lastname" value={formData.lastname} onChange={handleChange} placeholder='Фамилия*' className='registration__input' />
                    </li>
                    <li className='registration__list--item'>
                        <input autoComplete='new-password' name="patronymic" value={formData.patronymic} onChange={handleChange} placeholder='Отчество' className='registration__input' />
                    </li>
                    <li className='registration__list--item'>
                        <input required autoComplete='new-password' type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Почта*' className='registration__input' />
                    </li>
                    <li className='registration__list--item'>
                        <input required autoComplete='new-password' type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Пароль*' className='registration__input' />
                    </li>
                </ul>
                <div className='registration__checkbox'>
                    <input className='checkbox' type="checkbox" required />
                    <p>Даю согласие на <a href="/" className='text-589FC2 approval'>обработку персональных данных</a></p>
                </div>
                <button type="submit" className='registration__button'>Зарегистрироваться</button>
                <p className='to-login'>Уже есть аккаунт? <a href="/" className='text-589FC2 approval'>Войти</a></p>
            </form>
        </section>
    );
};

export default RegistrationForm;