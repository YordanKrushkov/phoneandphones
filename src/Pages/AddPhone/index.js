import styles from './index.module.css';
import { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { MdAddAPhoto } from "react-icons/md";
import { uploadSingleImage } from '../../Utils/imagesHandler';
import { verifyForm } from '../../Utils/errorHandlers'
import getCookie from '../../Services/cookies';
import Loader from '../../Components/Loader';
import { cleanup } from '@testing-library/react';

const AddPhone = (props) => {

    const [phone, setPhone] = useState({
        name: '',
        manufacturer: '',
        color: '',
        screen: '',
        processor: '',
        ram: '',
        memory: '',
        price: '',
        description: '',
    });
    const [image, setImage] = useState({});
    const [error, setError] = useState(false);
    const [edit, setEdit] = useState(false)
    const [loading, setLoading] = useState(false)
    const ref = useRef(null);
    const history = useHistory();

    const openImgInput = () => {
        ref.current.click()
    };
    const changeHadnler = (e) => {
        setPhone({
            ...phone,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        if (props.location.state) {
            let id = props.location.state.id
            fetch(`http://localhost:4000/phones/${id}`)
                .then(res => res.json())
                .then(data => {
                    setPhone(data);
                    setEdit(true)
                })
                .catch(err => console.log(err))
                ;
        }
        return function cleanup() {
        };
    }, [phone]);

    useEffect(() => {
        if (error) {
            setLoading(false)
            setTimeout(() => {
                setError(false)
            }, 2000)
        }
        return function cleanup() {
        };
    }, [error]);

    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true)
        let err = verifyForm(phone, image);
        let endpoint = !edit ? '/addphone' : "/update";

        if (!err) {
            fetch(`http://localhost:4000/phones${endpoint}`, {
                method: "POST",
                body: JSON.stringify({ phone: phone, image: image.img }),
                headers: {
                    "Content-type": "application/json",
                    'Authorization': getCookie('x-auth-token')
                }
            })
                .then(res => res.json())
                .then((data) => {
                    console.log(data);
                    setPhone(data)
                    setLoading(false);
                })
                .catch(err => console.log(err));

            setPhone({
                name: '',
                manufacturer: '',
                color: '',
                screen: '',
                processor: '',
                ram: '',
                memory: '',
                price: '',
                description: '',
            });
            setImage({});

            !edit ? history.push('/') : history.push(`/phone/${props.location.state.id}`)
        } else {
            setError(true)
        }

    }


    return (
        <div className={ styles.addPhoneWrapper }>
            { loading && <Loader /> }
            <form onSubmit={ submitHandler }>
                { !edit ? <h1>Add phone</h1> : <h1>Edit Phone</h1> }
                { !edit && <p className={ error ? styles.error : '' }>All fields must be filled *</p> }
                <div>
                    <span className={ styles.openImage } onClick={ openImgInput }>
                        <MdAddAPhoto />
                        { image.name || phone.image || 'Add Image' }
                    </span>
                    <input className={ styles.hiddenInput } type="file" ref={ ref } onChange={ (e) => { uploadSingleImage(e, setImage, setLoading) } } />
                </div>
                <div>
                    <input type="text" name="name" placeholder="Model" onChange={ changeHadnler } value={ phone.name } />
                    <input type="text" name="manufacturer" placeholder="Manufacturer" onChange={ changeHadnler } value={ phone.manufacturer } />
                </div>
                <div>
                    <input type="text" name="color" placeholder="Color" onChange={ changeHadnler } value={ phone.color } />
                    <input type="text" name="screen" placeholder="Screen Size" onChange={ changeHadnler } value={ phone.screen } />
                </div>
                <div>
                    <input type="text" name="processor" placeholder="Processor" onChange={ changeHadnler } value={ phone.processor } />
                    <input type="text" name="ram" placeholder="RAM" onChange={ changeHadnler } value={ phone.ram } />
                </div>
                <div>
                    <input type="text" name="memory" placeholder="Memory" onChange={ changeHadnler } value={ phone.memory } />
                    <input type="number" name="price" placeholder="Price" onChange={ changeHadnler } value={ phone.price } />
                </div>
                <textarea name="description" id="description" placeholder="Type a description" onChange={ changeHadnler } value={ phone.description } />
                <button>SUMBMIT</button>
            </form>
        </div>
    );
}

export default AddPhone;