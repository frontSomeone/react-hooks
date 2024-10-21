import React, {useCallback, useState} from 'react';
import './TaskOne.css';

function useForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const checkFirstName = (e) => {
        if (e === "") {
        setError("Поле firstName и lastName не могут быть пустыми");
    } else {
        setError("");
    }};
    const checkLastName = (e) => {
        if (e === "") {
        setError("Поле firstName и lastName не могут быть пустыми");
    } else {
        setError("");
    }};
    const checkEmail = (e) => {
        if (!/^[A-Z0-9]+\@[A-Z0-9]+\.[A-Z0-9]{2,}$/i.test(e)) {
        setError("Можно ввести только латинские буквы, цифры и обязательно должны присутствовать символы «@» и «.», после «.» должно быть не менее 2-х символов");
    } else {
        setError("");
    }};
    const checkPass = () => {
        if (password !== confirmPassword) {
        setError('Пароли не совпадают!');
    } else {
        setError("");
    }};
        const onSubmitHandle = useCallback((event) => {
        event.preventDefault();

        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        } = event;

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');

        alert(JSON.stringify({firstName,
            lastName,
            email,
            password,
            confirmPassword,}));
        
        }, []);
        return {firstName, lastName, email, password, confirmPassword, error, checkFirstName, checkLastName, checkEmail, checkPass, onSubmitHandle};
    }

function TaskOne(checkFirstName, checkLastName, checkEmail, checkPass, onSubmitHandle) {
    const {firstName, lastName, email, password, confirmPassword, error} = useForm();
    /**
     * Вынесите эти стейты в свой хук, все изменения полей должны валидирвоаться по разным правилам:
     * firstName, lastName - не могут быть пустыми
     * email - должен совпадать с паттерном email, оп которому стандартный email адрес- валидный, а test или @some или some@te - будут не валидны
     * password - должен быть не меньше 5 символов и должен включать в себя цифры и сепц символы (%$@ и т.д.)
     * confirmPassword - должен совпадать с password
     * */
    

    // Ваш хук должен возвращать фукцию которую будет использовать форма для сабмита данных
    

        // Здесь вы можете обрабатывать логику отправки формы,
        // например, вызвать ваш API для отправки данных формы

        // После успешной отправки формы, очистите все поля
        


        // И используйте alert, чтобы показать результат
        

    // TODO: реализуйте пользовательский хук для валидации
    // const submitForm = useSubmitForm(onSubmitHandle);

    // Замени сеттеры из стейта на callback-и из твоего хука
    return (
        <div className="form-container">
            <div className="error-message">{error}</div>
            <form onSubmit={onSubmitHandle}> {/* Измените здесь на submitForm, когда он будет готов */}
                <input  type="text" name="firstName" placeholder="First Name" className="form-input"
                       onChange={(e) => checkFirstName(e.target.value)} value={firstName}/>
                <input type="text" name="lastName" placeholder="Last Name" className="form-input"
                       onChange={(e) => checkLastName(e.target.value)} value={lastName}/>
                <input type="email" name="email" placeholder="Email" className="form-input"
                       onChange={(e) => checkEmail(e.target.value)} value={email}/>
                <input type="password" name="password" placeholder="Password" className="form-input"
                       onChange={(e) => checkPass(e.target.value)} value={password}/>
                {/* <input type="password" name="confirmPassword" placeholder="Confirm Password" className="form-input"
                       onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/> */}
                <button type="submit" className="form-button">Register</button>
            </form>
        </div>
    );
}

export default TaskOne;