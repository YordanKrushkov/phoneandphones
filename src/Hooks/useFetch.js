import { useState,useEffect } from "react";

const useFetch=(url)=>{

    const [phones, setPhones] = useState('');

    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPhones(data)
            })
            .catch(err => console.log(err))  

    },[phones])

    return {phones}
}
export default useFetch