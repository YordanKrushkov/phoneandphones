import styles from './index.module.css';
import { useState, useContext } from 'react';
import { Link,useHistory } from 'react-router-dom';
import { AuthContext } from '../../Context';
import authenticate from '../../Services/auth';
import Loader from '../../Components/Loader';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const { login } = useContext(AuthContext);
    const history = useHistory();
    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        const user = {
            email: e.target.email.value.trim(),
            password: e.target.password.value.trim(),
        };
        const onSuccsess=(user)=>{
            login(user);
            localStorage.setItem("user", user.email);
            setLoading(false);
            history.push('/')
        }; 
        const onError=()=>{
               setLoading(false);
               history.push('/login');
        };
        await authenticate('http://localhost:4000/user/login', 
                user, 
                user=> onSuccsess(user), 
                err => onError());
    };

    return (
        <div className={ styles.loginWrapper }>
            { loading && <Loader /> }
            <form onSubmit={ submitHandler }>
                <h1>Login</h1>
                <div className={ styles.formWrapper }>
                    <input type="email" id="email" placeholder="Email address" />
                    <input type="password" id="password" placeholder="Password" />
                    <p>Don't have an account? <Link to="/register">Sign up</Link></p>
                </div>
                <button>LogIn</button>
            </form>

        </div>
    );
};

export default Login;