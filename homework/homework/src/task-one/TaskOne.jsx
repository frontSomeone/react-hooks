import React, {useRef, useState} from 'react';
import './TaskOne.css';

function useForm (firstNameInp, lastNameInp, emailInp, passwordInp, confirmPasswordInp) {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const messErrName = () => {
            setError(firstNameInp.current.value === "" || lastNameInp === "" ? "Поля firstName и lastName не должны быть пустыми" : setError("")) 
    };
    const messErrEmail = () => {
            setError(!/^[A-Z0-9]+\@[A-Z0-9]+\.[A-Z0-9]{2,}$/i.test(emailInp.current.value) ? "Можно ввести только латинские буквы, цифры и обязательно должны присутствовать символы «@» и «.», после «.» должно быть не менее 2-х символов" : setError(""))
    };
    const messErrPass = () => {
            setError(passwordInp.current.value.length < 5 ? "Поле password должно содержать не менее 5 символов, включая числа и специальные символы" : setError(""))
    };
    const messErrConfPass = () => {
            setError(confirmPasswordInp.current.value !== passwordInp.current.value ? "Поля password и confirmPassword не совпадают" : setError(""))
    };

    const onSubmitHandle = (event) => {
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
        };
    return {firstName, lastName, email, password, confirmPassword, error, messErrName, messErrEmail, messErrPass, messErrConfPass, onSubmitHandle}
}

function TaskOne(messErrName, messErrEmail, messErrPass, messErrConfPass, onSubmitHandle) {
    const firstNameInp = useRef();
    const lastNameInp = useRef();
    const emailInp = useRef();
    const passwordInp = useRef();
    const confirmPasswordInp = useRef();
    const {firstName, lastName, email, password, confirmPassword, error} = useForm(firstNameInp, lastNameInp, emailInp, passwordInp, confirmPasswordInp);
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
                <input ref={firstNameInp} type="text" name="firstName" placeholder="First Name" className="form-input"
                       onChange={(e) => e.target.value = messErrName} value={firstName}/>
                <input ref={lastNameInp} type="text" name="lastName" placeholder="Last Name" className="form-input"
                       onChange={(e) => e.target.value = messErrName} value={lastName}/>
                <input ref={emailInp} type="email" name="email" placeholder="Email" className="form-input"
                       onChange={(e) => e.target.value = messErrEmail} value={email}/>
                <input ref={passwordInp} type="password" name="password" placeholder="Password" className="form-input"
                       onChange={(e) => e.target.value = messErrPass} value={password}/>
                <input ref={confirmPasswordInp} type="password" name="confirmPassword" placeholder="Confirm Password" className="form-input"
                       onChange={(e) => e.target.value = messErrConfPass} value={confirmPassword}/>
                <button type="submit" className="form-button">Register</button>
            </form>
        </div>
    );
}

export default TaskOne;