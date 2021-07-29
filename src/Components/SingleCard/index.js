import styles from './index.module.css';
import { Image } from 'cloudinary-react';
import React from 'react'
import { useHistory } from 'react-router-dom';

const SingleCard = ({ data }) => {
    let history = useHistory();

    const handleClick = (e) => {
        e.preventDefault()
        history.push(`/phone/${data._id}`)
    }
    return (
        <section className={ styles.card }>
            <header>
                <Image publicId={ data.image } id="phonePicture" cloudName="zltgrd">
                </Image>
            </header>
            <main>
                <h2>{ data.name }</h2>
                <div>
                    <p>Memory: <b>{ data.memory }</b></p>
                    <p>Color: <b>{ data.color }</b></p>
                </div>
            </main>
            <footer>
                <h3>£{ data.price }</h3>
                <button onClick={ handleClick }>Details...</button>
            </footer>
        </section>
    );
}

export default SingleCard;