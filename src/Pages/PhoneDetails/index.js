import styles from './index.module.css';
import { useHistory } from 'react-router-dom';
import { useState, useContext,useEffect } from 'react';
import { Image } from 'cloudinary-react';
import { AuthContext } from '../../Context';
import Order from '../../Components/OrderComponent';
import Loader from '../../Components/Loader';
import useFetch from '../../Hooks/useFetch';
import deletePhone from '../../Services/phoneServices';

const PhoneDetails = () => {
 
    const history = useHistory();
    const { isAuthenticated,userEmail } = useContext(AuthContext);
    const id = history.location.pathname.split('phone/')[1];
    const [order,setOrder]=useState(false);
    const {phones}=useFetch(`https://phonesandphones.herokuapp.com/phones/${id}`);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        setLoading(true)
        if(phones){
            setLoading(false)
        }
    },[phones]);
    
    const orderHandler=(e)=>{
        if(!isAuthenticated){
            history.push('/login')
        }else{
            setOrder(true)
        }
    };
    const deleteHandler=()=>{
        deletePhone(phones._id);
        history.push('/')
    };
    const editHandler=()=>{
        history.push('/add', {id:phones._id})
    };
    
    return (
        <div className={ styles.detailsWrapper }>
        {loading && <Loader/>}
            <div className={ styles.container }>

                <div className={ styles.imageWrapper }>
                    <Image publicId={ phones.image } id="phonePicture" cloudName="zltgrd" />
                </div>
                <div className={ styles.body }>
                    <header>
                        <h1>{ phones.name }</h1>
                        <h2>{ phones.manufacturer }</h2>
                    </header>
                    <main>
                        <h3>Specifications</h3>
                        <div className={ styles.infoWrapper }>
                            <h3>Color:</h3>
                            <h3>{ phones.color }</h3>
                        </div>
                        <div className={ styles.infoWrapper }>
                            <h3>Screen Size:</h3>
                            <h3>{ phones.screen }</h3>
                        </div>
                        <div className={ styles.infoWrapper }>
                            <h3>Processor:</h3>
                            <h3>{ phones.processor }</h3>
                        </div>
                        <div className={ styles.infoWrapper }>
                            <h3>Memory:</h3>
                            <h3>{ phones.memory }GB</h3>
                        </div>
                        <div className={ styles.infoWrapper }>
                            <h3>RAM:</h3>
                            <h3>{ phones.ram }GB</h3>
                        </div>
                        <div className={ styles.priceWrapper }>
                            <h3>Price:</h3>
                            <h2>£{ phones.price }</h2>
                        </div>
                    </main>
                </div>
            </div>
            <footer>
                <h3>Description</h3>
                <p>{ phones.description }</p>
                <button onClick={orderHandler}>Order Now</button>
                { isAuthenticated &&
                    <div className={ styles.buttons }>
                        <button onClick={editHandler}>Edit</button>
                        <button onClick={deleteHandler}>Delete</button>
                    </div>
                }
            </footer>
            {order&&<Order setOrder={setOrder} userEmail={userEmail} />}
        </div>);
}

export default PhoneDetails;