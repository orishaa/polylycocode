import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const [successLogin, setSuccessLogin] = useState(false);
    const [failedLogin, setFailedLogin] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:1234/login', {
                email,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Ответ из базы данных:', response.data);
            setSuccessLogin(true);
            const token = response.data.token;
            localStorage.setItem('token', token);
            navigate('/profile');
            window.location.reload();
            

            setTimeout(() => {
                setSuccessLogin(false);
            }, "2000");

        } catch (error) {
            console.error('Ошибка при отправке данных на бэкенд:', error);
            setFailedLogin(true);

            setTimeout(() => {
                setFailedLogin(false);
            }, "2000");
        }
    };

    return (
        <section className="login">
            <div className="login__container">
                <form className="login__form" onSubmit={handleSubmit}>
                    <h1 className='login__title'>Авторизация</h1>
                    {successLogin && (
                        <p className="text-green text-800">Вы успешно авторизовались</p>
                    )}
                    
                    {failedLogin && (
                         <p className="text-red text-800">Вы не смогли авторизоваться</p>
                    )}
                   
                    <div className='login__inputs'>
                        <input 
                            autoComplete="new-password" 
                            type="email" 
                            placeholder="Почта" 
                            className='login__input' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input 
                            autoComplete="new-password" 
                            type="password" 
                            placeholder="Пароль" 
                            className='login__input' 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <a href="/recovery" className='login__remember'>
                        Забыли <span className='text-589FC2'>пароль?</span>
                    </a>
                    <button type="submit" className='login__button'>
                        Войти
                    </button>
                </form>
                <div className="login__info">
                <h2 className='login__info--title'>Добро пожаловать в ПОЛИ<span className='text-800'>КОД</span> МИРЭА!</h2>
                    <p className='login__info--text'>
                    Мы рады приветствовать вас на нашем сайте, посвященном программированию, решению задач и обмену опытом. Здесь вы найдете множество интересных материалов и задач для развития своих навыков в области информационных технологий.
                    </p>
                    <a href="/" className='login__info--link'>Ваши выгоды и возможности с ПОЛИКОД МИРЭА</a>
                    <h2 className='login__info--title'>Вы ещё не зарегистрированы?</h2>
                    <p className='login__info--text'>
                    Присоединяйтесь к нашему сообществу уже сегодня и получите доступ ко всем возможностям нашего сайта по программированию и решению задач!
                    </p>
                    <Link to="/register" className='login__info--button'>
                        Зарегистрироваться
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Login;