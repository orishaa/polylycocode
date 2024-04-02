import './RegistrationForm.css';

const RegistrationForm = () => {
    return (
        <section className="registration">
            <form className="registration__form">
                <h1 className='registration__title'>Регистрация</h1>
                <ul className='registration__list'>
                    <li className='registration__list--item'>
                        <input required autoComplete='new-password' placeholder='Никнейм*' className='registration__input' />
                    </li>
                    <li className='registration__list--item'>
                        <input required autoComplete='new-password' placeholder='Имя*' className='registration__input' />
                    </li>
                    <li className='registration__list--item'>
                        <input required autoComplete='new-password' placeholder='Фамилия*' className='registration__input' />
                    </li>
                    <li className='registration__list--item'>
                        <input autoComplete='new-password' placeholder='Отчество' className='registration__input' />
                    </li>
                    <li className='registration__list--item'>
                        <input required autoComplete='new-password' type="email" placeholder='Почта*' className='registration__input' />
                    </li>
                    <li className='registration__list--item'>
                        <input required autoComplete='new-password' type="password" placeholder='Пароль*' className='registration__input' />
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
    )
}

export default RegistrationForm;