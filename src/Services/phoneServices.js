import getCookie from './cookies'
const deletePhone = (id) => {
    fetch('http://localhost:4000/phones/delete', {
        method: 'POST',
        body: JSON.stringify({ id: id }),
        headers: {
            'Authorization': getCookie('x-auth-token'),
            'Content-Type': 'application/json',
        }
    }).then(res => console.log(res))
        .catch(err => console.log(err))

};

export default deletePhone