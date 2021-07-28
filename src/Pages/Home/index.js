import styles from './index.module.css';
import {useRef,useEffect,useState } from 'react';
import useFetch from '../../Hooks/useFetch';
import Loader from '../../Components/Loader';
import SingleCard from '../../Components/SingleCard';
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";

const Home = () => {

    const { phones } = useFetch('http://localhost:4000/phones');
    const ref = useRef(null);
    const [loading,setLoading]=useState(false)

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset
    };
    useEffect(()=>{
        setLoading(true)
        if(phones){
            setLoading(false)
        }
    },[phones])
    return (
        <div className={ styles.homeWrapper }>
            <div className={ styles.heroBanner }>
                <div className={ styles.overlay }></div>
                <div className={ styles.heroTitle }>
                    <h1>Find your new phone</h1>
                    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, esse!</h3>
                </div>
            </div>
            <div>
                { loading && <Loader /> }
                <h2 className={ styles.sectionTitle }>New arrivals</h2>
                <div className={ styles.corousel }>
                    <RiArrowLeftSFill className={ styles.leftArrow } onClick={ () => scroll(-320) } />
                    <RiArrowRightSFill className={ styles.rightArrow } onClick={ () => scroll(320) } />
                    <div className={ styles.cardWrapper } ref={ ref }>
                        { phones && phones.map(x => <SingleCard data={ x } key={ x._id } />) }
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;