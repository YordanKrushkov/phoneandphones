import styles from './index.module.css';

const Loader = () => {
    return (
        <div data-testid="loader" className={ styles.ring }></div>
    );
}

export default Loader;