import React, {useState} from 'react';
import './TaskOne.css';

function useForm () {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const validate = () => {
        if (firstName === "") {
            setError("Поле firstName не должно быть пустым");
            return error;
        } else if (lastName === "") {
            setError("Поле lastName не должно быть пустым");
            return error;
        } else if (!/^[A-Z0-9]+\@[A-Z0-9]+\.[A-Z0-9]{2,}$/i.test(email)) {
            setError("Можно ввести только латинские буквы, цифры и обязательно должны присутствовать символы «@» и «.», после «.» должно быть не менее 2-х символов");
            return error;
        } else if (!/[a-z]/i.test(password)) {
            setError("Поле password должно содержать не менее 5 символов, включая числа и специальные символы");
            return error;
        } else if (!/[0-9]/i.test(password)) {
            setError("Поле password должно содержать не менее 5 символов, включая числа и специальные символы");
            return error;
        } else if (!/\W/i.test(password)) {
            setError("Поле password должно содержать не менее 5 символов, включая числа и специальные символы");
            return error;
        } else if (password.length < 5) {
            setError("Поле password должно содержать не менее 5 символов, включая числа и специальные символы");
            return error;
        } else if (confirmPassword !== password) {
            setError("Поля password и confirmPassword не совпадают");
            return error;
        } else {
            setError("");
            return error;
        }  
    }

    const onSubmitHandle = (event) => {
        event.preventDefault();

        if (error !== "") return;

        alert(JSON.stringify({firstName,
            lastName,
            email,
            password,
            confirmPassword,}));

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        };
    
    return {firstName, setFirstName, lastName, setLastName, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, error, validate, onSubmitHandle}
}

function TaskOne() {
    const {firstName, setFirstName, lastName, setLastName, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, error, validate, onSubmitHandle} = useForm();
    return (
        <div className="form-container">
            <div className="error-message">{error}</div>
            <form onSubmit={onSubmitHandle}>
                <input type="text" name="firstName" placeholder="First Name" className="form-input"
                       onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
                <input type="text" name="lastName" placeholder="Last Name" className="form-input"
                       onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                <input type="email" name="email" placeholder="Email" className="form-input"
                       onChange={(e) => setEmail(e.target.value)} value={email}/>
                <input type="password" name="password" placeholder="Password" className="form-input"
                       onChange={(e) => setPassword(e.target.value)} value={password}/>
                <input type="password" name="confirmPassword" placeholder="Confirm Password" className="form-input"
                       onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
                <button type="submit" onClick={validate} className="form-button">Register</button>
            </form>
        </div>
    );
}

export default TaskOne;
