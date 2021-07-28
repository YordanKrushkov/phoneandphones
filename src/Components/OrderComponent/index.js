import styles from './index.module.css';

const Order = ({ setOrder, userEmail }) => {

    const clickHandler = () => {
        setOrder(false)
    };

    return (
        <div className={ styles.wrapper }>
            <div className={ styles.container }>
                <h1>Congratulations!</h1>
                <h3>A memnber of our team will contact you shortly at: { userEmail }</h3>
                <button onClick={ clickHandler }>Thank you!</button>
            </div>
        </div>
    );
}

export default Order;