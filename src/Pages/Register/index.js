import styles from './index.module.css';
import { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Loader from '../../Components/Loader';
import authenticate from '../../Services/auth'
import { AuthContext } from '../../Context';

const Register = () => {

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        email: '',
        password: '',
        rePassword: ''
    });
    const [err, setErr] = useState('');

    const { login } = useContext(AuthContext);
    const history = useHistory();
    const changeHandler = (e) => {
        setUser({
            ...user,
            [e.target.id]: e.target.value
        })
    };
    const onSuccsess = (user) => {
        login(user);
        localStorage.setItem("user", user.email);
        history.push('/');
        setLoading(false)
    };
    const onError = () => {
        history.push('/register');
        setLoading(false);
    };
    const submitHandler = async (e) => {
        e.preventDefault();

        setLoading(true);

        if (user.password !== user.rePassword) {
            setErr('The passwords dont\'t match');
            setLoading(false);
            return;
        } else if (user.password < 6) {
            setErr('The password must be at least 6 characters');
            setLoading(false);
            return;
        } else {
            await authenticate('https://phonesandphones.herokuapp.com/user/register',
                user,
                user => onSuccsess(user),
                (e) => onError()
            );
            setUser({
                email: '',
                password: '',
                rePassword: ''
            });
        }
    };
    useEffect(() => {
        if (err) {
            setTimeout(() => {
                setErr('');
            }, 2000)
        }
    }, [err]);

    return (
        <div className={ styles.registerWrapper }>
            { loading && <Loader /> }
            <form onSubmit={ submitHandler }>
                <h1>Register</h1>
                <div className={ styles.formWrapper }>
                    <input type="email" id="email" placeholder="Email address" value={ user.email } onChange={ changeHandler } />
                    <input type="password" id="password" placeholder="Password" value={ user.password } onChange={ changeHandler } />
                    <input type="password" id="rePassword" placeholder="Repeat Password" value={ user.rePassword } onChange={ changeHandler } />
                    <p>You have an account already? <Link to="/login">Login</Link></p>
                </div>
                { err && <p className={ styles.err }>{ err }</p> }
                <button>Register</button>
            </form>

        </div>
    );
}

export default Register;