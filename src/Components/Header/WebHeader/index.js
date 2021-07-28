import styles from './index.module.css';
import { Link } from 'react-router-dom';

const WebHeader = ({isAuthenticated,logout}) => {

    return (
        <div className={ styles.headerWrapper }>
            <h2>Phone&Phones</h2>
            <ul>
                <li><Link to='/'>Home</Link></li>
                { isAuthenticated && <li><Link to='/add'>Add Phone</Link></li> }
                <li><Link to='/phones'>Phones</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                { isAuthenticated
                    ? <li onClick={ logout }><Link to='/'>Logout</Link></li>
                    : <li><Link to='/login'>Login</Link></li>
                }
            </ul>
        </div>
    );
}

export default WebHeader;