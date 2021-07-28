import styles from './index.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div className={ styles.footer }>
            <ul>
                <li> <Link to="/">Home</Link></li>
                <li><Link to="/phones">Phones</Link></li>
                <li><Link to="/about">About us</Link></li>
            </ul>
            <h2>Phone & Phones</h2>
            <ul>
                <li>Partners</li>
                <li>T&C</li>
                <li>YordanKrushkov 2021&reg;</li>
            </ul>
        </div>
    );
}

export default Footer;
