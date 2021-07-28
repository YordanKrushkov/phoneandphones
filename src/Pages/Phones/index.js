import { useState, useEffect } from 'react';
import SingleCard from '../../Components/SingleCard';
import styles from './index.module.css';
import Loader from '../../Components/Loader';
import useFetch from '../../Hooks/useFetch';

const Phones = () => {

    const { phones } = useFetch('https://phonesandphones.herokuapp.com/phones');
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        if (phones) {
            setLoading(false)
        }
    }, [phones])
    return (
        <div className={ styles.phonesWrapper }>
            { loading && <Loader /> }
            <div className={ styles.phonesList }>
                { phones && phones.map(x => <SingleCard data={ x } key={ x._id } />) }
            </div>
        </div>
    );
}

export default Phones;

